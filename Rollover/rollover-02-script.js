//Code to create alert
function rolloverAlert(){
	
	alert("You just hovered you mouse over a button!");
	
}
//function to action (clicking the button)
function init(){
	
	document.getElementById("btn").onmouseover = rolloverAlert;
	
}
// as soon as the page is loaded, init will be available
window.onload = init;