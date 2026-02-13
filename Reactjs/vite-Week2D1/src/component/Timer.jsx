
import React from 'react'
import '/src/App.jsx'
import { useEffect, useState } from 'react';
export default function Timer() {
    const [seconds, setSeconds] =  useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(()=>{
        if(!isRunning || seconds<=0) return;
        const timer =  setInterval(()=>{
            setSeconds((prev)=>prev-1);
        },1000)
        console.log(timer);
        
        return ()=>clearInterval(timer);
    },[isRunning, seconds])

  return (
    <div>
        <input type='number' value = {seconds} onChange={(e)=>setSeconds(e.target.value)} placeholder="Enter Seconds..."></input>
        <button onClick={()=>{setIsRunning(true)}}>Start</button>
        <button onClick={()=>{setIsRunning(false)}}>Stop</button>
        <button onClick={()=>{setSeconds(0)}}>Refresh</button>
        <h1>Timer:{seconds} seconds left</h1>
    </div>
  )
}
