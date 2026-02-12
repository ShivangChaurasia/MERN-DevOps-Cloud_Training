// import React from 'react'

import {useContext} from 'react';
import { DataContext } from './DataContext';


export default function DataConsumer() {
    const {data, fetchData} = useContext(DataContext);
    console.log(data);
  return (
    <>
        <button onClick={fetchData}>Fetch Data</button>
        {data.loading && <p>Loading</p>}
        {data.error && <p>Something Went Wrong</p>}
        {data.value && <ul>
                {data.value.map((ele)=>(
                    <li key={ele.id}>
                        {ele.id}. {ele.title}
                    </li>
                ))}
            </ul>}
    </>
  )
}
