import { getFormData } from "./settingsHandler.js"

// pegando o formulário
document.querySelector('#enviarForm').addEventListener('click', e => {
    e.preventDefault()
    const data = getFormData()
    console.log(data)
})

// botão START
const btnStart = document.querySelector('#start')
btnStart.addEventListener('click', e => {
    window.location.href = './pages/jogo.html'
})