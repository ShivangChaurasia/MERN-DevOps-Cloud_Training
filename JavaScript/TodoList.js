
// TO-DO with localStorage

let container = document.getElementById("container")


function addItem(){

    let input = document.getElementById('input')
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
