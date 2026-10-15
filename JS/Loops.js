// for loops
let a=1;
for(let i=0;i<50;i++){
    console.log(a+i);
}

// for in loops
let obj={
    name:"Pinku",
    place:"BBSR",
}
for(const key in obj){
    const ele = obj[key];
    console.log(key,ele);
}

// for of loop
for(const c of "Pinku"){
    console.log(c);
}

// while loop
let j=1;
while(j<6){
    console.log(j);
    j++;
}

// do-while loop
let k=1;
do{
    console.log(k);
    k++;
}while(k<1);