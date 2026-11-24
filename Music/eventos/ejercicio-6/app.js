const peso = document.getElementById('peso')
const estatura = document.getElementById('estatura')
const boton = document.getElementById('boton')
const resultado = document.getElementById('resultado-IMC')

boton.addEventListener("click", function (event) {
    if (peso.value != "" && estatura.value != "") {

        let imc = peso.value / (estatura.value * estatura.value)
        resultado.innerText = "Tu imc es:" + imc
    } else {
        resultado.innerText = "Completar todos los datos."
    }

})