
import { useEffect, useState } from 'react';

export default function ApiData() {
    const [data, setData]  = useState([]);
    const [loading, setLoading] = useState(false); //Loading step 1
    
    useEffect(()=>{
        async function fetchData(){
            try{
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                const result = await response.json();
                if(!response.ok){
                    alert("Error Fetching Data.....");
                    throw new Error("Error Fetching Data");
                }
                console.log(result);
                setData(result);
            }catch(e){
                console.log(e.message);
            }
            finally{
                setLoading(true) //Loading step 2
            }
        }
        fetchData();
    },[])

    if(!loading){
        return <h1>Loading...</h1> //Loading step 3
    }



    return (
        <div>
            {data.map((ele)=>(<p key = {ele.id}>{ele.id}.{ele.name}</p>))}
        </div>
    )
}
