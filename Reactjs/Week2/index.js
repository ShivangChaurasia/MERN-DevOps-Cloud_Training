// =====================================================================
// Fetching Data
// =====================================================================


// function FetchAPI(){
//     const [data, setData] = React.useState([]);

//     async function fetchData(){
//         try{
//             const res = await fetch(
//                 "https://jsonplaceholder.typicode.com/users"
//             );
//             let result =  await res.json();
//             setData(result);
//             console.log(result);

//         }catch(e){
//             console.log(e);
//         }
//     }

//     return(
//         <>
//             <button onClick={fetchData}>Click to Fetch</button>
//             <ol>
//                 {data.map((ele)=>(
//                     <li>{ele.name}</li>
//                 ))}
//             </ol>
//         </>
//     )
// }

// let root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<FetchAPI></FetchAPI>)








// =====================================================================
// Fetching Data & Uploading Movie Data
// =====================================================================

// function API(){
//     const [data,setData] = React.useState([]);
//     const [movie, setMovie] = React.useState("");
    
//     async function fetchMovie() {
//         try{
//             const res = await fetch("https://mern-project-4a3fc-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json");
//             let result = await res.json();
//             if(!result){
//                 setData([]);
//             }
//             const arr = Object.entries(result).map(([id,value])=>({
//                 id,
//                 movie : value.movie
//             }))
//             setData(arr);
//             console.log(arr)
//         }catch(error){
//             error;
//         }
//     }

//     async function AddData(){
//         try{
//             if(!movie){
//                 alert("Please enter name!!");
//                 return;
//             }
//             let res = await fetch(
//                 "https://mern-project-4a3fc-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json",
//                 {
//                     method : "POST",
//                     headers : {
//                         "Content-Type" : "application/json",
//                     },
//                     body : JSON.stringify({movie})
//                 }
//             );
//             setMovie("");

//         }catch(error){
//             error;
//         }

//     }

//     return(
//         <>
//             <h1>Fetching Data from API</h1>
//             <input id="text" type="text" value={movie} onChange={(e) => setMovie(e.target.value)} placeholder="Enter Movie Name..."></input>
//             <button onClick={AddData}>Add Movie</button>
//             <button onClick={fetchMovie}>Fetch Data</button>
//             <ol>
//                 {data.map((ele)=>(
//                     <li>{ele.id} -- {ele.movie}</li>
//                 ))}
//             </ol>
//         </>
//     )
// }

// let root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<API></API>)




// =====================================================================
// Fetching Data & Uploading Movie Data
// =====================================================================



function StudentAPI(){
    const [data,setData]  =React.useState([]);
    const [details, setDetails] = React.useState({
        name : "",
        age : ""
    });

    async function AddDetails(){
        try{
            // if(!details.name || !details.age){
            //     alert("Please fill required details!!")
            // }

            const res = await fetch(
                "https://mern-project-4a3fc-default-rtdb.asia-southeast1.firebasedatabase.app/details.json",
                {
                    method : "POST",
                    headers : {
                        "Content-Type" : "application/json",
                    },
                    body : JSON.stringify({details})
                }
            )
            setDetails({name : "", age: ""})
        }catch(e){
            console.log(e.messgae);
        }
    }

    async function FetchDetails() {
        const res = await fetch("https://mern-project-4a3fc-default-rtdb.asia-southeast1.firebasedatabase.app/");
        const result = await res.json();
        let DataArr  = Object.entries(result).map(([id,value])=>({
            id,
            name : value.name,
            age : value.age
        }))
        setData(DataArr);
        console.log(result);
    }

    return(
        <>
            <input type="text" value={details.name} onChange={(e)=>setDetails(e.target.value)} placeholder="Enter Your Name..."></input>
            <input type="Number" value={details.age} onChange={(e)=>setDetails(e.target.value)} placeholder="Enter Your Age..."></input>
            <button onClick={AddDetails}>Add Details</button>
            <button onClick={FetchDetails}>Fetch Details</button>
            <ol>
                {data.map((ele)=>(<li>This {ele.id} has name as {ele.name} and age as {ele.age}</li>))}
            </ol>
        </>
    )
}

let root =  ReactDOM.createRoot(document.getElementById('root'));
root.render(<StudentAPI></StudentAPI>)



