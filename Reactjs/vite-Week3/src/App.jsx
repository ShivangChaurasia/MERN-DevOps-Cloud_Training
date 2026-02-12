import {  } from 'react';
import './App.css'
import DataProvider from './context/DataProvider';
import DataConsumer from './context/DataConsumer';

// 1. Creating the Context
// const userContext = createContext();

function App() {
    // const [user, setUser] = useState("Raghav");
    // if(!user){
    //   setUser("Raghav")
    // }

    return (
      <>

          {/* 2. Provide Context */}

          {/* <userContext.Provider value = {{user, setUser}}>
            <Parent></Parent>
          </userContext.Provider> */}


          <DataProvider>
            <DataConsumer></DataConsumer>
          </DataProvider>
      </>
    )
}

// function Parent(){
//   return <Child></Child>
// }

// function Child(){
//   return <Grandchild></Grandchild>
// }

// function Grandchild(){
//   const consumer = useContext(userContext);
//   return <h2>I am GrandChild of {consumer.user}</h2>
// }


export default App
