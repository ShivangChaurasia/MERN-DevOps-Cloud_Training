import '/src/App.css';
import {useEffect, useState} from 'react';
function Counter() {
  const [count, setCount] = useState(0);
  // const [name,setName] = useState("Hello");
  // console.log("Rendering Outer");
  
  let handleCount = ()=>{
    setCount(count+1);
  }
  useEffect(()=>{
    // console.log('Mounted or Updated')
    // console.log('Data Modified')
    document.title = `title Changed ${count}`;
  },[count])

  // let handleChange = ()=>{
  //   setName("This got modified");
  // }
  
  
  return (
    <>
      <h1>This is Counter using Vite App</h1>
      <h2>Count: {count}</h2>
      {/* <h2>{name}</h2> */}
      <button onClick={handleCount}>Increase Count</button>
      {/* <button onClick={handleChange}>Set Name</button> */}
    </>
  )
}

export default Counter;
