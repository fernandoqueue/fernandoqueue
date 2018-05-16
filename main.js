<<<<<<< HEAD
function changetext(x){
	switch(x){
	case 1:	
	document.getElementById("bodies1").style.display = "block";
	document.getElementById("bodies2").style.display = "none";
	document.getElementById("bodies3").style.display = "none";
	document.getElementById("bodies4").style.display = "none";
	break;
	case 2:	
	document.getElementById("bodies1").style.display = "none";
	document.getElementById("bodies2").style.display = "block";
	document.getElementById("bodies3").style.display = "none";
	document.getElementById("bodies4").style.display = "none";
	break;
	case 3:	
	document.getElementById("bodies1").style.display = "none";
	document.getElementById("bodies2").style.display = "none";
	document.getElementById("bodies3").style.display = "block";
	document.getElementById("bodies4").style.display = "none";
	break;
	case 4:	
	document.getElementById("bodies1").style.display = "none";
	document.getElementById("bodies2").style.display = "none";
	document.getElementById("bodies3").style.display = "none";
	document.getElementById("bodies4").style.display = "block";
	break;


}
}
=======
function changetext(){
	var x = document.getElementById("bodies");
	if(x.innerHTML==="Hello World"){
	x.innerHTML="Good Bye World";
	}
	else{
	x.innerHTML ="Hello World";
	}		
}
>>>>>>> c0f79fa8862ef01c81403941a9b434b5dbc25f43
