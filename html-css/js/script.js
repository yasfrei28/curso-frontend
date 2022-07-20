function calcularMedia (notas){
    let soma = 0;
    for (i = 0; i < notas.length; i++){
        soma += notas[i];
    }

    var media = (soma/notas.length).toFixed(1);

    return media;
}

function aprovacao(notas){

    let media = calcularMedia(notas);

    let condicao = media >= 8 ? "Aprovado" : "Reprovado";

    return "Média: " + media + " Resultado: " + condicao;
}

// Função Rescursiva:

function contagemRegressiva(numero){
    console.log(numero);

    if(numero > 0){
        contagemRegressiva(numero - 1);
    } else {
        console.log("Chegamos ao final");
    }
}

document.addEventListener('submit', function(evento){

    evento.preventDefault();
    evento.stopPropagation();

    let formulario = document.getElementById('formulario_01');

    let dados = new FormData(formulario);

    let objeto = {};

    let notas = [];

    for(let key of dados.keys()) {
        objeto[key] = dados.get(key);
        notas.push(parseInt(dados.get(key)));
    }

    console.log(objeto);
    console.log(notas);
    texto = aprovacao(notas);

    document.getElementById('resultado').innerHTML = aprovacao(notas);
});