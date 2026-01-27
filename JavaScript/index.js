    console.log("Hello, We're in Console")
    // Data Types
        // var first;
        // var first="first";
        // first = "second"
        // var first=1;
        // console.log(first)

        // let second;
        // second = 2;
        // second = 3;
        // console.log(second)

        // const third="third";
        // console.log(third)

    //Array
        // const arr = [1,2,3,4];
        // console.log(typeof(arr));



// waf to cal. rectangle area
    // function area(length, breadth){
    //     return length*breadth;
    // }

    // console.log(area(5,4))

// find a num ODD OR EVEN
    // function evenorodd(num){
    //     if(num%2==0){
    //         return "even";
    //     }else{
    //         return "odd"
    //     }
    // }

    // console.log(evenorodd(6))

    
    
    // create function to take 1 para num arr and it should add all values.
    
    // let arr = [1,2,3,4,5,6];
    // function sum(arr){
    //     let sum = 0;
    //     for(num of arr){
        //         sum+=num;
        //     }
        //     return sum;
        // }
        
        // console.log(sum(arr));

        
        // wap takes  a var and returns it's types
        
        
        // function detectType(value) {
            //     let arr = [];
            //     for(let i=0;i<value.length;i++){
                //         arr.push(typeof(value[i]))
                //     }
                // return arr;
                // }
                // console.log(detectType([2, "rtyui", null, undefined, true]))
                
                // to check if the input is object or not
                
                // function check(input){
    //     if(typeof(input)==="object"){
        //         return true;
        //     }else{
            //         return false
            //     }
            // }
            
    // console.log(check([]))





// Wap to concatenate the full name
    // function Greeting(fname,lname, year){
    //     console.log(`Hello, ${fname} ${lname} !\nI am in ${year}rd of B.Tech(CSE)`)
    // }
    // Greeting("shivang", "Chaurasia", 3)


// Notes:-
// Array in-built functions (Example: length, indexOf, push, pop, shift, unshift, slice, splice, concat, join, reverse, sort, map, filter, reduce, forEach, every, some)------------
let arr = [1,2,3,4,5,6,7,8,9];


    // The in-built function of array
        // console.log(arr)
        // console.log(arr.length)
        // console.log(arr[0])
        // console.log(arr[1])
        // console.log(arr[2])
        // console.log(arr[3])
        // console.log(arr[4])
        // console.log(arr[5])
    // ================================
    // Length in-built funtion:
        // console.log(arr.length)

    // ==================================

    // indexOf funtion:
        // console.log(arr.indexOf(3))
        // console.log(arr.indexOf(7))

    // ==================================
     // lastIndexOf funtion:
        // console.log(arr.lastIndexOf(3))
        // console.log(arr.lastIndexOf(7))

    // ==================================
    // slice funtion:

        // console.log(arr.slice(2,4))
        // console.log(arr.slice(2))

    // ==================================
    // splice funtion:
        // console.log(arr.splice(2,4))
        // console.log(arr)

    // ==================================
    // concat funtion:
        // console.log(arr.concat([7,8,9]))


// Finding a number in arr and return true or false

    // function findNum(arr, num){
    //     if(arr.indexOf(num)>-1){
    //         return true;
    //     }else{
    //         return false;
    //     }
    // }
    //  console.log(findNum([1,2,3,4,5,6,7], 3))
    //  console.log(findNum([2,3,4,1,8,0], 7))


//Object

    // let obj1 = {
    //     name : "Shivang",
    //     year : "Third",
    //     batch : "2027",
    //     college : "LPU"
    // }

    // console.log(obj1);
    // console.log(typeof(obj1))
    // console.log(obj1.college)
    
    // obj1["skill"]= "coding";
    // console.log(obj1);

// Reverse a String
    // var str = "Shivang"
    // let sum;
    // for(let i=str.length;i>=0;i--){
    //     sum+=str[i]
    // }
    // console.log(sum)




// Truthy and Falsey Values in JavaScript
// Q1. let res = (null && "A") || ("" || (5 && "Hi")) find truthy and falsey value

// Here below: null && "A" will give null
//             5 && "Hi" will give "Hi" (last truthy value)
//             "" || "Hi" will give "Hi"
//             null || "Hi" will give "Hi" (Output)
// 
// let res = (null && "A") || ("" || (5 && "Hi"))
// console.log(res);
// let res = !("" || 0) && (NaN || "JS")
// console.log(res);


// Q2. create a func isTruthy to return true if any of the arguements is true else false.

// function isTruthy(a,b,c){
//     if(a || b || c){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(isTruthy("", NaN, 5))

// ============================
// Type coercion in JavaScript is the automatic or explicit conversion of values from one data type to another
// let x = "120px"
// console.log(parseInt(x))











































































































































