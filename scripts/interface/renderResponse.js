export function renderContext(contexto) {
    const contextoSplitado = contexto.split(/\n/)
    const opcoes = contextoSplitado.filter(e => /^\d/.test(e))
    const main = document.querySelector('#response')
    const p = document.createElement('p')
    const op1 = document.createElement('p')
    const op2 = document.createElement('p')
    const op3 = document.createElement('p')
    op1.textContent = opcoes[0]
    op2.textContent = opcoes[1]
    op3.textContent = opcoes[2]
    p.textContent = contextoSplitado[0]
    main.appendChild(p)
    main.appendChild(op1)
    main.appendChild(op2)
    main.appendChild(op3)
}
export function renderButtons(){
    const main = document.querySelector('#response')
    const nav = document.createElement('nav')
    const btn1 = document.createElement("button")
    const btn2 = document.createElement("button")
    const btn3 = document.createElement("button")
    nav.classList.add('containerButtons')
    btn1.classList.add("btnOpcao")
    btn2.classList.add("btnOpcao")
    btn3.classList.add("btnOpcao")
    btn1.textContent = '1'
    btn2.textContent = '2'
    btn3.textContent = '3'
    main.appendChild(nav)
    nav.appendChild(btn1)
    nav.appendChild(btn2)
    nav.appendChild(btn3)
}