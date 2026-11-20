const boton= document.querySelector('.btn');


boton.addEventListener('click',function(){
    const input = document.getElementById('input');
    const nombre = document.getElementById('nombre');

    nombre.innerText = "Hola," + input.value + "Bienvenido";

})