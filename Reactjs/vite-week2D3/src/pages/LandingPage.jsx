import React from 'react'
import { useNavigate } from 'react-router-dom';


export default function LandingPage() {
    const navigate = useNavigate();
    let Loadpage = ()=>{
        alert("This will take you to Anorther Page");
        navigate("/about")
    }
  return (
    <div>
      <h1>Landing Page</h1>
      <button onClick={Loadpage}>Click to Navigate</button>
    </div>
  )
}
