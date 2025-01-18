let data = null;
export function getFormData() {
    const form = document.querySelector('#settingsForm')
    const generoJogo = document.querySelector('.container-generos_genero--selected')
    const estiloNarrativa = document.querySelector('.container-narrativas_narrativa--selected')
    const formData = new FormData(form)
    const dataForm = Object.fromEntries(formData.entries())
    if (generoJogo) {
        dataForm.generoJogo = generoJogo.textContent
    }
    if (estiloNarrativa) {
        dataForm.estiloNarrativa = estiloNarrativa.textContent
    }
    return dataForm
}
export function setData(dataForm) {
    sessionStorage.setItem('gameData', JSON.stringify(dataForm))
}
export function getData() {
    const storedData = sessionStorage.getItem('gameData')
    return storedData ? JSON.parse(storedData) : null
}
export function tratarData(storedData) {
    if (!storedData) {
        // se não tiver data ele seleciona aleatoriamente uma das histórias padrão salvas em um array e retorna o objeto com os elementos dessa história padrão
        const defaultHistory = [
            {
                nomePersonagem: "Lara Zenai",
                sexo: "feminino",
                generoJogo: "Fantasia medieval, aventura",
                estiloNarrativa: "Épico, emocionante",
                localizacaoInicial: "Valinor",
                objetivoInicial: "Recuperar o amuleto perdido",
                dificuldade: "Difícil"
            },
            {
                nomePersonagem: "Neil Orphélius",
                sexo: "masculino",
                generoJogo: "Cyberpunk, filosófico",
                estiloNarrativa: "Mistério, inteligente",
                localizacaoInicial: "PunkCity",
                objetivoInicial: "Salvar o mundo da Matrix",
                dificuldade: "Difícil"
            },
            {
                nomePersonagem: "Kael Ragnar",
                sexo: "masculino",
                generoJogo: "Pós-apocalíptico, survival",
                estiloNarrativa: "Sombria, realista",
                localizacaoInicial: "Wasteland 23",
                objetivoInicial: "Construir um refúgio seguro",
                dificuldade: "Difícil"
            },
            {
                nomePersonagem: "Aiko Hoshino",
                sexo: "feminino",
                generoJogo: "Futurista, tecnológico",
                estiloNarrativa: "Sci-fi, intrigante",
                localizacaoInicial: "NeoTokyo",
                objetivoInicial: "Hackear a megacorporação TeraCore",
                dificuldade: "Difícil"
            },
            {
                nomePersonagem: "Dante Solari",
                sexo: "masculino",
                generoJogo: "Western, fantasia sombria",
                estiloNarrativa: "Intenso, misterioso",
                localizacaoInicial: "Deserto de Eldoria",
                objetivoInicial: "Descobrir a origem do eclipse eterno",
                dificuldade: "Difícil"
            }
        ]
        const indiceObjeto = Math.floor(Math.random() * 5)
        return defaultHistory[indiceObjeto]
    } else {
        // se tiver data, confere cada atributo, com excessão do nome, e verifica se está vazio, se estiver vazio será selecionado um elemento padrão no array para substituí-lo.
        const defaultGeneroJogo = ["Terror", "Drama", "Medieval", "Cyberpunk", "Futurista"]
        const defaultEstiloNarrativa = ["Misterioso e inteligente", "bombástico e intrigante", "PlotTwist, Reviravolta", "Romantico e profundo", "Filosófico e reflexivo"]
        const defaultLocalizacaoInicial = ["Cabana perdida", "Cidade pós-apocaliptica", "Mundo Antigo", "Aldeia Indígena", "Esgoto"]
        const defaultObjetivoInicial = ["Resgatar a princesa", "Recuperar amuleto perdido", "Conquistar o amor da vida", "Vencer a miséria e a pobreza", "Se tornar o melhor jogador de futebol do mundo"]
        let storedDataTratada = {
            nomePersonagem: storedData.nomePersonagem,
            sexo: storedData.sexo,
            generoJogo: storedData.generoJogo ? storedData.generoJogo : defaultGeneroJogo[Math.floor(Math.random() * 5)],
            estiloNarrativa: storedData.estiloNarrativa ? storedData.estiloNarrativa : defaultEstiloNarrativa[Math.floor(Math.random() * 5)],
            localizacaoInicial: storedData.localizacaoInicial ? storedData.localizacaoInicial : defaultLocalizacaoInicial[Math.floor(Math.random() * 5)],
            objetivoInicial: storedData.objetivoInicial ? storedData.objetivoInicial : defaultObjetivoInicial[Math.floor(Math.random() * 5)],
            dificuldade: "Difícil"
        }
        return storedDataTratada
    }
}