import { getFormData, setData } from "./settingsHandler.js"

// pegando o formulário
document.querySelector('#enviarForm').addEventListener('click', e => {
    e.preventDefault()
    const dataForm = getFormData()
    if(!dataForm.nomePersonagem){
        alert('ERRO: por favor, o nome é obrigatório!')
    }else{
        setData(dataForm)
        alert('Salvo com sucesso!')
    }
})

// botão START
const btnStart = document.querySelector('#start')

btnStart.addEventListener('click', e => {
    window.location.href = './pages/jogo.html'
})