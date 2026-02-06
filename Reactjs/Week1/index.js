//It does not accept two children
//It gets overwriiten with similar command of render



//
// let root = ReactDOM.createRoot(document.getElementById("root"))
// let h1 = React.createElement(
//     "h1",
//     {
//         style: { color: "blue" },
//         children: "Hello from react with h1 Tag"
//     }
// );


// let root = ReactDOM.createRoot(document.getElementById("root"))
// let h2 = React.createElement(
//     "h1",{style: { color: "blue" }},
//         React.createElement("h2",null,"This is Element 2 with h2 Tag") //Nesting
// );



// -----------------------------------------------------------------------------
// Printing Array elements in list format
// let arr = ["apple", "banana", 'Orange', "Shimla Mirch"]

// let root = ReactDOM.createRoot(document.getElementById("root"))
// let element = arr.map((ele)=>{
//     return  React.createElement("li",{},ele);
// })


// let button = React.createElement("button",{onClick : ()=>{alert("Button CLicked, Alert From React!");}},"Button")
// root.render(button);


// let bab = <h1>This is H1 Tag</h1> // Babel Used
// root.render(bab)





// function Greet({name}){ //By destructuring we can avoid using props keyword.
//     return(
//         <div>
//             <h1>Good Morning!</h1>
//             <h2>This is {name}</h2>
//         </div>
//     );
// }
// let root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(<Greet name = "Shivang"></Greet>)


// Activity: Your task is to create a User Profile component that conditionally renders the user's bio and applies different styling based on the user's role (admin vs user).
// ===================================================================================================================================

// function Register(){
//         let input = document.getElementById("input").value
        
//         let role = input;
        
//         let user = {
//             name : "Sourav",
//             age: 21,
//             city : "Bokaro"
//         }
        
//         let admin = {
//             name : "Shivang",
//             age: 21,
//             city : "Jalandhar",
//             status : "Active"
//         }


//         function User({name, age, city}){
//             return(
//                 <section className="Text-center border-2 w-[500px] h-[250px] ml-[400px]">
//                     <h1 className="font-bold text-3xl mb-15">This is Profile of User</h1>
//                     <div className="flex justify-center space-x-6">
//                         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfvIvaqPuZKSpixoRyESA4zU3O96QwwxDAInG9vWPHP5vGeKpYVxmcHwC3uJDDTgrsgPIIVuaMhZ8A5GdQAwiPRhpgqiCLsEHoM1Okw5c&s=10" alt="profile_photo" width="100px"></img>
//                         <div>
//                             <h3 className="text-lg">Name : {name}</h3>
//                             <h4>Age: {age}</h4>
//                             <h4>Lives in: {city}</h4>
//                         </div>
//                     </div>
//                 </section>
//             )
//         }

//         function Admin({name,age,city,status}){
//             return(
//                 <section className="Text-center border-2 w-[500px] h-[250px] ml-[400px]">
//                     <h1 className="font-bold text-3xl mb-15">This is Profile of Admin</h1>
//                     <div className="flex justify-center space-x-6">
//                         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvqxmS65qOTq0jj1-uHcCRWtTo0XPeQCmF3W7HDE5HG8zSdfulrthBA6C8o3YzaYYntem4Nk2wi3ceZO_dBS3LBqRY-YcPPFrSDakVAF1y_A&s=10" alt="profile_photo" width="100px"></img>
//                         <div>
//                             <h3 className="text-lg">Name : {name}</h3>
//                             <h4>Age: {age}</h4>
//                             <h4>Lives in: {city}</h4>
//                             <h4>Account Status: {status}</h4>
//                         </div>

//                     </div>
//                 </section>

//             )
//         }

//         let root = ReactDOM.createRoot(document.getElementById("root"));
//         root.render(role=="User" ? <User name = {user.name} age = {user.age} city = {user.city}></User> : <Admin name = {admin.name} age = {admin.age} city = {admin.city} status = {admin.status}></Admin>)
// }
























//It does not accept two children
//It gets overwriiten with similar command of render

//
// let root = ReactDOM.createRoot(document.getElementById("root"))
// let h1 = React.createElement(
//     "h1",
//     {
//         style: { color: "blue" },
//         children: "Hello from react with h1 Tag"
//     }
// );


// let root = ReactDOM.createRoot(document.getElementById("root"))
// let h2 = React.createElement(
//     "h1",{style: { color: "blue" }},
//         React.createElement("h2",null,"This is Element 2 with h2 Tag") //Nesting
// );



// -----------------------------------------------------------------------------
// Printing Array elements in list format
// let arr = ["apple", "banana", 'Orange', "Shimla Mirch"]

// let root = ReactDOM.createRoot(document.getElementById("root"))
// let element = arr.map((ele)=>{
//     return  React.createElement("li",{},ele);
// })


// let button = React.createElement("button",{onClick : ()=>{alert("Button CLicked, Alert From React!");}},"Button")
// root.render(button);


// let bab = <h1>This is H1 Tag</h1> // Babel Used
// root.render(bab)





// function Greet({name}){ //By destructuring we can avoid using props keyword.
//     return(
//         <div>
//             <h1>Good Morning!</h1>
//             <h2>This is {name}</h2>
//         </div>
//     );
// }
// let root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(<Greet name = "Shivang"></Greet>)


// ===================================================================================================================================
// Activity: Your task is to create a User Profile component that conditionally renders the user's bio and applies different styling based on the user's role (admin vs user).
// ===================================================================================================================================

// function Register(){
//         let input = document.getElementById("input").value
        
//         let role = input;
        
//         let user = {
//             name : "Sourav",
//             age: 21,
//             city : "Bokaro"
//         }
        
//         let admin = {
//             name : "Shivang",
//             age: 21,
//             city : "Jalandhar",
//             status : "Active"
//         }


//         function User({name, age, city}){
//             return(
//                 <section className="Text-center border-2 w-[500px] h-[250px] ml-[400px]">
//                     <h1 className="font-bold text-3xl mb-15">This is Profile of User</h1>
//                     <div className="flex justify-center space-x-6">
//                         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfvIvaqPuZKSpixoRyESA4zU3O96QwwxDAInG9vWPHP5vGeKpYVxmcHwC3uJDDTgrsgPIIVuaMhZ8A5GdQAwiPRhpgqiCLsEHoM1Okw5c&s=10" alt="profile_photo" width="100px"></img>
//                         <div>
//                             <h3 className="text-lg">Name : {name}</h3>
//                             <h4>Age: {age}</h4>
//                             <h4>Lives in: {city}</h4>
//                         </div>
//                     </div>
//                 </section>
//             )
//         }

//         function Admin({name,age,city,status}){
//             return(
//                 <section className="Text-center border-2 w-[500px] h-[250px] ml-[400px]">
//                     <h1 className="font-bold text-3xl mb-15">This is Profile of Admin</h1>
//                     <div className="flex justify-center space-x-6">
//                         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvqxmS65qOTq0jj1-uHcCRWtTo0XPeQCmF3W7HDE5HG8zSdfulrthBA6C8o3YzaYYntem4Nk2wi3ceZO_dBS3LBqRY-YcPPFrSDakVAF1y_A&s=10" alt="profile_photo" width="100px"></img>
//                         <div>
//                             <h3 className="text-lg">Name : {name}</h3>
//                             <h4>Age: {age}</h4>
//                             <h4>Lives in: {city}</h4>
//                             <h4>Account Status: {status}</h4>
//                         </div>

//                     </div>
//                 </section>

//             )
//         }

//         let root = ReactDOM.createRoot(document.getElementById("root"));
//         root.render(role=="User" ? <User name = {user.name} age = {user.age} city = {user.city}></User> : <Admin name = {admin.name} age = {admin.age} city = {admin.city} status = {admin.status}></Admin>)
// }

// =============================================================================================================================================
// =============================================================================================================================================


// =============================================================================================================================================
// Activity 2: Create a counter app and design it.
// useState()-------------------------------------------------------
// =============================================================================================================================================
// function Counter(){
//     const [count,setCount] = React.useState(0);
//     let handleDec = ()=>{
//         if(count>0){
//             setCount(count-1);
//         }
//     }

//     let handleInc = ()=>{
//         setCount(count+1);
//     }

//     let handleReset = ()=>{
//         setCount(0);
//     }
//     return(
//         <section className="min-h-screen bg-gradient-to-br from-purple-300 to-purple-600 flex flex-col items-center justify-center p-6">
//             <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 border border-gray-200 bg-gradient-to-l from-purple-50 to-purple-100">
//                 {/* Header */}
//                 <div className="text-center mb-10">
//                     <h1 className="font-bold text-4xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                         Counter App
//                     </h1>
//                     <p className="text-gray-500 mt-2">Click buttons to modify the value</p>
//                 </div>
                
//                 {/* Counter Display */}
//                 <div className="flex justify-center items-center mb-10">
//                     <div className="relative">
//                         <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-md opacity-30"></div>
//                         <div className="relative bg-white rounded-3xl border-2 border-gray-200 px-12 py-8 shadow-lg">
//                             <p className="text-7xl font-bold text-gray-800 text-center">{count}</p>
//                         </div>
//                     </div>
//                 </div>
                
//                 {/* Counter Controls */}
//                 <div className="flex justify-center items-center space-x-8 mb-10">
//                     <button 
//                         className={`flex items-center justify-center w-16 h-16 rounded-full shadow-lg transition-all duration-200 transform hover:scale-105 active:scale-95 ${
//                             count === 0 
//                             ? 'bg-gray-300 cursor-not-allowed text-gray-500' 
//                             : 'bg-gradient-to-br from-red-500 to-pink-500 text-white hover:shadow-xl'
//                         }`}
//                         onClick={handleDec}
//                         disabled={count === 0}
//                     >
//                         <span className="text-3xl font-bold">-</span>
//                     </button>
                    
//                     <div className="text-center">
//                         <p className="text-sm text-gray-500 font-medium mb-1">Current Value</p>
//                         <p className="text-lg font-semibold text-gray-700">{count}</p>
//                     </div>
                    
//                     <button 
//                         className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 text-white shadow-lg transition-all duration-200 transform hover:scale-105 hover:shadow-xl active:scale-95"
//                         onClick={handleInc}
//                     >
//                         <span className="text-3xl font-bold">+</span>
//                     </button>
//                 </div>
                
//                 {/* Reset Button */}
//                 <div className="text-center">
//                     <button 
//                         className="px-8 py-3 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 active:translate-y-0 active:scale-95"
//                         onClick={handleReset}
//                     >
//                         <span className="flex items-center justify-center">
//                             <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
//                             </svg>
//                             Reset Counter
//                         </span>
//                     </button>
//                 </div>
                
//                 {/* Counter Stats */}
//                 {/* <div className="mt-10 pt-6 border-t border-gray-200">
//                     <div className="grid grid-cols-2 gap-4">
//                         <div className="bg-blue-50 p-4 rounded-xl text-center">
//                             <p className="text-sm text-blue-600 font-medium">Status</p>
//                             <p className="text-lg font-bold text-gray-800">
//                                 {count === 0 ? 'Zero' : count > 10 ? 'High' : 'Low'}
//                             </p>
//                         </div>
//                         <div className="bg-purple-50 p-4 rounded-xl text-center">
//                             <p className="text-sm text-purple-600 font-medium">Type</p>
//                             <p className="text-lg font-bold text-gray-800">
//                                 {count % 2 === 0 ? 'Even' : 'Odd'}
//                             </p>
//                         </div>
//                     </div>
//                 </div> */}
                
//                 {/* Instructions */}
//                 <div className="mt-8 text-center text-sm text-gray-500">
//                     <p>• Click + to increment</p>
//                     <p>• Click - to decrement (minimum 0)</p>
//                     <p>• Use Reset to return to zero</p>
//                 </div>
//             </div>
//         </section>
//     )
// }

// let root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Counter></Counter>)
// ============================================================================================================
// ============================================================================================================




// ============================================================================================================
// Profile
// ============================================================================================================

// function Profile(){
//     const [obj,setObj] = React.useState(
//         {
//             name : "Shivang",
//             age: 21,
//             city: "Jalandhar"
//         }

//     );

//     let handleInc = ()=>{
//         setObj(prev => ({
//             ...prev,
//             age: prev.age +1
//         }))
    
//     }


//     return(
//         <>
//             <section>
//                 <h1 className="font-bold text-2xl">This is Profile</h1>
//                 <h3>Name: {obj.name}</h3>
//                 <h3>Age: {obj.age}</h3>
//                 <h3>City: {obj.city}</h3>
//                 <button className="border-2 p-2" onClick={handleInc}>Click to Increase Age</button>
//             </section>
//         </>
//     )
// }

// let root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Profile name={"Shivang"} age={21} city={"Jalandhar"}></Profile>)


// ===============================================================================================================




// ===============================================================================================================
// Counter Using Batch Function-----------------------------------------
// ===============================================================================================================
// function CounterApp() {
//   const [count, setCount] = React.useState(0);

//   const batchIncrement = () => {

//     setCount(prev => prev + 1);
//     setCount(prev => prev + 1);
//     setCount(prev => prev + 1);
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }} className=" space-x-6">
//       <h1>Counter App</h1>
//       <h2>Count: {count}</h2>

//       <button className="border-2 p-2" onClick={() => setCount(count + 1)}>Increment</button>
//       <button className="border-2 p-2" onClick={() => setCount(count - 1)}>Decrement</button>
//       <button className="border-2 p-2" onClick={() => setCount(0)}>Reset</button>
//       <button className="border-2 p-2" onClick={batchIncrement}>Batch Increment (+3)</button>
//     </div>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<CounterApp />);

// -----------------------------------------------------------------------------------------------------------------



function List(){
    const [user, setUser] = React.useState([
        {
            id : 101,
            Name: "Shivang",
            last: "Chaurasia",
            city : "Jalandhar",
            image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvqxmS65qOTq0jj1-uHcCRWtTo0XPeQCmF3W7HDE5HG8zSdfulrthBA6C8o3YzaYYntem4Nk2wi3ceZO_dBS3LBqRY-YcPPFrSDakVAF1y_A&s=10"
        },
        {
            id : 102,
            Name: "Sourav",
            last: "Sharma",
            city : "Jalandhar",
            image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYx3ro-_9V-GRw2H8xrwigyfqpIJiIc4ln401Fv8iTfjXr7qFkmTTq7UYURB_rzMEYqhJJOwx8HlKDE1vBeXjcoWiQcP4b1EwTkXIcQzg1&s=10"
        },
        {
            id : 103,
            Name: "AB",
            last: "Devilliers",
            city : "Jalandhar",
            image : "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcS8tlczEaxIYKRshxonRdM-eItISTFdyY-K5IanOLaq6uuvTQdeH3zfGgyG9s2YPSn5Zou8usqAAbCzmB-5gdMZa2FSi17OEjBRP0enGLiqatr1XcULJ7YNrjFX4H0xS2NF7Zu523JAfxM&s=19"
        },
    ])


    return(
        <>
        <h1 className="font-semibold text-3xl">This is List of Users:</h1>
        <div className="ml-2 mt-2 text-xl">
            <ul className="item-center flex space-x-6">
                {user.map(ele=>(<li key={ele.id}><img width="180px" height="180px" src={ele.image}></img> {ele.Name} {ele.last}</li>))}
            </ul>
        </div>
        </>
    )
}

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<List></List>)













