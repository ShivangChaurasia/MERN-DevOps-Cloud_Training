
// let a=20
// function value(){
//     a=10
//     console.log("internal",a);
// }
// value()
// console.log("global: ",a) // Gets Updated


// for(let i=0;i<10;i++){
//     console.log(i)
// }
// console.log(i) // Will give error as it is not defined globally


// console.log(a)

// function print(){
//     var a=20;
//     console.log(a)
// }
// print()
// console.log(a)



// for(var i=0;i<5;i++){
//     setTimeout(()=>{
//         console.log(i)
//     },10)
// }


// var x=5;
// function test(){
//     console.log(x) //Will try to find it inside the function scope
//     var x = 20;
// }
// test()

// var Show = function(){
//     console.log("First")
// }
// function show(){
//     console.log("Second")
// }
// show();


// function print(){
//     console.log(x)
//     if(true){
//         var x=20
//     }
// }
// print()



// function test(){
//     let b = 30;
//     function print(){
//         console.log(b)
//     }
//     return print()
// }
// let closure = test()


// function counter(){
//     let count = 0;
//     return function(){
//         count++;
//         console.log(count)
//     }
// }
// let c = counter();
// console.log(c)



function test(){
    let count =0 ;  //Updated = 1,2,3
    return function inner(){
        ++count;    // first = 1,2,3
        console.log(count) //1,2,3
    }
}
let counter = test();
counter() //1
counter() //2
counter() //3












































































