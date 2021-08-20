let nome = window.document.getElementById('nome')
let email = document.querySelector('#email') //dentro de input chame o email
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false


function validaNome() {

    let txt = document.querySelector('#txtNome')
    if (nome.value.length <= 1) {
        txt.innerHTML = ""
    }
    else if (nome.value.length < 3) { // Obs.: vi o metódo no video da plataforma porém fiz assim pois fica melhor visivelmente
        txt.innerHTML = "Nome inválido"
        txt.style.color = "black" //cor da fonte
        txt.style.fontSize = "18px" // tamanho da fonte
        txt.style.margin = "7px"
    }
    else {
        txt.innerHTML = ""
    }

}

function validaEmail() {
    let txt = document.querySelector('#txtEmail')

    if (email.value.length <= 1) {
        txtEmail.innerHTML = ""
    }
    else if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) { // se n tiver ponto e nem @ acusa erro
        txtEmail.innerHTML = "Email inválido"
        txt.style.color = "black" //cor da fonte
        txt.style.fontSize = "18px" // tamanho da fonte
        txt.style.margin = "7px"
    }
    else {
        txtEmail.innerHTML = ""
    }
}

function validaAssunto() {

    let txt = document.querySelector('#txtAssunto')
    if (assunto.value.length <= 1) {
        txtAssunto.innerHTML = ""
    }
    else if (assunto.value.length < 3) { // Obs.: vi o metódo no video da plataforma porém fiz assim pois fica melhor visivelmente
        txtAssunto.innerHTML = "Digite um assunto válido"
        txtAssunto.style.color = "#black" //cor da fonte
        txtAssunto.style.fontSize = "18px" // tamanho da fonte
        txtAssunto.style.margin = "7px"
    }
    else {
        txtAssunto.innerHTML = "Você só pode digitar até 100 caracteres, caso contrario o assunto não será enviado"
        txt.style.color = "black" //cor da fonte
        txt.style.fontSize = "18px" // tamanho da fonte
        txt.style.margin = "7px"
    }

}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert('Formulário enviado com sucesso!')
    }
    else if (nomeOk != true && emailOk != true && assuntoOk != true) {
        alert('Preencha o formulário corretamente antes de enviar...')
    }
}


function mapaZoom() {
    mapa.style.width = '450px'
    mapa.style.height = '275px'
 }
 
 function mapaNormal() {
    mapa.style.width = '400px'
    mapa.style.height = '250px'
 }