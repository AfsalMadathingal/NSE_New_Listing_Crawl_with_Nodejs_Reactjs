import React, { useEffect, useState } from 'react';
import Card from './Card';

const StockCards = () => {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:3000'); // Adjust the port accordingly

    socket.onmessage = (event) => {
      const updatedStockData = JSON.parse(event.data);
      setStockData(updatedStockData);
    };

    socket.onopen = () => {
      console.log('WebSocket connection established');
    };

    socket.onclose = () => {
      console.log('WebSocket connection closed');
    };

    return () => {
      socket.close(); // Close the socket on component unmount
    };
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {stockData.length === 0 ? (
        <div>Loading...</div>
      ) : (
        stockData?.map((stock) => (
          <Card
            key={stock.symbol}
            symbol={stock.symbol}
            issuePrice={stock.iep}
            change={stock.change}
            perChange={stock.perChange}
            totalQty={stock.ieq}
          />
        ))
      )}
    </div>
  );
};

export default StockCards;
