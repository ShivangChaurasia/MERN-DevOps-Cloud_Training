// let container = document.getElementById("container")
// let input = document.getElementById('input')

// function addItem(){
    
//     let li = document.createElement('li');
//     li.innerText = input.value;
//     container.append(li);

//     let button = document.createElement('button')
//     li.append(button)
//     button.innerText = "X Remove"
//     button.onclick = ()=>{
//         li.remove();
//     };

//     li.style.display= "flex"
//     li.style.justifyContent = "space-between"

//     // console.log(container)
//     input.value = ""
// }

// -------------------------------------------------------------------
// Setting data in localStorage
// -------------------------------------------------------------------

// let fval = localStorage.setItem("fruit", "Apple")
// let Nval = localStorage.setItem("Name", "Shivang")
// let fval2 = localStorage.getItem("fruit")

// console.log(fval2)

// localStorage.removeItem("fruit");


// let obj = {
//     name : "Shivang",
//     age: 21,
//     college : "LPU"
// }

// localStorage.setItem("User Data",JSON.stringify(obj));
// console.log(JSON.parse(JSON.stringify(obj)))
// console.log(JSON.stringify(obj))





// TO-DO

let container = document.getElementById("container")
let input = document.getElementById('input')

function addItem(){

    let li = document.createElement('li');
    li.innerText = input.value;
    container.append(li);

    let button = document.createElement('button')
    li.append(button)
    button.innerText = "X Remove Task"
    button.onclick = ()=>{
        li.remove();
    };

    li.style.display= "flex"
    li.style.justifyContent = "space-between"
    container.style.gap = "10"

    // console.log(container)
    input.value = ""
}
