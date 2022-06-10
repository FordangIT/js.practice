/*const mon = "mon"
const tue = "tue"
const wed = "wed"
const thu = "thu"
const fri = "fri"
const sat = "sat"
const sun = "sun"
const daysOfWeek = [mon, tue, wed, thu, fri, sat, sun,"sun"]; 
const nonsense = [1, 2, "Hello", false, null, true, undefined];
console.log(daysOfWeek, nonsense);
*/

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
//get item from array
console.log(daysOfWeek[4]);

//add one more day to the array
daysOfWeek.push("sun"); 
console.log(daysOfWeek);

//array의 목적은, 하나의 variable 안에 데이터의 list 값을 가지는 것

const toBuy = ["potato", "tomato", "pizza"];
toBuy.push("고래밥");
console.log(toBuy); 
