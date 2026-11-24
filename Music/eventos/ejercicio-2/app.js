let contador = 0;

const valor =document.getElementById('valor')
const sumar =document.getElementById('sumar')
const reiniciar =document.getElementById('reiniciar')

sumar.addEventListener('click', function (){
    contador = contador + 1
    valor.innerText = contador
    
    if (contador >=10) {
        valor.style.color = "green"
    }
})

reiniciar.addEventListener('click', function (){
    contador = 0;
    valor.innerText = contador
    valor.style.color = "black"
})

//¿Diosssssssssssss por que no inicia en cero? 