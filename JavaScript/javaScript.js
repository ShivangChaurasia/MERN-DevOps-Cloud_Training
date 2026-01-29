// =======================================================================
    // Data Object Model : DOM Manipulation
// =======================================================================\

    // let div = document.getElementById("div")
    // console.log(div.innerText);

    // let ptag = document.getElementsByClassName("p-tag")
    // console.log(ptag)

    // console.log(document.querySelector(".p-tag")) // This will give first element with the mentioned Id name
    // console.log(document.querySelectorAll(".p-tag")) // This will give all the element with the mentioned Id name
    
    // let child = document.querySelectorAll(".p-tag")
    // child[1].innerText = "This tag data has been changed"
    // child[1].style.color = "Red"
    // child[1].style.fontSize = "20px"
    // console.log(child[1].innerText)

    // child.forEach((ele,index)=>{
    //     if(index%2==0){
    //         ele.style.color = "Green"
    //         ele.style.fontSize = "30px"
    //     }else{
    //         ele.style.color = "Cyan"
    //         ele.style.fontSize = "30px"
    //     }
    // })



    // let parent = document.getElementById("parent")
    // parent.innerHTML = "<p>This has been changed to P tag</p>"
    // document.body.appendChild(parent)

    // let child  = document.querySelector("p");
    // child.style.color = "cyan"

    // let childDiv = document.createElement("div")
    // child.append(childDiv)
    // childDiv.innerText = "This is Child's div"

    // console.log(parent)


// =========================================================
// Panda Card Designing
// =========================================================

    // let container = document.getElementById("container")
    // container.style.border = "black 2px solid"
    // container.style.width = "1287px"
    // container.style.height = "730px"
    // container.style.display = "grid"
    // container.style.gridTemplateColumns = "1fr 3fr" //need to improve
    // container.style.gridTemplateRows = "3fr 200px" //Need to improve
    // container.style.gap = "2px"
    // container.style.justifyContent = "center"
    // container.style.backgroundColor = "olive"

    // for(let i=0;i<10;i++){
    //     let parent = document.createElement("div")
    //     parent.style.textAlign = "center"
    //     parent.style.border = "black 2px solid"
    //     parent.style.width = "200px"
    //     parent.style.height = "150px"
    //     parent.style.backgroundColor = "beige"
    
    //     container.append(parent)
    //     let image = document.createElement("img")
    //     image.src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsqvV7NveOr4wv257nalsSL_WJFJaYZTJ1qA&s"
    //     image.alt = "panda.jpg"
    //     image.style.paddingLeft = "12px"
    
    //     let heading = document.createElement("h1");
    //     heading.innerText = "The Image is of Panda"
    //     parent.append(image,heading)
    // }
    // console.log(container)



// =================================================================
    // END OF PANDA CARD DESIGN
// =================================================================


// WAP to access id ot html elements
    // let item = document.querySelectorAll(".item");
    // item.forEach((item)=>console.log(item.id))


    // let container = document.getElementById("container")
    // let h1 = document.createElement("h1");
    // let p = document.createElement("p");
    // container.append(h1,p);
    // h1.innerText = "This is H1 Tag"
    // p.innerText = "This is p Tag"

    // console.log(container)
    // h1.innerText = "Text Updated";
    // h1.remove();


// =======================================================================================
    // Navigation Bar Designing----
// =======================================================================================


// nav

let nav = document.getElementById("nav")
nav.style.backgroundColor = "cyan"
nav.style.display = "flex"
nav.style.justifyContent = "space-between"

let heading = document.createElement("h1")
heading.innerText  = "Design"

let div = document.createElement("div")

let home = document.createElement("a")
home.innerText = "Home"
let about = document.createElement("a")
about.innerText = "About"
let contact = document.createElement("a")
contact.innerText = "Contact"
div.append(home,about,contact);
nav.append(heading,div);











































