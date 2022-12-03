//Author: Adlucio Guimarães

let img = document.getElementById('img-logo')
let nome = document.getElementById('meunome')
let saud = document.getElementById('ola')

nome.addEventListener('mouseenter',diminuifont)
nome.addEventListener('mouseout',normalfont)
img.addEventListener('mouseenter',mudarfoto)
img.addEventListener('mouseout',voltafoto)

function mudarfoto(){
    img.src = "imagens/Adlucio.png"
}

function voltafoto(){
    img.src = "imagens/Adlucio-logo.png"
}

function diminuifont(){
    saud.style.fontSize = '50px'
    saud.style.transition = '1s'
}
function normalfont(){
    saud.style.fontSize = '70px'
}