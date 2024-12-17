const botoes = [...document.querySelectorAll('.container-generos_genero')];

botoes.map(botao => {
    botao.addEventListener('click', e => {
        // Verificar se há algum botão já selecionado e desmarcá-lo
        const selecionado = document.querySelector('.container-generos_genero--selected');
        if (selecionado && selecionado !== botao) {
            selecionado.classList.remove('container-generos_genero--selected');
        }

        // Alternar a classe do botão clicado
        botao.classList.toggle('container-generos_genero--selected');
    });
});
