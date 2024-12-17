btnSettings = document.querySelector('#settings')
header = document.querySelector('#header')
btnSettings.addEventListener('click', e => {
    header.classList.toggle('ativo')
})