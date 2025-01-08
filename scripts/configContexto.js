btnSalvarForm = document.querySelector('#enviarForm')
btnSalvarForm.addEventListener('click', e => {
    e.preventDefault()
    form = document.querySelector('#settingsForm')
    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries())
    console.log(data)
})