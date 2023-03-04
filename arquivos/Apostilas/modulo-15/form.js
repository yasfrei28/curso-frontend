let media; //escopo global

function calculaNotas(notas){
	let soma = 0;
  
  for(c=0; c<notas.length; c++){
  	soma += notas[c];
  }
  
  media = soma / notas.length;
  
  return media;
	
}

// console.log(calculaNotas([8, 9, 7, 8]));

function aprovacao(notas){
	let media = calculaNotas(notas);
  let condicao = media >= 8 ? "Aprovado" : "Reprovado";
  
  return "Média: " + media + " - Resultado: " + condicao;
}


// console.log(aprocacao([8, 9, 7, 8]));

function contagemRegressiva(numero){
	console.log(numero);
  let proxNumero = numero -1;
  if(proxNumero > 0)
  	contagemRegressiva(proxNumero);
}

// console.log(contagemRegressiva(10));

// Formulário envio de dados para cálculo da média
document.getElementById('formulario-01').addEventListener('submit', function(event){
    event.preventDefault();
    event.stopImmediatePropagation();

    if(this.getAttribute('class').match(/erro/)){
      return false;
    }

    let dados = new FormData(this);

    let objeto = {};

    let notas = [];

    for(let key of dados.keys()){

        let numero = dados.get(key).match(/\d*/) ? Number(dados.get(key)) : 0;

        if(!isNaN(numero)){
          notas.push(numero);
        }

    }

    console.log(notas);
    texto = aprovacao(notas);
    document.getElementById('resultado').innerHTML = texto;
});


function validaCampo(elemento){

  elemento.addEventListener('focusout', function(event){
    event.preventDefault();

    if(this.value == ""){
      document.querySelector('.mensagem').innerHTML= 'verifique o preenchimento dos campos em vermelho';
      this.classList.add('erro');
      this.parentNode.classList.add('erro');
      return false;
    }else{
      document.querySelector('.mensagem').innerHTML= '';
      this.classList.remove('erro');
      this.parentNode.classList.remove('erro');
    }


  });
}


function validaCampoNumerico(elemento){

  elemento.addEventListener('focusout', function(event){

    event.preventDefault();

    if(this.value != '' && this.value.match(/[0-9]*/)&& this.value >= 0 && this.value <= 10){
      document.querySelector('.mensagem').innerHTML= '';
      this.classList.remove('erro');
      this.parentNode.classList.remove('erro');
    }else{
      document.querySelector('.mensagem').innerHTML= 'verifique o preenchimento dos campos em vermelho';
      this.classList.add('erro');
      this.parentNode.classList.add('erro');
      return false;
    }

  });
}


let camposObrigatorios = document.querySelectorAll('input.obrigatorio');
let camposNumericos = document.querySelectorAll('input.numero');

for( let emFoco of camposObrigatorios){
  validaCampo(emFoco);
}

for( let emFoco of camposNumericos){
  validaCampoNumerico(emFoco);
}