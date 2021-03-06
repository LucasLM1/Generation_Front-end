//formas de se adicionar uma variavel dentro do script
//var = variavel de escopo global 
//let = variavel de escopo local 

// podemos acessar por tags também, basta usar:
// getElementByTagName()

// podemos acessar pelo id também, basta usar:
// getElementById()

// podemos acessar pelo nome também, basta usar:
// getElementsByName()

// podemos acessar pela clase também, basta usar:
// getElementsByClassName()

// podemos acessar pelo seletor também, basta usar:
// querySelector()

// Case Sensitive= reconhece letras maiusculas e minusculas

//variavel let recebe nome e fala para prucrar dentro do documento pelo id,
// que no caso se refere ao id nome

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email') //dentro de input chame o email
let assunto = document.querySelector('#assunto')
let nomeOk = false 
let emailOk = false 
let assuntoOk = false

nome.style.width = '100%' //Obs.: não vai funcionar pois ja estilizei pelo css
email.style.width = '100%' //Obs.: não vai funcionar pois ja estilizei pelo css


function validaNome() {

    let txt = document.querySelector('#txtNome')
    if (nome.value.length <=1) {
       txt.innerHTML = ""
    }
    else if (nome.value.length < 3){ // Obs.: vi o metódo no video da plataforma porém fiz assim pois fica melhor visivelmente
        txt.innerHTML = "Nome inválido" 
        txt.style.color = "white" //cor da fonte
        txt.style.fontSize = "18px" // tamanho da fonte
        txt.style.margin = "7px"
    }
    else{
        txt.innerHTML = ""
    }

}

function validaEmail(){
    let txt = document.querySelector('#txtEmail')

    if(email.value.length <=1){
        txtEmail.innerHTML = ""
    }
    else if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1  ){ // se n tiver ponto e nem @ acusa erro
        txtEmail.innerHTML = "Email inválido"
        txt.style.color = "white" //cor da fonte
        txt.style.fontSize = "18px" // tamanho da fonte
        txt.style.margin = "7px"
    }
    else{
         txtEmail.innerHTML = ""
    }
}

function validaAssunto(){

    let txt = document.querySelector('#txtAssunto')
    if (assunto.value.length <=1) {
       txtAssunto.innerHTML = ""
    }
    else if (assunto.value.length < 3){ // Obs.: vi o metódo no video da plataforma porém fiz assim pois fica melhor visivelmente
        txtAssunto.innerHTML = "Digite um assunto válido" 
        txtAssunto.style.color = "white" //cor da fonte
        txtAssunto.style.fontSize = "18px" // tamanho da fonte
        txtAssunto.style.margin = "7px"
    }
    else {
        txtAssunto.innerHTML = "Você só pode digitar até 100 caracteres, caso contrario o assunto não será enviado" 
        txt.style.color = "white" //cor da fonte
        txt.style.fontSize = "18px" // tamanho da fonte
        txt.style.margin = "7px"
    }

}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
       alert ('Formulário enviado com sucesso!')
    }
     else if (nomeOk != true && emailOk != true && assuntoOk != true) {
       alert ('Preencha o formulário corretamente antes de enviar...')
    }
 }