/*자바스크립에서 html element를 가져오고 검색하는 것을 배움

document.getElementsById

const hellos = document.getElementsByClassName("hello"); 
console.log(hellos); // 많은 element 를 가져올때 

const title = document.getElementsByTagName("h1");
console.log(title); //하나의 element를 가져온다 tag = anchor, div, section, button;  

const title = document.querySelector(".hello h1:first-child");
console.log(title); // element를 가져오는 가장 좋은 방법 element를 css 방식으로 검색할 수 있음 
// <h1>Grab me!1</h1>

const title = document.querySelectorAll(".hello h1"); 
console.log(title);  // 3개의 h1이 들어있는 array 를 가져온다. 
*/
const title =document.querySelector(".hello h1"); 
title.innerText = "제발"

