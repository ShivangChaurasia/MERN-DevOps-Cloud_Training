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

// let text = document.getElementById("text")
// function changeText(){
//     text.innerText = "This p Text has been Changed";
// }

// text.addEventListener("keydown",(e)=>{
//     text.innerText = "This is p text after key Down eventlistener"
//     console.log("key pressed:", e.key)
// }) //Not Working



// ------------------------------------
// let list = document.getElementById("list");
// function addList(){
//     list.innerHTML = " "
//     let fruits = ["apple","banana","orange","pineapple", "Dragon fruit"]
//     fruits.forEach((ele)=>{
//         let li = document.createElement("li")
//         li.innerText = ele;
//         list.append(li);
//     })
// }


// -------------------------------

// function UpdateText(value){
//     document.getElementById("output").innerText = value;
// }

// function UpdateColor(value){
//     document.getElementById("output").style.color = value;
// }


// --------------------------------------




let details = [];
function submit(){
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let pass = document.getElementById("password").value
    if(name.length<1){
        alert("Name should not be empty!!")
    }else if(!email.includes('@') || !email.includes('.')){
        alert("Email is Invalid!!")
    }else if(password.length>6){
        alert("Password should be of atleast 6 characters!!")
    }
    else{
        let user = {username : name,
            useremail : email,
            password : pass
         }

        details.push(user);
        alert("Form Submitted!! Data Showed in console!!")
    }

    console.log(details)
}
