

function getURL(){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', "events.txt",true);
	xhr.send();
	xhr.onreadystatechange = processRequest;
	
	function processRequest(e) {
 		if (xhr.readyState == 4 && xhr.status == 200) {
        		var response = JSON.parse(xhr.responseText);
			x(response)
		 }
   	 }
}
var x = function(v){
	var tab;
	var tablebeg = "<table><theader><tr><td>Name</td></tr></theader><tbody>";
	var tableend = "</tbody></table>"
	var tabledata ="";				
	v.forEach(function(x){
	tabledata += "<tr><td>"+x.Name+"</td></tr>";
	})
	tab = tablebeg + tabledata + tableend;
	changetext(1);
	document.getElementById("bodies1").innerHTML =tab; 
};


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
