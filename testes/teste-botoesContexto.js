const botoesGenero = [...document.querySelectorAll('.container-generos_genero')];
const botoesNarrativa = [...document.querySelectorAll('.container-narrativas_narrativa')]

botoesGenero.map(botao => {
    botao.addEventListener('click', e => {
        // Verificar se há algum botão já selecionado e desmarcá-lo
        const selecionado = document.querySelector('.container-generos_genero--selected');
        if (selecionado && selecionado !== botao) {
            selecionado.classList.remove('container-generos_genero--selected');
        }

        // Alternar a classe do botão clicado
        botao.classList.toggle('container-generos_genero--selected');
        // alert(botao.textContent)
    });
});

botoesNarrativa.map(botao => {
    botao.addEventListener('click', e => {
        // Verificar se há algum botão já selecionado e desmarcá-lo
        const selecionado = document.querySelector('.container-narrativas_narrativa--selected');
        if (selecionado && selecionado !== botao) {
            selecionado.classList.remove('container-narrativas_narrativa--selected');
        }

        // Alternar a classe do botão clicado
        botao.classList.toggle('container-narrativas_narrativa--selected');
        // alert(botao.textContent)
    });
});