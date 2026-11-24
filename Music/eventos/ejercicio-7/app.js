const contraseña = document.getElementById('contraseña')
const mensaje = document.getElementById('mensaje')

contraseña.addEventListener('input', function () {
    if (contraseña.value.length < 6) {
        mensaje.innerText = "Contraseña debil"
        mensaje.style.color = "red"

    }

    if (contraseña.value.length >= 6 && contraseña.value.length <= 9) {
        mensaje.innerText = "Contraseña aceptable"
        mensaje.style.color = "gold"

    }

    if (contraseña.value.length >= 10) {
        mensaje.innerText = "Contraseña fuerte"
        mensaje.style.color = "green"

    }
})