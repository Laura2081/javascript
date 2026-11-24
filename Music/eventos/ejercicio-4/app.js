const cambiarfondo = document.querySelector("select");
const fondo = document.querySelector(".card")

cambiarfondo.addEventListener("change", function(){
    if(cambiarfondo.value == "azul") {
        fondo.style.backgroundColor = "skyblue"
    }
    if(cambiarfondo.value == "verde") {
        fondo.style.backgroundColor = "green"
    }
    if(cambiarfondo.value == "amarillo") {
        fondo.style.backgroundColor = "gold"
    }
     if(cambiarfondo.value == "rosado") {
        fondo.style.backgroundColor = "pink"
    }

})