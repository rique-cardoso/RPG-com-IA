window.addEventListener('load', e => {
    const mensagem = "Vamos jogar um jogo RPG, você vai gerar o contexto e a história.  Segue a configuração de contexto inicial para iniciarmos o jogo:  Nome do personagem: Neil Oprhélius  Sexo: masculino  Gênero do jogo: Futurista  Localização inicial: PunkCity  Estilo de narrativa: mistério e investigação  Objetivo inicial: Salvar a humanidade da Matrix controlada pela empresa HacksNow junto a um pequeno grupo de sobreviventes programadores.  Tamanho máximo dos textos: apenas um parágrafo de até, no máximo, 2000 caracteres.  Dificuladade: Fácil  Tamanho da história: curta  Regras do jogo:  1 - você deve gerar um texto descrevendo a situação e me dar opções de escolha, cada opção será referenciada por um número, por exemplo, 1 - Correr, 2 - Ficar, se eu digitar 1 estou escolhendo a opção correr, se eu digitar 2 estou escolhendo a opção ficar.  2 - Cada escolha tem uma consequência e essa consequência é definida por você.  3 - Em todos os cenários, com exceção dos cenários de game-over e game-win, você deve dar exatamente 3 opções.  4 - O jogo deve ter um final baseado na minha escolha, dependendo do que eu escolher você pode: (1) gerar um novo contexto mostrando as consequências da minha escolha e me dando novas opções de escolha, (2) Game Over: essa escolha ocasionou a morte do meu personagem ou em danos graves para mim ou para outrem, prejudicando o objetivo do jogo, tornando-o impossível e por isso o resultado é jogo perdido, (3) Game Win: alcancei o objetivo inicial da história e portanto venci o jogo, apesar das consequências ocorridas durante o jogo, sejam boas ou ruins.    Modelo de resposta:  texto explicando o contexto (esse texto deve ter exatamente 1 parágrafo)  opções (devem ser exatamente 3 opções referenciadas e numeradas de 1 a 3)  game-over: estritamente 'yes' ou 'no', não podendo de forma alguma vir com qualquer outro valor. (dependendo, se o contexto gerado for de game-over, isto é, o jogador perdeu o jogo, deve retornar yes, senão retorna no)  game-win: estritamente 'yes' ou 'no' não podendo de forma alguma vir com qualquer outro valor. (segue a mesma lógica)  Dificuldade: diz sobre a facilidade de ganhar o jogo, pode ser fácil, média ou difícil (easy, médium, hard)  Tamanho da história: não deve durar muito, seja breve, imersivo, mas objetivo.    [Ordem prioritária]: mantenha o modelo de respostas até o fim do jogo, isto é, até que game-over ou game-win seja 'yes'"
    fetch('http://127.0.0.1:5000/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mensagem })
    })
    .then(response => response.json())
        .then(data => {
            const p = document.createElement('p')
            p.textContent = data.resposta
            const main = document.querySelector('#response')
            main.appendChild(p)
        })
        .catch(error => console.error('Erro:', error))
})