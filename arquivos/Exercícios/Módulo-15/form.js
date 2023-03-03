//Função calculo de média

let media; //escopo global
function calculaNotas(notas){ //declaração de função + nome da função + parâmetro que vai ser passado pelo console.log
	let soma = 0;
  
  for(c=0; c<notas.length; c++){
  	soma += notas[c];
  }
  
  media = soma / notas.length;
  
  return media;
	
}
// console.log(calculaNotas([8, 9, 7, 8]));


//Função de requisito para aprovação

function aprovacao(notas){
	let media = calculaNotas(notas);
  let condicao = media >= 8 ? "Aprovado" : "Reprovado";
  
  return "Média: " + media + " - Resultado: " + condicao;
}
// console.log(aprocacao([8, 9, 7, 8]));


//Função de contagem regressiva

function contagemRegressiva(numero){

	console.log(numero);

  let proxNumero = numero -1;

  if(proxNumero > 0)
  	contagemRegressiva(proxNumero);
}
// console.log(contagemRegressiva(10));


// Formulário envio de dados para cálculo da média

const formulario1 = document.getElementById('formulario-01'); //Cria uma constante para o form formulario-01

if(formulario1){ //A condição do IF está pura, significa que deve ser TRUE

    formulario1.addEventListener('submit', function(event){ //adiciona um ouvinte, o nome do evento a ser acionado e função a ser excecutada quando acontecer
        
      event.preventDefault(); //previne o comportamento padrao dos objetos
      event.stopImmediatePropagation(); //previne que o próximo evento tenha os mesmos listeners

      if(this.getAttribute('class').match(/erro/)){ //THIS refere-se ao objeto pai da função //.getAttribute(class) pega o valor da class do elemento this // .match() trás em seu parâmetro uma RegEx
        return false;
      }

      let dados = new FormData(this); //new constrói um objeto a ser definido pelo usuário // formdata cria novos dados de um form

      let notas = []; //cria um array vazio

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
}



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

    let numero = this.value.match(/^[\d]5-[\d]3/) ? this.value.replace(/-/, "") : this.value; 

    if(numero != "" && numero.match(/[0-9]*/) && numero >= 0 && numero <= 10){
        document.querySelector('.mensagem').innerHTML = "";
        this.classList.remove('erro');
        this.parentNode.classList.remove('erro');
    } else {
        document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
        this.classList.add('erro');
        this.parentNode.classList.add('erro');
        return false;
    }

  });
}


function validaEmail(elemento){

  elemento.addEventListener('focusout', function(event) {

      event.preventDefault();

      const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i;
      if(this.value.match(emailValido)) {
          document.querySelector('.mensagem').innerHTML = "";
          this.classList.remove('erro');
          this.parentNode.classList.remove('erro');
      } else {
          document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
          this.classList.add('erro');
          this.parentNode.classList.add('erro');
          return false;
      }

  });

}


let camposObrigatorios = document.querySelectorAll('input.obrigatorio');
let camposNumericos = document.querySelectorAll('input.numero');
let camposEmail = document.querySelectorAll('input.email');

for( let emFoco of camposObrigatorios) {
    validaCampo(emFoco);
}

for( let emFoco of camposNumericos) {
    validaCampoNumerico(emFoco);
}

for( let emFoco of camposEmail) {
    validaEmail(emFoco);
}