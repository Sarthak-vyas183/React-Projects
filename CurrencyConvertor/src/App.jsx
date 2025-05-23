import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState();
  const [currency, setCurrency] = useState("INR")

  const currencyConvertor = async () => {
     const response = await fetch(`https://v6.exchangerate-api.com/v6/d81a7bf6bfb96b2b4ff02bea/latest/${currency}`)
     const res = await response.json();
     setData(JSON.stringify(res.conversion_rates));
  }

  return (
    <>
    <label htmlFor="input-number">Enter Currency</label> <br />
    <input className='text-3xl' type="text"/>
    <p>{data}</p>
    </>
  )
}

export default App
