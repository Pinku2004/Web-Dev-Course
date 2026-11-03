// Faulty Calculator

/* Create a faulty calculator using JavaScript
This faulty calculator does following:
1. It takes two numbers as input from the user
2. It performs wrong operations as follows:
+ → -
* → +
- → /
/ → **
It performs wrong operation 10% of the times
*/

// let random = Math.random();

// console.log(random);
// let a = prompt("Enter first number");
// let c = prompt("Enter operation");
// let b = prompt("Enter second number");

// let obj={
//     "+" : "-",
//     "*" : "+",
//     "-" : "/",
//     "/" : "**"
// };


// if(random > 0.1){
// // correct calculation
//    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);

// }else{
// // false calculation
//     c = obj[c];
//     alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
// }

let random = Math.random();
console.log(random);

let a = prompt("Enter the first number");
let b = prompt("Enter the second number");
let c = prompt("Enter the operation");
let result;

if(random<0.1){
    switch(c){
        case "+" :
            result= a - b;
            break;
        case "*" :
            result= a + b;
            break;
        case "-" :
            result= a / b;
            break;
        case "/" :
            result= a ** b;
            break;
        default:
            result="Invalid operator";
    }
}else{
    switch(c){
        case "+" :
            result= a + b;
            break;
        case "*" :
            result= a * b;
            break;
        case "-" :
            result= a - b;
            break;
        case "/" :
            result= a / b;
            break;
        default:
            result="Invalid operator";
    }
}
alert(`The result is ${result}`);