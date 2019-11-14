var n1 = 0;
var n2 = 0;
var funcao = 0;
var aux = 0;
var img = [];
var i = 0;
var fundo = document.getElementById('corpo');
img[0] = "fundo1.jpg";
img[1] = "fundo2.jpg";
img[2] = "fundo3.jpg";

setInterval( function() {
    fundo.style.backgroundImage = 'url(' + img[i] + ')';
    if(i < 2) i = i + 1;
    else i = 0;
    
}, 4000);

function clicou(num){
    document.getElementById('texto').value += num;
}

function limpar(){
    document.getElementById('texto').value = "";
}

function func(funcao){
    n1 = parseInt(document.getElementById('texto').value);
    limpar();
    aux = funcao;
}

function enviar(){
    n2 = parseInt(document.getElementById('texto').value);
    if( aux == 1){
        document.getElementById('texto').value = n1 + n2;
    }
    else if( aux == 2){
        document.getElementById('texto').value = n1 - n2;
    }
    else if( aux == 3 && n2 != 0){
        document.getElementById('texto').value = n1 / n2;
    }
    else if( aux == 4){
        document.getElementById('texto').value = n1 * n2;
    }
    else {
        alert("Não se pode dividir nada por zero!!!");
        limpar();
    }
}

