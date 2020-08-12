


function resize() {
		if ($(window).width() < 1000) {
		document.getElementById("col1").className="row justify-content-center";
		document.getElementById("col2").className="row justify-content-center";
		}
		else {
		document.getElementById("col1").className="col-6";
		document.getElementById("col2").className="col-6";
		}
}


