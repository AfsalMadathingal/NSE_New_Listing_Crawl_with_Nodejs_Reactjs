import { useState } from 'preact/hooks'
import './app.css'
import StockCards from './src/StockCards'

export function App() {
  const [count, setCount] = useState(0)


  return (
    <>
   <StockCards data={data} />
    </>
  )
}
