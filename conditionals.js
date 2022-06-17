/*
const age = prompt("How old are you?");
console.log(typeof "15", typeof parseInt("15")); 
console.log(age, parseInt(age)); 
*/

const age = parseInt(prompt("How old are you?"));

console.log(isNaN(age));

const age = parseInt(prompt("How old are you?"));

if(isNaN(age)){
    console.log("제대로 써라"); 
} else {
    console.log("꼬마엉");
}

const age = parseInt(prompt("How old are you?"));

if(isNaN(age)){
    console.log("please write a number"); 
} else if (age < 18){
    console.log("you are too young");
} else {
    console.log("you can drink"); 
}

const age = parseInt(prompt("How old are you?"));

if(isNaN(age) || age < 0){
    console.log("please write a real number"); 
} else if (age < 18){
    console.log("you are too young");
} else if(age >= 18 && age <= 50) {
    console.log("you can drink"); 
} else {
    console.log("you can't drink"); 
}
