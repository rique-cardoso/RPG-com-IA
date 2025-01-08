btnSalvarForm = document.querySelector('#enviarForm')
btnSalvarForm.addEventListener('click', e => {
    form = document.querySelector('#settingsForm')
    const generoJogo = document.querySelector('.container-generos_genero--selected')
    const estiloNarrativa = document.querySelector('.container-narrativas_narrativa--selected')
    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries())
    if (generoJogo) {
        data.generoJogo = generoJogo.textContent
    }
    if (estiloNarrativa){
        data.estiloNarrativa = estiloNarrativa.textContent
    }
    console.log(data)
})