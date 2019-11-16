//Code to create alert
function rolloverDisplay(){
	document.getElementById("display").textContent = "You hovered over the button!";
}
//function to action (clicking the button)
function init(){
	document.getElementById("btn").onmouseover = rolloverDisplay;
}
// as soon as the page is loaded, init will be available
window.onload = init;