let root = ReactDOM.createRoot(document.getElementById("root"))
//It does not accept two children
//It gets overwriiten with similar command of render

//
// let h1 = React.createElement(
//     "h1",
//     {
//         style: { color: "blue" },
//         children: "Hello from react with h1 Tag"
//     }
// );


// let h2 = React.createElement(
//     "h1",{style: { color: "blue" }},
//         React.createElement("h2",null,"This is Element 2 with h2 Tag") //Nesting
// );


// Printing Array elements in list format
let arr = ["apple", "banana", 'Orange', "Shimla Mirch"]

let element = arr.map((ele)=>{
    return  React.createElement("li",{},ele);
})
root.render(element);









