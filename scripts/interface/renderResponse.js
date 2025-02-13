const objCompletContext = {
    mainContext: '',
    presentOpcoes: '',
    respostaCompleta: ''
}
export function criarElementosDom() {
    // criação dos textos no DOM
    const main = document.querySelector('#response')
    const p = document.createElement('p')
    const op1 = document.createElement('p')
    const op2 = document.createElement('p')
    const op3 = document.createElement('p')
    p.setAttribute('id', 'contexto')
    op1.setAttribute('id', 'escolha1')
    op2.setAttribute('id', 'escolha2')
    op3.setAttribute('id', 'escolha3')
    main.appendChild(p)
    main.appendChild(op1)
    main.appendChild(op2)
    main.appendChild(op3)

    // criação dos botões no DOM
    const nav = document.createElement('nav')
    const btn1 = document.createElement("button")
    const btn2 = document.createElement("button")
    const btn3 = document.createElement("button")
    nav.classList.add('containerButtons')
    btn1.classList.add("btnOpcao")
    btn3.classList.add("btnOpcao")
    btn2.classList.add("btnOpcao")
    btn1.setAttribute('id', 'botao1')
    btn2.setAttribute('id', 'botao2')
    btn3.setAttribute('id', 'botao3')
    main.appendChild(nav)
    nav.appendChild(btn1)
    nav.appendChild(btn2)
    nav.appendChild(btn3)
}
export function renderContext(contexto) {
    const contextoSplitado = contexto.split(/\n/)
    const opcoes = contextoSplitado.filter(e => /^\d/.test(e))
    // const main = document.querySelector('#response')
    const p = document.querySelector('#contexto')
    const op1 = document.querySelector('#escolha1')
    const op2 = document.querySelector('#escolha2')
    const op3 = document.querySelector('#escolha3')
    op1.textContent = opcoes[0]
    op2.textContent = opcoes[1]
    op3.textContent = opcoes[2]
    p.textContent = contextoSplitado[0]
    objCompletContext.mainContext = contextoSplitado[0]
    objCompletContext.presentOpcoes = opcoes
    objCompletContext.respostaCompleta = contextoSplitado
}
export function renderButtons() {
    // const main = document.querySelector('#response')
    const btn1 = document.querySelector('#botao1')
    const btn2 = document.querySelector('#botao2')
    const btn3 = document.querySelector('#botao3')
    btn1.textContent = '1'
    btn2.textContent = '2'
    btn3.textContent = '3'
}
export function retornaObjetoAtual() {
    return objCompletContext
}
export function renderWin() {
    dropElements()

    const body = document.querySelector('#bodyTelaJogando')
    body.style.backgroundColor = '#15773d'
    body.style.backgroundImage = "url('../../img/background-win.png')";
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundSize = "cover";

    const div = document.createElement('div')
    div.classList.add('container')

    const p = document.createElement('p')
    p.classList.add('glitch')

    const span1 = document.createElement('span')
    span1.setAttribute('aria-hidden', 'true')
    span1.textContent = 'You Win'
    const span2 = document.createElement('span')
    span2.setAttribute('aria-hidden', 'true')
    span1.textContent = 'You Win'

    body.appendChild(div)
    div.appendChild(p)
    p.appendChild(span1)
    p.textContent = 'You Win'
    p.appendChild(span2)

    const containerTryAgain = document.createElement('nav')
    containerTryAgain.classList.add('containerTryAgain')
    div.appendChild(containerTryAgain)
    const button = document.createElement('button')
    button.classList.add('btnTryAgain')
    button.style.color = "#15773d"
    button.textContent = "Jogar novamente"
    containerTryAgain.appendChild(button)
    button.addEventListener('click', e => location.reload())
}
export function renderOver() {
    dropElements()
    const body = document.querySelector('#bodyTelaJogando')
    body.style.backgroundColor = '#ba0000'
    body.style.backgroundImage = "url('../../img/background-over.png')";
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundSize = "cover";

    const div = document.createElement('div')
    div.classList.add('container')
    
    const p = document.createElement('p')
    p.classList.add('glitch')
    
    const span1 = document.createElement('span')
    span1.setAttribute('aria-hidden', 'true')
    span1.textContent = 'Game Over'
    const span2 = document.createElement('span')
    span2.setAttribute('aria-hidden', 'true')
    span1.textContent = 'Game Over'

    body.appendChild(div)
    div.appendChild(p)
    p.appendChild(span1)
    p.textContent = 'Game Over'
    p.appendChild(span2)

    const containerTryAgain = document.createElement('nav')
    containerTryAgain.classList.add('containerTryAgain')
    div.appendChild(containerTryAgain)
    const button = document.createElement('button')
    button.classList.add('btnTryAgain')
    button.style.color = "rgb(120, 0, 0)"
    button.textContent = "Tentar novamente"
    containerTryAgain.appendChild(button)
    button.addEventListener('click', e => location.reload())
}
function dropElements(){
    const elements = [
        document.querySelector('#escolha1'),
        document.querySelector('#escolha2'),
        document.querySelector('#escolha3'),
        document.querySelector('.containerButtons'),
        document.querySelector('#botao1'),
        document.querySelector('#botao2'),
        document.querySelector('#botao3')
    ]
    elements.forEach(e => {
        if(e){ // Verifica se o elemento existe antes de tentar removê-lo
            e.remove()
        }
    })
}