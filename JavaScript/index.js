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
// let arr = [1,2,3,4,5,6,7,8,9];


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


// let arr = [1,2,3,4,5,6];
// arr.splice(4, 2, 0, 0)
// console.log(arr) //will give [1, 2, 3, 4, 0, 0]



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

        // console.log(true+false) //will give false with help of Coercion
        // console.log(10 * "abc") // will give NaN as "abc" will be given credit of NaN

// ===================================================
// Wap to check if the given input is Array, Object, null or other data types
    // function allChecker(x){
        // if(Array.isArray(x)){
            // console.log("This is Array");
        // }else if( x!==null && typeof(x)==="object"){
            // console.log("This is Object");
        // }
        // else if(typeof x === "object"){
            // console.log("This is null");
        // }else{
            // console.log(typeof(x));
        // }
    // }
    // allChecker({name : "Shivang"})
    // let arr = [];
    // allChecker(arr)
    // allChecker(null)



// ============================================================
// Primitive - call by value: In call by value, the function receives a copy of the value of the argument. 
    // let a = 20;
    // console.log(a);
    // let b= a;
    // console.log(b);
    // console.log(a);
    // b=30;
    // console.log(b);
    // console.log(a); //In primitive a will not be updated by the infulence of b

// Non-Primitive - call by reference: In call by reference, the function receives a reference to the original value of the argument.
    // let arr = [1,2,5,6]
    // let arr1 = arr;
    // console.log(arr1);
    // console.log(arr);

    // arr1.push(87);
    // console.log(arr1);
    // console.log(arr); //In non-primitive arr will be updated by the infulence of arr1

// ============================================================

// Arrow Function:
    // let greet = (name)=> `Welcome ${name}`
    // console.log(greet("Shivang"))

// Q1. Find a number even or Odd using Arrow Function

    // let eo = (x)=>{
    //     if(x%2==0){
    //         console.log("even");
    //     }else{console.log("odd")}
    // }
    // eo(5);

// Q2. Find the sum of two numbers using Arrow Function

        // let sum = (a,b)=> a+b;
        // console.log(sum(2,3))

// =====================================================================
// Destructuring: Spread and Rest Operator
// ------------------------------------------
    // let person = {
    //     name : "Shivang",
    //     age : 21,
    //     College : "LPU",
    //     Experience : [{designation : "Software engineer"}, {degree : "B.Tech"}, {role : "Full-Stack Developer"}]
    // }

    // let {Experience} = person
    // let [obj1, obj2, obj3] = Experience
    // let {designation} = obj1;

    // console.log(designation)

    // --------------------------------------
    // let user1 = {
    //     id : 999,
    //     first : "Shivang",
    //     edu : {
    //         degree : [
    //             {name : "BCA"},

    //         ]
    //     },
    // }

    // let {edu} = user1;
    // let {degree} = edu
    // let [obj] = degree
    // let {name} = obj
    // console.log(name)


    // ---------------------------------------
    // let user = {
    //     first : "Shivang",
    //     posts : [
    //         {title : "title1", comments: 10},
    //         {title : "title2", comments: 11},
    //     ],
    // }

    // let {posts} = user;
    // let [obj1,obj2] = posts;
    // let {comments} = obj1
    // console.log(comments)


    // -----------------------------------------

    // let user1 = {
    //     id : 999,
    //     first : "Shivang",
    //     edu : {
    //         degree : [
    //             {name : "BCA"},

    //         ]
    //     },
    // }
    // for(let i in user1){
    //     console.log(i)
    // }


// ------------------------------------------------

// WAP to return the first and last element of an array using destructuring

    // let arr = [1,2,7,8];

    // function firstLast(arr){
    //     let [first,,,last ] = arr;
    //     return {first, last};

    // }
    // console.log(firstLast(arr))
// ----------------------------------------------------------
    // REST Operator

    // function greet(...details){
    //     let [name, age, college] = details
    //     console.log(`Welcome ${name}, Your age is ${age}, You study at ${college}`)
    // }
    // greet("Shivang",21,"LPU")


    // let arr = {
    //     name : "Shivang",
    //     age: 21,
    //     college: "LPU"
    // }
    // let {age,...details} = arr;
    // console.log(details)

// ----------------------------------------------------
    // Option Chaining : It is used to access the properties of an object that may be null or undefined.
    // ------------------


    // let user = {
    //     name : "Shivang",
    //     age : 21,
    //     edu : {
    //         degree : [
    //             {name : "BCA"},
    //             {name : "B.Tech"},
    //         ]
    //     },
    // }
    // let degree = user?.edu?.degree?.[0]?.name
    // console.log(degree)

    



// WAP to return the age of a user if it is available, otherwise return 0.
    // let user = {
    //     name : "Shivang",
    //     // age : 21,
    //     edu : {
    //         degree : [
    //             {name : "BCA"},
    //             {name : "B.Tech"},
    //         ]
    //     },
    // }
    // console.log(user?.age ? user.age :  0)

    // WAP  to return the price of a product after applying a 10% discount if the price is available, otherwise return "price not given".

    // let product = {
    //     price : 10000
    // }
    // console.log(product?.price ? product.price - (0.1*product.price) : "price not given");




// For-Each:
    // here, element: "it is acting as key" [1,2,3,4,5,6,7]
    //       index: "it is acting as value" 0,1,2,3,4,5,6
    // let arr = [1,2,3,4,5,6,7]

    // arr.forEach((element,index) => {
    //     console.log(index, element)
    // })





























































































































