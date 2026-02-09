
function API(){
    const [data,setData] = React.useState([]);
    const [movie, setMovie] = React.useState([]);
    
    async function fetchMovie() {
        try{
            let res = await fetch("https://mern-project-4a3fc-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json");
            let result = await res.json();
            setData(result);
        }catch(error){
            error;
        }
    }

    async function AddData(){
        try{
            let res = await fetch(
                "https://mern-project-4a3fc-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json",
                {
                    method : "POST",
                    body : JSON.stringify()
                }
            );
            let result = await res.json();
            setMovie(result);

        }catch(error){
            error;
        }

    }

    let handleFetch = ()=>{
        fetchMovie();
    }
    let handleAdd = ()=>{
        AddData();
    }


    return(
        <>
            <h1>Fetching Data from API</h1>\
            <input type="text" value={movie}></input>
            <button onClick={handleAdd}>Add Movie</button>
            <button onClick={handleFetch}>Fetch Data</button>
        </>
    )
}





