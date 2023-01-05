

function star(){
    var icone, tempo;

    icone = document.getElementsByClassName("estrela");
    tempo = 500;

    icone.style.transform = "scale(0.7)";
    setTimeout(resetstar,tempo);
}
function resetstar(){
    var icone, tempo;

    icone = document.getElementsByClassName("estrela");
    tempo = 500;

    icone.style.transform = "scale(0.8)";
    setTimeout(star,tempo);
}