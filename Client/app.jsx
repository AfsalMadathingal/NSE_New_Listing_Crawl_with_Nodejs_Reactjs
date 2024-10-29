import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import StockCards from './StockCards'

export function App() {
  const [count, setCount] = useState(0)

  const data = [
    {
      symbol: 'WAAREEENER',
      series: 'EQ',
      mktyp: 'G',
      isin: 'INE377N01017',
      iep: '2500.00',
      change: '997.00',
      perChange: '66.33',
      ieq: '2390147.00',
      ieVal: '5975367500.00',
      fPrice: '2500.00',
      fQty: '9.00',
      ttlIeVal: '59753.68',
      prevClose: '1503.00',
      buyOrderCancCnt: '2376.00',
      buyOrderCancVol: '639222.00',
      sellOrderCancCnt: '7407.00',
      sellOrderCancVol: '188137.00',
      status: 'Close',
      chartTodayPath: 'https://nsearchives.nseindia.com/pre_open/WAAREEENEREQG.svg',
      preopenBook: {
        preopen: [
          [Object], [Object],
          [Object], [Object],
          [Object], [Object],
          [Object], [Object],
          [Object], [Object],
          [Object]
        ],
        ato: { totalBuyQuantity: 0, totalSellQuantity: 0 },
        IEP: 2500,
        totalTradedVolume: 2390147,
        finalPrice: 2500,
        finalQuantity: 2390147,
        lastUpdateTime: '28-Oct-2024 09:55:03',
        totalSellQuantity: 936202,
        totalBuyQuantity: 759224,
        totTradedQty: 2390147,
        openPrice: 0,
        highPrice: 2500,
        lowPrice: 2500,
        closePrice: 1503,
        buyOrderCancCnt: 2376,
        buyOrderCancVol: 639222,
        sellOrderCancCnt: 7407,
        sellOrderCancVol: 188137
      },
    }
  ]


  return (
    <>
   <StockCards data={data} />
    </>
  )
}
