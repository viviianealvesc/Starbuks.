const imagem01 = document.getElementById('0-imagem')
const imagem02 = document.getElementById('2-imagem')
const imagem03 = document.getElementById('3-imagem')
const imagemPrincipal = document.getElementById('imagem-principal')
const extras = document.querySelector('extras')

const drinkRosa = {
    nome: 'imagem-0',
    nomePasta: 'image'
}

const opcaoImagem = [drinkRosa]

let outraImagem = 1

function mudarImagem() {
    const imagem = document.querySelector('[name="drink"]:checked').id.charAt(0)
    outraImagem = imagem
    imagemPrincipal.src = './image/imagem-' + opcaoImagem[outraImagem].nome + '.jpg'
    extras.classList.add("extras-drink1")
    


}