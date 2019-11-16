//Code to create alert
function hoverOver(){
	document.getElementById("display").textContent = "You hovered over the button!";
}

function moveAway(){
	document.getElementById("display").textContent = "You are not hovered over the button!";
}

//function to action (clicking the button)
function init(){
	document.getElementById("btn").onmouseover = hoverOver;
	document.getElementById("btn").onmouseout = moveAway;
}
// as soon as the page is loaded, init will be available
window.onload = init;