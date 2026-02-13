
import {useState} from 'react';
import { DataContext } from './DataContext';

export default function DataProvider({children}) {
    const [data, setData] = useState({
        loading : false,
        error : null,
        value : null
    })

    async function fetchData(){

        try{
            setData((prev)=>({...prev, loading:true}))
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const result = await response.json();
            console.log(result);
            setData({...data, loading: false, value : result});

        }catch(e){
            setData({...data, loading:false, error : e});
        }
    }


  return (
    <DataContext.Provider value = {{data, fetchData}}>
        {children}
    </DataContext.Provider>
  )
}
