const headerSettings = document.querySelector('.settings')
const buttonSettings = document.querySelector('.settings_icon')
buttonSettings.addEventListener('click', e => {
    headerSettings.classList.toggle('settings--active')
})