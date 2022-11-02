function elkuld() {
    document.getElementById("visszaignev").innerHTML = document.getElementById("bekernev").value;
    document.getElementById("visszaigcim").innerHTML = document.getElementById("bekercim").value;
    document.getElementById("visszaigtelefon").innerHTML = document.getElementById("bekertelefon").value;
}

function fokusz(id) {
    document.getElementById(id).style.backgroundColor = "rgb(200, 200, 250)";
}

function elhagy(id) {
    document.getElementById(id).style.backgroundColor = "rgb(255, 255, 255)";
}