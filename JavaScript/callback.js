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
function login(callback){
    console.log("1. Logging");

    setTimeout(()=>{
        console.log("2. Logout is Successfull!!");
        callback();
    },3000)
}

function getUser(callback){
        console.log("3. Getting Userss...");
        setTimeout(() => {
            console.log("4. Displayed successfull!")
            callback();
        }, 2000);
}

function getOrders(callback){
    console.log("5. Fetching Orders....");
    setTimeout(()=>{
        console.log("6. Orderss fetched!!");
        callback();
    },1000)
}

function getOrderDetails(){
    console.log("7. These are order details....");
    setTimeout(() => {
        console.log("8. Detailsss......")
    }, 0);
}





// Nested Callbacks:
login(()=>{
    getUser(()=>{
        getOrders(()=>{
            getOrderDetails();
        })
    })
})

// output: 1,2,3,4,5,6,7,8


