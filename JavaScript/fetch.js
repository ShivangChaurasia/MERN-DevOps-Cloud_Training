let container = document.getElementById('container');
let child = document.getElementById('child');

async function fetchData() {
    try{
        child.innerText = "Data Loading..."

        const res = await fetch('https://jsonplaceholder.typicode.com/users');

        if(!res.ok){
            throw new Error("Error Loading Data....")
        }
        const data = await res.json();
        setTimeout(()=>{
            data.forEach((ele)=>{
                child.remove()
                container.innerHTML += `<p>${ele.name}</p>`
            })

        },2000);

    }catch(e){
        console.log("Data Not Found",e);
    }


    // container.innerText = data.name;
    // data.forEach((ele)=>{
    //     container.innerHTML += `<li>${ele.name}</li>`
    // })


    // data.forEach((ele) => {
    //     container.innerHTML += `<p>${ele.title}</p>`;
    // });
}

fetchData();
