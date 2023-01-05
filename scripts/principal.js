function show1starvilage(){
    var lista, txtbt;
    lista = document.getElementById("quest-1star");
    txtbt = document.getElementById("txtbt1");
    butqt = document.getElementById("quest1bt")

    if(lista.style.display == "none"){
        lista.style.display = "";
        txtbt.innerHTML = "Ocultar Quests 1 Estrela";
        butqt.style.backgroundColor = "rgb(204, 206, 78)";
    }else{
        lista.style.display = "none";
        txtbt.innerHTML = "Mostrar Quests 1 Estrela";
        butqt.style.backgroundColor = "rgb(137, 167, 128)";
    }

    
}

function show2starvilage(){
    alert("Ainda não fiz '-'")
}