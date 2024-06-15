var nivel = document.querySelector("#nivel")

nivel.addEventListener("change",lerNivel)

var nome = document.querySelector("#nome")

nome.addEventListener("change",lerNivel)

function lerNivel() {
   
    nome.value += "[INICIANTE]"
}

