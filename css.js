const h1 = document.querySelector("div.hello:first-child h1"); 

function handleTitleClick() {
 h1.classList.toggle("clicked"); 
}
h1.addEventListener("click", handleTitleClick);

//1. find element
//2. listen for event 
//3. react to the event   