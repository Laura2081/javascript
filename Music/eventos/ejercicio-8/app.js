const mercado = document.getElementById('mercado')
const lista = document.getElementById('lista')
const boton = document.getElementById('boton')
const alerta = document.getElementById('alerta')

boton.addEventListener("dblclick", function () {

    if (mercado.value != "") {
        lista.innerHTML += `<li>${mercado.value}</li>`
        mercado.value = ""
        alerta.innerText = ""
    }
    else {
        alerta.innerText = "Escribe algo"
    }


})