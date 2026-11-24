const escribe = document.getElementById("input");
const resultado = document.getElementById("resultado")



escribe.addEventListener("keydown", function (event) {
    if (event.key == 'Enter') {
        resultado.innerText = "Nueva tarea:" + escribe.value
        escribe.value = ""
    }
})