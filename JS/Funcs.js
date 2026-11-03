// Functions
function Pinku(name){
    console.log("Hey " + name + " you are so nice" );
    console.log("Hey " + name + " your dressing sense is good" );
    console.log("Hey " + name + " you are doing great in your life" );
    console.log("Hey " + name + " nice keep it up for coding practice" );
    console.log("Hey " + name + " everything is good and everything will be good" );
}
Pinku("Pinku");

// function Sum
function sum(a,b){
    return a+b;
}
// sum(3,5);
let result=sum(3,5);
console.log("The sum of these numbers are ",+ result);

// function Sum
function sum(a,b,c=3){
    return a+b+c;
}
// sum(3,5);
let result1=sum(3,5);
let result2=sum(7,5);
let result3=sum(9,5,4);
console.log("The sum of these numbers are ", result1);
console.log("The sum of these numbers are ", result2);
console.log("The sum of these numbers are ", result3);

// Arrow Functions
const func1 = (x) =>{
    console.log("I am an arrow function",x);
}
func1(33);
func1(5);

// 
const sum1=(a,b)=>{
    return a+b;
}
console.log(sum1(5,6));

// 
const greet=name=> "Hello " + name;
console.log(greet("Pinku"));

// 
const Hey=()=>{
    "Grateful"
}
console.log(Hey());

// Arrow functions
function sayHello() {
    console.log("Hello");
}
function execute(task){
    task();
}
execute(sayHello);

// 
const first = () =>{
    console.log("A");
}
const second = (callback) =>{
    console.log("B");
    callback();
}
second(first);

// Questions for practice
/* Q9. Convert a normal function to an arrow function
function subtract(a, b) {
    return a - b;
}
Rewrite it as an arrow function and print the result of subtract(10, 4).*/

const subtract = (a,b) => {
    return a - b;
}
console.log(subtract(10,4));

/*Q10. Check even or odd
Write a function called checkNumber that accepts a number and prints "Even" if it is even and "Odd" otherwise. Test it with checkNumber(7).*/

function checkNumber(a){
    if(a % 2==0){
        console.log("Even");
    }else{
        console.log("Odd");
    }
}

checkNumber(1);

/* Q11. Return the larger number
Write an arrow function called findMax that takes two numbers and returns the larger one. Test it with findMax(12, 8). */

const findMax=(a,b)=>{
    if(a>b){
        console.log(a);
    }else{
        console.log(b);
    }
}
findMax(2,8);

/*Q12. Understand the difference
Write two arrow functions:
- first should print "JavaScript" using console.log().
- second should return "JavaScript" using return.
Call both inside console.log() and explain why their outputs differ.*/

// 1
const JS = () => {
    console.log("Javascript");
}
console.log(JS());

// 2
const JS1 = () => {
    return "Javascript";
}
console.log(JS1());
