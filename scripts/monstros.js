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

    {id: 6, nome: "Bnahabra Shell", descrition: "",radidade: 1, icone: ""},
    {id: 7, nome: "Bnahabra Wing", descrition: "",radidade: 1, icone: ""},
    {id: 8, nome: "Bnahabra Stinger", descrition: "",radidade: 1, icone: ""},
    {id: 9, nome: "BnahabraCarapace", descrition: "",radidade: 1, icone: ""},
    {id: 10, nome: "", descrition: "",radidade: 1, icone: ""},
    {id: 11, nome: "", descrition: "",radidade: 1, icone: ""},
    {id: 12, nome: "", descrition: "",radidade: 1, icone: ""},
    {id: 13, nome: "", descrition: "",radidade: 1, icone: ""},
    {id: 14, nome: "", descrition: "",radidade: 1, icone: ""},
    {id: 15, nome: "", descrition: "",radidade: 1, icone: ""},
    {id: 16, nome: "", descrition: "",radidade: 1, icone: ""},

]
var lista_monstros = [
    {
        id: 0, 
        nome: "Altaroth", 
        classe: "Neopteron",
        img: "../galeria/img/altaroth-01.jpg",
        elementos: [],
        doencas: [4,2],
        fraquezasE: [1,2,3,4,5],
        fraquezasD: [1],
        droplow: [1,2,3],
        ratedroplow: [50,25,25],
        drophigh: [1,2,4,5],
        ratedrophigh: [60,15,10,15]
    },
    {
        id: 1, 
        nome: "Bnahabra", 
        classe: "Neopteron",
        img: "../galeria/img/bnahabra.jpeg",
        elementos: [],
        doencas: [4,2],
        fraquezasE: [1,2,3],
        fraquezasD: [1],
        droplow: [6,7,8,3],
        ratedroplow: [41,32,10,17],
        drophigh: [9,6,7,8,3,4],
        ratedrophigh: [35,6,25,10,7,17]
        
    },
    {
        id: 2, 
        nome: "Anteka", 
        classe: "Neopteron",
        img: "../galeria/img/anteka.jpeg",
        elementos: [],
        doencas: [4,2],
        fraquezasE: [1,2,3],
        fraquezasD: [1],
        droplow: [],
        ratedroplow: [],
        drophigh: [],
        ratedrophigh: []
        
    },
    {
        id: 3, 
        nome: "Gargwa", 
        classe: "Neopteron",
        img: "../galeria/img/gargwa.png",
        elementos: [],
        doencas: [4,2],
        fraquezasE: [1,2,3],
        fraquezasD: [1],
        droplow: [],
        ratedroplow: [],
        drophigh: [],
        ratedrophigh: []
        
    },
    {
        id: 4, 
        nome: "Bulfango", 
        classe: "Neopteron",
        img: "../galeria/img/bulfango.jpeg",
        elementos: [],
        doencas: [4,2],
        fraquezasE: [1,2,3],
        fraquezasD: [1],
        droplow: [],
        ratedroplow: [],
        drophigh: [],
        ratedrophigh: []
        
    },
    {
        id: 5, 
        nome: "Jaggi", 
        classe: "Neopteron",
        img: "../galeria/img/jaggi.jpeg",
        elementos: [],
        doencas: [4,2],
        fraquezasE: [1,2,3],
        fraquezasD: [1],
        droplow: [],
        ratedroplow: [],
        drophigh: [],
        ratedrophigh: []
        
    },
    {
        id: 6, 
        nome: "Jaggia", 
        classe: "Neopteron",
        img: "../galeria/img/jaggia.jpeg",
        elementos: [],
        doencas: [4,2],
        fraquezasE: [1,2,3],
        fraquezasD: [1],
        droplow: [],
        ratedroplow: [],
        drophigh: [],
        ratedrophigh: []
        
    },
    {
        id: 7, 
        nome: "Wroggi", 
        classe: "Neopteron",
        img: "../galeria/img/wroggi.jpeg",
        elementos: [],
        doencas: [4,2],
        fraquezasE: [1,2,3],
        fraquezasD: [1],
        droplow: [],
        ratedroplow: [],
        drophigh: [],
        ratedrophigh: []
        
    },
    {
        id: 8, 
        nome: "Baggi", 
        classe: "Neopteron",
        img: "../galeria/img/baggi.jpg",
        elementos: [],
        doencas: [4,2],
        fraquezasE: [1,2,3],
        fraquezasD: [1],
        droplow: [],
        ratedroplow: [],
        drophigh: [],
        ratedrophigh: []
        
    },
    {
        id: 9, 
        nome: "Kelbi", 
        classe: "Neopteron",
        img: "../galeria/img/kelbi.jpeg",
        elementos: [],
        doencas: [4,2],
        fraquezasE: [1,2,3],
        fraquezasD: [1],
        droplow: [],
        ratedroplow: [],
        drophigh: [],
        ratedrophigh: []
        
    },
    {
        id: 10, 
        nome: "Delex", 
        classe: "Neopteron",
        img: "../galeria/img/delex.jpeg",
        elementos: [],
        doencas: [4,2],
        fraquezasE: [1,2,3],
        fraquezasD: [1],
        droplow: [],
        ratedroplow: [],
        drophigh: [],
        ratedrophigh: []
        
    }
]



function monster_select(selected){
    var nome,classe,elementos,doencas,fraquezasE,fraquezasD,txt_class,txt_elementos,txt_doencas,txt_fraquezas, iconeimg,droplow,ratedroplow,drophigh,ratedrophigh;

    nome        =   lista_monstros[selected].nome;
    classe      =   lista_monstros[selected].classe;
    imgmonster  =   lista_monstros[selected].img;
    elementos   =   lista_monstros[selected].elementos;
    doencas     =   lista_monstros[selected].doencas;
    fraquezasE  =   lista_monstros[selected].fraquezasE;
    fraquezasD  =   lista_monstros[selected].fraquezasD;
    droplow     =   lista_monstros[selected].droplow;
    ratedroplow =   lista_monstros[selected].ratedroplow;
    drophigh    =   lista_monstros[selected].drophigh;
    ratedrophigh=   lista_monstros[selected].ratedrophigh;

    txt_nome        =   document.getElementById('nome_monster')
    txt_class       =   document.getElementById('classe-monster');
    txt_elementos   =   document.getElementById('elementos');
    txt_doencas     =   document.getElementById('doencas');
    txt_fraquezas   =   document.getElementById('fraquesas');

    var img = document.querySelector("#img_monster_select");
    img.setAttribute('src', imgmonster)

    txt_class.innerHTML = classe;
    txt_nome.innerHTML  = nome;

    var msgfraquezas    = "";

    for(var i = 0; i<= fraquezasE.length -1; i++){

        if(lista_elementos[i].id == 1){
            iconeimg = '<tr><td><img src="../galeria/icons/elements/fogo.jpeg"></td><td>' + lista_elementos[i].nome + "</td></tr>";

        }else if(lista_elementos[i].id== 2){
            iconeimg = '<tr><td><img src="../galeria/icons/elements/agua.jpeg"></td><td>' + lista_elementos[i].nome + "</td></tr>";

        }else if(lista_elementos[i].id== 3){
        iconeimg = '<tr><td><img src="../galeria/icons/elements/trovao.jpeg"></td><td>' + lista_elementos[i].nome + "</td></tr>";

        }else if(lista_elementos[i].id== 4){
        iconeimg = '<tr><td><img src="../galeria/icons/elements/gelo.jpeg"></td><td>' + lista_elementos[i].nome + "</td></tr>";

        }else if(lista_elementos[i].id== 5){
        iconeimg = '<tr><td><img src="../galeria/icons/elements/dragao.jpeg"></td><td>' + lista_elementos[i].nome + "</td></tr>";

        }

        msgfraquezas = msgfraquezas + iconeimg;
        txt_fraquezas.innerHTML = msgfraquezas;
        
    };

    var tabelalow = document.getElementById('droplist_low');
    var criarlista = "";
    var item = "";

    for(var i = 0;i<=droplow.length-1;i++){

        for(var item = 0; item<= lista_itens.length; item++){
            if(droplow[i]==item+1){
                nome_item = lista_itens[item].nome;

                var itemlist = "<tr><td>" + nome_item + "</td><td>" + ratedroplow[i] +"</td></tr>";
                criarlista = criarlista + itemlist;

                tabelalow.innerHTML = criarlista;
                
            }else{
                tabelalow.innerHTML = criarlista;
            }
        }

        
    }

    var tabelahigh = document.getElementById('droplist_high');
    var criarlista = "";
    var item = "";
    for(var i = 0;i<=drophigh.length-1;i++){

        for(var item = 0; item<= lista_itens.length+1; item++){
            if(drophigh[i]==item+1){
                nome_item = lista_itens[item].nome;
                
                var itemlist = "<tr><td>" + nome_item + "</td><td>" + ratedrophigh[i] +"</td></tr>";
                criarlista = criarlista + itemlist;
        
                tabelahigh.innerHTML = criarlista;
            }else{
                tabelahigh.innerHTML = criarlista;
            }
        }
        
    }

    
}
