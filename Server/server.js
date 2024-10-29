const express = require('express');
const cors = require('cors');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
const PORT = 3000;

app.use(cors());

// Function to fetch data with updated cookies
const fetchWithUpdatedCookie = async () => {
  try {
    const response = await fetch("https://www.nseindia.com");
    const cookie = response.headers.get('set-cookie');

    const apiResponse = await fetch("https://www.nseindia.com/api/special-preopen-listing", {
      headers: {
        "accept": "*/*",
        "cookie": cookie,
        "Referer": "https://www.nseindia.com/get-quotes/equity?symbol=WAAREEENER",
      },
      method: "GET"
    });

    const data = await apiResponse.json();
    console.log(data);
    return data?.data || [];
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

// Endpoint to get the latest stock data
app.get('/api/stock-data', async (req, res) => {
  console.log("Fetching stock data...");
  const stockData = await fetchWithUpdatedCookie();
  res.json(stockData);
});

// Function to broadcast stock data to all connected clients
const broadcastStockData = async () => {
  const stockData = await fetchWithUpdatedCookie();
  if (stockData.length > 0) {
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(stockData)); // Send the updated stock data to the client
      }
    });
  }
};

// Set up interval to fetch and broadcast stock data every 5 seconds
setInterval(broadcastStockData, 6000);

// Handle WebSocket connections
wss.on('connection', (ws) => {
  console.log('New client connected');
  
  // You can send an initial message or the current stock data here
  ws.send(JSON.stringify({ message: 'Welcome to the Stock Data WebSocket!' }));

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Optional: Main function to log data to the console periodically
const mainStart = async () => {
  while (true) {
    const stockData = await fetchWithUpdatedCookie();
    console.log(stockData);
    await new Promise(r => setTimeout(r, 10000)); // Delay between fetches
  }
};

// Uncomment this if you want to log data to the console
// mainStart();
