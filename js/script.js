function changePage(link){
	if(link=="triStable"){
		window.location.href = 'tri-stable-switch.html';
	}
	if(link=="model"){
		window.location.href = 'model.html';
	}
	if(link=="application"){
		window.location.href = 'application.html';
	}
	if(link=="model"){
		window.location.href = 'model.html';
	}
	if(link=="method"){
		window.location.href = 'method.html';
	}
	if(link=="results"){
		window.location.href = 'results.html';
	}
}

function showSub(subItem){
	if(subItem =="Modeling"){
		var div = document.getElementById('modeling');
		if(div.style.display=="block"){
			div.style.display = "none";
		}else{
			div.style.display = "block";
		}

	}

}

//Here stc stands for subtochange
function changeHP(stc){

document.getElementById("lts").style.display = "none";
document.getElementById("class").style.display = "none";
document.getElementById("festival").style.display = "none";
document.getElementById("uni").style.display = "none";
document.getElementById("mini").style.display = "none";
document.getElementById("ogem").style.display = "none";
document.getElementById("youtube").style.display = "none";
document.getElementById("book").style.display = "none";

	if(stc=="lts"){
		document.getElementById("lts").style.display = "block";
	}else if(stc=="class"){
		document.getElementById("class").style.display = "block";
	}else if(stc=="festival"){
		document.getElementById("festival").style.display = "block";
	}else if(stc=="uni"){
		document.getElementById("uni").style.display = "block";
		getPieGraph();
		getBarGraph();
	}else if(stc=="mini"){
		document.getElementById("mini").style.display = "block";
	}else if(stc=="ogem"){
		document.getElementById("ogem").style.display = "block";
	}else if(stc=="youtube"){
		document.getElementById("youtube").style.display = "block";
	}else if(stc=="book"){
		document.getElementById("book").style.display = "block";
	}

}