function changeColor(){
    let parent = document.getElementById("parent")
    parent.style.backgroundColor = "Red "
}

let container = document.getElementById("container");
let childContainer = document.getElementById("child-container");


// container.addEventListener("mouseover", ()=>{
//     container.style.backgroundColor = "white"
// })
// container.addEventListener("mouseout", ()=>{
//     container.style.backgroundColor= "green"
// })



// Event Bubling-----------------------------
// container.addEventListener("click",()=>{
//     alert("Parent Clicked")
// })
// childContainer.addEventListener("click",(e)=>{
//     alert("Child Clicked")
//     e.stopPropagation()

// })


// Event Capturing----------------------------
//  container.addEventListener("click", function(e) {
//      alert("Parent Clicked");
//      e.stopPropagation()
//  }, true);

//  childContainer.addEventListener("click", function(){
//     alert("Child Clicked")
//  }, true)


// Accesssing child through Parent
// console.log(container.children);
// console.log(container.children[0].innerText);



// WAP to modify text

let text = document.getElementById("text")
function changeText(){
    text.innerText = "This p Text has been Changed";
}

text.addEventListener("keydown",(e)=>{
    text.innerText = "This is p text after key Down eventlistener"
    console.log("key pressed:", e.key)
}) //Not Working

