function mudarmap(nemmap){
    var imagem = document.querySelector("#img_map");
    imagem.setAttribute('src', nemmap);
}

function zoommap(){
    //var imagem = document.querySelectorAll(".img_map_view")
    var imagem = document.getElementsByClassName('img_map_view');
    imagem.style="zoom:150%"
}