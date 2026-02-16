import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

export default function Products() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    async function fetchData(){
        try {
            const res = await fetch("https://fakestoreapi.com/products");
            const result = await res.json();
            console.log(result);
            setData(result);
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(true);
        }
    }

    useEffect(()=>{
        fetchData();
    },[])

    if(!loading){
        return <h1>Loading...</h1>
    }

  return (
    <section style={{display: "grid", gridTemplateColumns:"repeat(3,1fr)", marginTop : "60px", gap:"10px"}}>
        {data.map((ele)=>(
            <div style={{border: "2px solid black", padding : "10px", height : "350px"}}>
               <img src={ele.image} width="100px" ></img>
                <h4 key={ele.id}>{ele.title}</h4>
                <p>Price : $ {ele.price} USD <Link to={`/productdetail/${ele.id}`}>View Details</Link></p>
            </div>

        ))}
    </section>
  )
}
