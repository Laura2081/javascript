const mensaje = document.getElementById("mensaje");
const resultado = document.getElementById ("resultado")

mensaje.addEventListener("input", function() {
    resultado.textContent = mensaje.value;
})