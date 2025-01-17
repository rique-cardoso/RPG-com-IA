let data = null;
export function getFormData(){
    const form = document.querySelector('#settingsForm')
    const generoJogo = document.querySelector('.container-generos_genero--selected')
    const estiloNarrativa = document.querySelector('.container-narrativas_narrativa--selected')
    const formData = new FormData(form)
    const dataForm = Object.fromEntries(formData.entries())
    if(generoJogo){
        dataForm.generoJogo = generoJogo.textContent
    }
    if(estiloNarrativa){
        dataForm.estiloNarrativa = estiloNarrativa.textContent
    }
    return dataForm
}
export function setData(dataForm){
    sessionStorage.setItem('gameData', JSON.stringify(dataForm))
}
export function getData(){
    const storedData = sessionStorage.getItem('gameData')
    return storedData ? JSON.stringify(storedData) : null
}
export function tratarData(storedData){
    if(!storedData){
        // se não tiver data ele seleciona aleatoriamente uma das histórias padrão salvas em um array e retorna o objeto com os elementos dessa história padrão
    }else{
        // se tiver data, confere cada atributo, com excessão do nome, e verifica se está vazio, se estiver vazio será selecionado um elemento padrão no array para substituí-lo.
    }
}