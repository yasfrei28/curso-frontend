const form = document.getElementById('formulario01');
const campos = document.querySelectorAll('.required');
const span = document.querySelectorAll('.span_required');
const ufs = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];
const ufValue = document.getElementById('uf');
const nameRegex = /[A-Za-zÀ-ú\\.\\,]{3,19}/;
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const telRegex = /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/;
const cepRegex = /^([\d]{2})\.*([\d]{3})-*([\d]{3})/;
const ufRegex = /^[A-Za-z]{2}$/;

function setError(index){
    campos[index].style.border='2px solid #f00';
    span[index].style.display='block';
}

function removeError(index){
    campos[index].style.border='';
    span[index].style.display='none';
}

function validateName(){
    if(!nameRegex.test(campos[0].value)){
        setError(0);
    } else {
        removeError(0);
    }
}

function validateEmail(){
    if(!emailRegex.test(campos[1].value)){
        setError(1);
    } else{
        removeError(1);
    }
}

function validateTel(){
    if(!telRegex.test(campos[2].value)){
        setError(2);
    } else{
        removeError(2);
    }
}

function validateCep(){
    if(!cepRegex.test(campos[3].value)){
        setError(3);
    } else{
        removeError(3);
    }
}

function validateCidade(){
    if(campos[4].value.length < 3){
        setError(4);
    } else {
        removeError(4);
    }
}

function validateUf(){
    ufValue.value = ufValue.value.toUpperCase();

    for(i=0; i<=ufs.length; i++){

        if(ufValue.value == ufs[i]){
            console.log(ufs[i]);
            console.log('valido');
            removeError(5);
            i = ufs.length;
        } else{
            console.log(ufs[i]);
            console.log('inVALIDO');
            i = i + 1;
            setError(5);
        }
    }
            
}
