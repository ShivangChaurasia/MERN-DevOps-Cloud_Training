
// =======================================================================
    // Data Object Model : DOM Manipulation
// =======================================================================\

    // let div = document.getElementById("div")
    // console.log(div.innerText);

    // let ptag = document.getElementsByClassName("p-tag")
    // console.log(ptag)

    // console.log(document.querySelector(".p-tag")) // This will give first element with the mentioned Id name
    // console.log(document.querySelectorAll(".p-tag")) // This will give all the element with the mentioned Id name
    
    let child = document.querySelectorAll(".p-tag")
    // child[1].innerText = "This tag data has been changed"
    // child[1].style.color = "Red"
    // child[1].style.fontSize = "20px"
    // console.log(child[1].innerText)

    child.forEach((ele,index)=>{
        if(index%2==0){
            ele.style.color = "Green"
            ele.style.fontSize = "30px"
        }else{
            ele.style.color = "Cyan"
            ele.style.fontSize = "30px"
        }
    })





































