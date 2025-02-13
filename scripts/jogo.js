import { getData, tratarData } from "./settingsHandler.js"
import { renderContext, renderButtons, criarElementosDom, retornaObjetoAtual, renderWin, renderOver } from "./interface/renderResponse.js"

var contCenarios = 0

// Função para exibir o spinner de carregamento
function mostrarCarregamento(){
    const main = document.querySelector('#response')
    main.innerHTML = '' // Limpa o conteúdo atual
    main.classList.add('--activate-spinner')

    // Cria o elemento SVG do spinner
    const spinner = document.createElement('div')
    spinner.innerHTML = `
        <svg class="windows-loading-spinner" viewBox="0 0 16 16" height="48" width="48">
            <circle r="7px" cy="8px" cx="8px"></circle>
        </svg>
    `
    main.appendChild(spinner) // Adiciona o spinner ao DOM
}

// Função para ocultar o spinner e renderizar os elementos do jogo
function ocultarCarregamento(){
    const main = document.querySelector('#response')
    main.innerHTML = '' // Limpa o spinner
    main.classList.remove('--activate-spinner')
}

// Quando o jogo começa
window.addEventListener('load', e => {
    mostrarCarregamento() // Exibe o spinner

    const data = getData()
    const dataTratada = tratarData(data)
    const mensagem = `Vamos jogar um jogo RPG, você vai gerar o contexto e a história.  Segue a configuração de contexto inicial para iniciarmos o jogo:  Nome do personagem: ${dataTratada.nomePersonagem}  Sexo: ${dataTratada.sexo}  Gênero do jogo: ${dataTratada.generoJogo}  Localização inicial: ${dataTratada.localizacaoInicial}  Estilo de narrativa: ${dataTratada.estiloNarrativa}  Objetivo (quando alcançado, game-win deve receber 'win'): ${dataTratada.objetivoInicial}.  Tamanho máximo dos textos: apenas um parágrafo de até, no máximo, 2000 caracteres.  Dificuladade: média  Tamabnho da história: curta  Regras do jogo:  1 - você deve gerar um texto descrevendo a situação e me dar opções de escolha, cada opção será referenciada por um número, por exemplo, 1 - Correr, 2 - Ficar, se eu digitar 1 estou escolhendo a opção correr, se eu digitar 2 estou escolhendo a opção ficar.  2 - Cada escolha tem uma consequência e essa consequência é definida por você.  3 - Em todos os cenários, com exceção dos cenários de game-over e game-win, você deve dar exatamente 3 opções.  4 - O jogo deve ter um final baseado na minha escolha, dependendo do que eu escolher você pode: (1) gerar um novo contexto mostrando as consequências da minha escolha e me dando novas opções de escolha, (2) Game Over: essa escolha ocasionou a morte do meu personagem ou em danos graves para mim ou para outrem, prejudicando o objetivo do jogo, tornando-o impossível e por isso o resultado é jogo perdido, (3) Game Win: alcancei o objetivo inicial da história e portanto venci o jogo, apesar das consequências ocorridas durante o jogo, sejam boas ou ruins.    Modelo de resposta:  texto explicando o contexto (esse texto deve ter exatamente 1 parágrafo)  opções (devem ser exatamente 3 opções referenciadas e numeradas de 1 a 3)  game-over: estritamente 'yes' ou 'no', não podendo de forma alguma vir com qualquer outro valor. (dependendo, se o contexto gerado for de game-over, isto é, o jogador perdeu o jogo, deve retornar yes, senão retorna no)  game-win: estritamente 'yes' ou 'no' não podendo de forma alguma vir com qualquer outro valor. (segue a mesma lógica)  Dificuldade: diz sobre a facilidade de ganhar o jogo, pode ser fácil, média ou difícil (easy, médium, hard)  Tamanho da história: não deve durar muito, seja breve, imersivo, mas objetivo.    [Ordem prioritária]: mantenha o modelo de respostas até o fim do jogo, isto é, até que game-over ou game-win seja 'yes'`

    // Comunicando com back-end
    fetch('http://127.0.0.1:5000/start-game', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mensagem })
    })
        .then(response => response.json())
        .then(data => {
            ocultarCarregamento() // Oculta o spinner
            criarElementosDom()
            renderContext(data.resposta)
            renderButtons()
            const botoes = [...document.querySelectorAll('.btnOpcao')]
            botoes.forEach(botao => {
                botao.addEventListener('click', e => {
                    continuarJogo(retornaObjetoAtual(), botao.textContent, dataTratada)
                })
            })
        })
        .catch(error => {
            console.error('Erro:', error);
            ocultarCarregamento(); // Garante que o spinner seja ocultado em caso de erro
        })
})

// Função para Continuar Jogo
async function continuarJogo(resposta, opcEscolhida, dtTratada){
    mostrarCarregamento() // Exibe o spinner

    //Vamos jogar um jogo RPG, você vai gerar o contexto e a história.  Segue a configuração de contexto inicial para iniciarmos o jogo:
    const comando = "Estamos jogando um jogo RPG onde você gera o contexto e a história. Vou relembrá-lo do contexto que você gerou antes de forma resumida com base nas escolhas tomadas pelo jogador até agora e quero que continue a história. A seguir estão as configurações do jogo e as regras (atente-se bem a elas e seja rigoroso ao seguí-las)."
    const configJogo = `Lembre-se das informações básicas do jogo até aqui:  Nome do personagem: ${dtTratada.nomePersonagem}  Sexo: ${dtTratada.sexo}  Gênero do jogo: ${dtTratada.generoJogo}  Localização inicial: ${dtTratada.localizacaoInicial}  Estilo de narrativa: ${dtTratada.estiloNarrativa}  Objetivo (quando alcançado, game-win deve receber 'yes'): ${dtTratada.objetivoInicial}.  Tamanho máximo dos textos: apenas um parágrafo de até, no máximo, 2000 caracteres.  Dificuladade: média  Tamanho da história: curta, isto é, em algum momento deve ser gerado um fim para a história, seja um game-over ou game-win, acabe a história o quanto antes.`
    const regras = "Regras do jogo:  1 - você deve gerar um texto descrevendo a situação e me dar opções de escolha, cada opção será referenciada por um número, por exemplo, 1 - Correr, 2 - Ficar.  2 - Cada escolha tem uma consequência e essa consequência é definida por você.  3 - Em todos os cenários, com exceção dos cenários de game-over e game-win, você deve dar exatamente 3 opções, caso seja um cenário de game-over ou game-win você não deve retornar nenhuma opção, apenas avisando que o jogador perdeu ou ganhou com base na esoclha tomada anteriormente.  4 - O jogo deve ter um final baseado na minha escolha, dependendo do que eu escolher você pode: (1) gerar um novo contexto mostrando as consequências da minha escolha e me dando novas opções de escolha, (2) Game Over: essa escolha ocasionou a morte do meu personagem ou em danos graves para mim ou para outrem, prejudicando o objetivo do jogo, tornando-o impossível e por isso o resultado é 'game-over: yes', (3) Game Win: alcancei o objetivo inicial da história e portanto venci o jogo, apesar das consequências ocorridas durante o jogo, sejam boas ou ruins.    Modelo de resposta:  texto explicando o contexto (esse texto deve ter exatamente 1 parágrafo)  opções (devem ser exatamente 3 opções referenciadas e numeradas de 1 a 3 ou, no caso de game-over ou game-win não deve conter nenhuma opção de escolha)  game-over: estritamente 'yes' ou 'no', não podendo de forma alguma vir com qualquer outro valor. (dependendo, se o contexto gerado for de game-over, isto é, o jogador perdeu o jogo, deve retornar yes, senão retorna no)  game-win: estritamente 'yes' ou 'no' não podendo de forma alguma vir com qualquer outro valor. (segue a mesma lógica)  Dificuldade: diz sobre a facilidade de ganhar o jogo, pode ser fácil, média ou difícil (easy, médium, hard)  Tamanho da história: não deve durar muito, seja breve, imersivo, mas objetivo.    [Ordem prioritária]: mantenha o modelo de respostas até o fim do jogo, isto é, até que game-over ou game-win seja 'yes'."
    const contextoResumido = await resumeContexto(resposta.mainContext)
    const escolha = resposta.presentOpcoes[--opcEscolhida]
    let novoPrompt = ''

    if(contCenarios > 8){
        const fimJogo = (Math.floor(Math.random() * 2)) == 0 ? 'Game-Over: yes' : 'Game-Win: yes' 
        novoPrompt = `${comando} ${configJogo} ${regras} O que aconteceu até agora? Aqui está um resumo do último contexto que você gerou: ${contextoResumido} Aqui está a última escolha do usuário: ${escolha}, com base nessa escolha determine necessariamente um fim de jogo com ${fimJogo}, NÂO GERE NOVAS OPÇÔES. Agora explique as consequências com base na 'escolha'.`
        console.log(`Fim de jogo: ${fimJogo}`)
    }else{
        novoPrompt = `${comando} ${configJogo} ${regras} O que aconteceu até agora? Aqui está um resumo do último contexto que você gerou: ${contextoResumido} Aqui está a última escolha do usuário: ${escolha}, com base nessa escolha determine um game-over, game-win ou gere novas opções de escolha. Agora explique as consequências com base na 'escolha'. Atente-se ou retorna Game-Win: yes ou Game-Over: yes ou gera novas opções, ou um ou outro, se gerar game-win como yes OU se gerar Game-Over como yes -> NÃO GERAR NOVAS OPÇÕES, nesse caso retorne apenas o texto explicando as consequências da ação.`
    }

    // comunicando com back-end
    fetch('http://127.0.0.1:5000/game-continue', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ novoPrompt })
    })
        .then(response => response.json())
        .then(data => {
            ocultarCarregamento() // Oculta o spinner
            contCenarios++
            if(data.status == 'ganhou'){
                renderWin()
            }else if(data.status == 'perdeu'){
                renderOver()
            }else{
                criarElementosDom() // Recria os elementos do DOM
                renderContext(data.resposta) // Renderiza o novo contexto
                renderButtons() // Renderiza os botões

                // Adiciona os event Listeners aos botões
                const botoes = [...document.querySelectorAll('.btnOpcao')]
                botoes.forEach(botao => {
                    botao.addEventListener('click', e => {
                        continuarJogo(retornaObjetoAtual(), botao.textContent, dtTratada)
                    })
                })
            }
            console.log(`Cenário: ${contCenarios}`)
            console.log(`Status: ${data.status}`)
        })
        .catch(error => {
            console.error('Erro:', error);
            ocultarCarregamento(); // Garante que o spinner seja ocultado em caso de erro
        })
}

// Função para resumir o contexto
async function resumeContexto(contexto){
    const context = contexto
    let contxtResumido = ''
    try {
        const response = await fetch('http://127.0.0.1:5000/resume-contexto', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ context })
        })
        const data = await response.json()
        contxtResumido = data.resposta
    } catch (error) {
        console.error('Erro:', error)
    }
    
    return contxtResumido
}

// Função para sair do jogo e apagar sessionStorage
document.querySelector('#gameExit').addEventListener('click', e => {
    e.preventDefault()
    sessionStorage.clear()
    window.location.assign('../index.html')
})