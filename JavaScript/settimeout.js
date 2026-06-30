console.log(1);
setTimeout(()=>{console.log(2)},3000)
console.log(3);
setTimeout(()=>{console.log(4)},2000)
console.log(5);
setTimeout(()=>{console.log(6)},1000)
console.log(7);
setTimeout(()=>{console.log(8)},0)
Promise.resolve().then(()=>{console.log(10)})
console.log(9);


//1,2,4,6,9,8,5,7,3 =====> output

console.log("start"); //Exec. First
setTimeout(()=>{
    console.log("Hello"); //Exec. Third
},0)

console.log('End'); //Exec. Second