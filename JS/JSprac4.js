// 1. What will the following print in Javascript!
console.log("har\"".length);

// 2. Explore the includes, starts With & ends with functions a of String.

let sentence = "I am Priyanka Sahoo";
console.log(sentence.includes("a S"));
console.log(sentence.startsWith("I"));
console.log(sentence.endsWith("oo"));

// 3. Write a program to convert a given string to lowercase

console.log(sentence.toLowerCase());

// 4. Extract the amount out of this string "Please give Rs 1000"

let str="Please give Rs 1000 and Rs500";
console.log(str.slice(15));

let amount=str.match(/\d+/g); //To find all the numbers use g tag and \d finds the number match inside the string and + is for more than one occurance;
console.log(amount);

// 5. Try to change 4th character of a given string. Were you able to do it?
let string="Pinku";
string[0]="Ch"
console.log(string); //Because String is immutable we cannot directly change it once created;

console.log("Ch" +string.slice(1,5));