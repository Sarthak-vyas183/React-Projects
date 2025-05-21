import { useEffect, useState } from "react"; 

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    useEffect(()=>{
       fetch('https://v6.exchangerate-api.com/v6/d81a7bf6bfb96b2b4ff02bea/latest/USD')
       .then((res) => res.json())
       .then((res) => setData(res.conversion_rates));
       console.log(data);
    }, [currency])
    return data;
}   

export default useCurrencyInfo;