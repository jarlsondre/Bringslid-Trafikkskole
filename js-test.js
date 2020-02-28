
var tall = 0;

function minFunksjon() {
	document.getElementById("para1").innerHTML = "wallah bror, helt ærlig ingenting ass";
	document.getElementById("body").style.backgroundColor = "rgb(255, 255, 255)";
	tall++;
}

function skiftSide() {
		window.location.href = "jarl2.html";
}

function resize() {
		if ($(window).width() < 1000) {
		document.getElementById("col1").className="row";
		document.getElementById("col2").className="row";
		}
		else {
		document.getElementById("col1").className="col-6";
		document.getElementById("col2").className="col-6";
		}
}


