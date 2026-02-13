import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function ProductDetails() {

  const {value} = useParams();
  const[data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  async function fetchDetail(){
    try {

      const res = await fetch(`https://fakestoreapi.com/products/${value}`);
      const result = await res.json();
      setData(result);

    }catch (error) {
      console.log(error)
    }
    finally {
      setLoading(false);
    }
  }

  useEffect(()=>{
    fetchDetail();
  },[])


  if (loading) return <h1>Loading...</h1>;



  return (
    <div style={{border : "2px solid black", margin:"50px", padding:"20px"}}>
      <img src={data.image} width="100px"></img>
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      <br></br>
      <p> $ {data.price} USD</p>
    </div>
  )
}
