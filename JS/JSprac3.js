// 1. 
// Write a program to print the marks of a student in an object using for loop 
// obj= { harry: 98, rohan: 70, aakash: 7}

// obj={
//     harry:98,
//     rohan:70,
//     aakash:7
// }
// let keys = Object.keys(obj);
// for(let i=0;i<keys.length;i++){
//     console.log(keys[i] +" scored " +obj[keys[i]]);
// }

let obj={
    harry:98,
    rohan:70,
    aakash:7
}

let keys = Object.keys(obj);

for(let i=0;i<keys.length;i++){
    console.log("The marks of " + keys[i]+ " is " + obj[keys[i]]);
}

// let keys = Object.keys(obj);

// for (let i = 0; i < keys.length; i++) {
//     console.log(keys[i] + " scored " + obj[keys[i]] + " marks");
// }

// 2 Write the program in 1 using for in loop
8
obj={
    harry:98,
    rohan:70,
    aakash:7
}
// for(const c in obj){
//     console.log(c,obj[c]);
// }

for(const k in obj){
    console.log(k,obj[k]);
}

// 3 Write a program to print try again until the user enters the correct number.

// let a;
// let correct_num=5;
// do{
//     a=Number(prompt("Enter a number"));
//     if(a!=correct_num){
//         console.log("Try Again")
//     }
// }while(a==correct_num){
//     console.log("Correct Number found")
// }

// 4 Write a function to find mean of 5 numbers.

function Sum(a,b,c,d,e){
    return a+b+c+d+e;
}
let mean = Sum(10,20,30,20,10)/5;
console.log("The mean of 5 numbers are:" ,+mean );

// Using arrow function
const findMean = (a,b,c,d,e)=>{
    let Sum = a+b+c+d+e;
    return Sum/5;
}
console.log("The mean of 5 numbers are:", +findMean(10,20,30,40,50));