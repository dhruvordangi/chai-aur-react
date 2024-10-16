import {useEffect,useState} from 'react'


//this is a custom hook
//useEffect is a React Hook that lets you synchronize a component with an external system.
function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect( () =>{
        fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
        .then( (res) => res.json() )
        .then( (res) => setData(res[currency]) )
        console.log(data);
        
    }, [currency] )
    return data;
}

export default useCurrencyInfo;