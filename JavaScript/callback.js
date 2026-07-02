// function one(){
//     console.log("1");
// }

// function two(){
//     console.log("2");
// }

// two(one());
// ------------------


// Multiple callbacks;
// function login(){
//     console.log("1. Logging");

//     setTimeout(()=>{
//         console.log("2. Logout is Successfull!!");
//     },3000)
// }

// function getUser(){
//         console.log("3. Getting Userss...");
//         setTimeout(() => {
//             console.log("4. Displayed successfull!")
//         }, 2000);
// }

// function getOrders(){
//     console.log("5. Fetching Orders....");
//     setTimeout(()=>{
//         console.log("6. Orderss fetched!!");
//     },1000)
// }

// function getOrderDetails(){
//     console.log("7. These are order details....");
//     setTimeout(() => {
//         console.log("8. Detailsss......")
//     }, 0);
// }

// login();
// getUser();
// getOrders();
// getOrderDetails();
// output:1,3,5,7,8,6,4,2





// -------------------------------------------------
// function login(callback){
//     console.log("1. Logging");

//     setTimeout(()=>{
//         console.log("2. Logout is Successfull!!");
//         callback();
//     },3000)
// }

// function getUser(callback){
//         console.log("3. Getting Userss...");
//         setTimeout(() => {
//             console.log("4. Displayed successfull!")
//             callback();
//         }, 2000);
// }

// function getOrders(callback){
//     console.log("5. Fetching Orders....");
//     setTimeout(()=>{
//         console.log("6. Orderss fetched!!");
//         callback();
//     },1000)
// }


// function getOrderDetails(){
//     console.log("7. These are order details....");
//     setTimeout(() => {
//         console.log("8. Detailsss......")
//     }, 0);
// }



// Nested Callbacks:
// login(()=>{
//     getUser(()=>{
//         getOrders(()=>{
//             getOrderDetails();
//         })
//     })
// })




// output: 1,2,3,4,5,6,7,8
// -----------------------------------------------------------------

// CALLBACK HELL------------------
// It is difficult to handle callback hell as it constructs pyramid as shown above.
// Hence, To tackle callback hell we use promises.


// Correct way to call to avoid callback hell and for that it is required to add a promise function in each callback func like::---


// EXAMPLE:
function login() {
    console.log("1. Logging");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("2. Login Successful!!");
            resolve();
        }, 3000);

    });
}


function getUser(){
    console.log("3. Getting Users....");
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("4. Displayed Userss......")
            resolve();
        },2000)
    });
}

function getOrders(){

    console.log("5. Fetching Orders....");
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("6. Orderss fetched!!");
            resolve();
        },1000)
    })
}


function getOrderDetails(){
    console.log("7. These are order details....");
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log("8. Detailsss......")
            resolve();
        }, 0);
    })
}


login()
.then(getUser)
.then(getOrders)
.then(getOrderDetails)
// .catch(console.error);













