function showburg() {
	
	document.querySelector(".inside-burger").style.display="block";
}

function hideburger2() {
	document.querySelector(".inside-burger2").style.display="none";
}

function closeburg() {
	
	document.querySelector(".inside-burger").style.display="none";
	document.querySelector(".inside-burger2").style.display="block";
	setTimeout(hideburger2 , 400);
}