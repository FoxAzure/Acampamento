var lista_elementos = [
    {id: 1, nome: "Fogo", icone: ""},
    {id: 2, nome: "Água", icone: ""},
    {id: 3, nome: "Trovão", icone: ""},
    {id: 4, nome: "Gelo", icone: ""},
    {id: 5, nome: "Dragão", icone: ""},
]

var lista_doencas = [
    {id: 1, nome: "Veneno", icone: ""},
    {id: 2, nome: "Paralizia", icone: ""},
    {id: 3, nome: "Sono", icone: ""},
    {id: 4, nome: "Redução de Defesa", icone: ""},
]

var lista_itens = [
    {id: 1, nome: "Altaroth Stomach", descrition: "",radidade: 1, icone: ""},
    {id: 2, nome: "Altaroth Jaw", descrition: "",radidade: 1, icone: ""},
    {id: 3, nome: "Monster Fluid", descrition: "",radidade: 1, icone: ""},
    {id: 4, nome: "Monster Broth", descrition: "",radidade: 1, icone: ""},
    {id: 5, nome: "Quality Sac", descrition: "",radidade: 1, icone: ""},
    {id: 0, nome: "", descrition: "",radidade: 1, icone: ""},
    {id: 0, nome: "", descrition: "",radidade: 1, icone: ""},
    {id: 0, nome: "", descrition: "",radidade: 1, icone: ""},
    {id: 0, nome: "", descrition: "",radidade: 1, icone: ""},
    {id: 0, nome: "", descrition: "",radidade: 1, icone: ""},
    {id: 0, nome: "", descrition: "",radidade: 1, icone: ""},
    {id: 0, nome: "", descrition: "",radidade: 1, icone: ""},
    {id: 0, nome: "", descrition: "",radidade: 1, icone: ""},
    {id: 0, nome: "", descrition: "",radidade: 1, icone: ""},
    {id: 0, nome: "", descrition: "",radidade: 1, icone: ""},
    {id: 0, nome: "", descrition: "",radidade: 1, icone: ""},

]
var lista_monstros = [
    {
        id: 1, 
        nome: "Altaroth", 
        classe: "Neopteron",
        elementos: [],
        doencas: [4,2],
        fraquezasE: [1,2,3,4,5,6],
        fraquezasD: [1],
        droplow: [1,2,3],
        ratedroplow: [50,25,25],
        drophigh: [5,1,2,4],
        
    }
]



function monster_select(){
    var nome,classe,elementos,doencas,fraquezasE,fraquezasD,txt_class,txt_elementos,txt_doencas,txt_fraquezas, iconeimg;

    nome        =   lista_monstros[0].nome;
    classe      =   lista_monstros[0].classe;
    elementos   =   lista_monstros[0].elementos;
    doencas     =   lista_monstros[0].doencas;
    fraquezasE  =   lista_monstros[0].fraquezasE;
    fraquezasD  =   lista_monstros[0].fraquezasD;

    txt_nome        =   document.getElementById('nome_monster')
    txt_class       =   document.getElementById('classe-monster');
    txt_elementos   =   document.getElementById('elementos');
    txt_doencas     =   document.getElementById('doencas');
    txt_fraquezas   =   document.getElementById('fraquesas');

    txt_class.innerHTML = classe;
    txt_nome.innerHTML  = nome;

    var msgfraquezas    = "";

    for(var i = 0; i<= fraquezasE.length -1; i++){

        if(lista_elementos[i].id === 1){
            iconeimg = '<tr><td><img src="../galeria/icons/elements/fogo.jpeg"></td><td>' + lista_elementos[i].nome + "</td></tr>";

        }else if(lista_elementos[i].id=== 2){
            iconeimg = '<tr><td><img src="../galeria/icons/elements/agua.jpeg"></td><td>' + lista_elementos[i].nome + "</td></tr>";

        }else if(lista_elementos[i].id=== 3){
        iconeimg = '<tr><td><img src="../galeria/icons/elements/trovao.jpeg"></td><td>' + lista_elementos[i].nome + "</td></tr>";

        }else if(lista_elementos[i].id=== 4){
        iconeimg = '<tr><td><img src="../galeria/icons/elements/gelo.jpeg"></td><td>' + lista_elementos[i].nome + "</td></tr>";

        }else if(lista_elementos[i].id=== 5){
        iconeimg = '<tr><td><img src="../galeria/icons/elements/dragao.jpeg"></td><td>' + lista_elementos[i].nome + "</td></tr>";

        }

        msgfraquezas = msgfraquezas + iconeimg;
        txt_fraquezas.innerHTML = msgfraquezas
        
    }

    
    
}
