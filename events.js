const candy = document.querySelector(".hello:first-child");

console.dir(candy); 
function candyBar() {
    candy.style.color = "pink";
}

function mouseenter() {
    candy.style.color = "purple";
} 
function mouseleave(){
    candy.innerText = "mouse is gone";
}
function handleWindoowResize() {
    document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy() {
    alert("copier"); 
}
function handleWindowOffline() {
   alert("SOS no WIFI");  
}
function handleWindoowOnline() {
    alert("ALL GOOOOOD!"); 
}
candy.addEventListener("click", candyBar);
// candy.onclick =  candyBar; 
candy.addEventListener("mouseenter", mouseenter);
// candy.onmouseenter = mouseenter;
candy.addEventListener("mouseleave", mouseleave);
//candy.onmouseleave = mouseleave;

window.addEventListener("resize", handleWindoowResize);
window.addEventListener("copy", handleWindowCopy); 
window.addEventListener("offline", handleWindowOffline); 
window.addEventListener("online", handleWindoowOnline); 