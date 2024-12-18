let cenario = 0;
   let titulo = document.getElementById("titulo");
   let texto = document.getElementById("texto");
   let texto1 = document.getElementById("texto1");
   let link1 = document.getElementById("link1");
   let link2 = document.getElementById("link2");
   let botao1 = document.getElementById("botao1");
   let botao2 = document.getElementById("botao2");
   let corpo = document.getElementById("corpo");

   inicio();

   function inicio(){
       cenario = 0;

       titulo.innerHTML = "O LADO NEGATIVO DA MOEDA";
       texto.innerHTML = "A história tem como personagem principal Gabriel Bernardes, um garoto de 13 anos muito pobre que deve constantemente trabalhar para conseguir manter a sua família. Como essa história terminará? Suas decisões influenciarão no resultado final. Escolha com sabedoria !";

       botao1.innerHTML = "JOGAR &#x1F3AE;";
       botao2.InnerHTML = "CONTINUAR";

       botao2.style.display = "none";
       link1.style.display = "none";
       link2.style.display = "none";
       texto1.style.display = "none";

        corpo.style.background = "#3B3B3B";
        texto.style.color = "#D1D1D1";
        botao1.style.background = "#D1D1D1";
        botao1.style.color = "#3B3B3B";
        titulo.style.color = "white";
        texto.style.fontSize = "25px";
        texto.style.textAlign = "justify";
        botao2.style.background = "#D1D1D1";
        botao2.style.color = "#3B3B3B";
        botao1.style.borderColor = "white";
        botao2.style.borderColor = "white";
        titulo.style.fontSize = "3em";
        texto.style.fontSize = "25px";
        texto.style.fontFamily = "arial";
        titulo.style.fontFamily = "arial";
        botao1.style.fontSize = "20px";
   }

   function resposta(opcao){
       switch(cenario){
           case 0: decisao0(opcao); break;
           case 1: decisao1(opcao); break;
           case 2: decisao2(opcao); break;
           case 3: decisao3(opcao); break;
           case 4: decisao4(opcao); break;
           case 5: decisao5(opcao); break;
           case 6: decisao6(opcao); break;
           case 7: decisao7(opcao); break;
           case 8: decisao8(opcao); break;
           case 9: decisao9(opcao); break;
           case 10: decisao10(opcao); break;
           case 12: decisao12(opcao); break;
           case 13: decisao13(opcao); break;
           case 14: decisao14(opcao); break;
           case 15: decisao15(opcao); break;
           case 16: decisao16(opcao); break;
           case 17: decisao17(opcao); break;
       }
   }

   function decisao0(opcao){
       if(opcao == 1){
           cenario1();
       }else if(opcao == 2){
           cenario1();
       }
   }

   function cenario1(){
       cenario = 1;

       titulo.innerHTML = "A PROPOSTA";
       texto.innerHTML = "Gabriel acorda cedo e começa a coletar latinhas recicláveis para conseguir vender e se alimentar. Otávio, um antigo amigo de Gabriel, lhe oferece uma solução mais lucrativa: tráfico de drogas <p> O que Gabriel faz?";

       botao1.innerHTML = "ACEITAR A PROPOSTA"; 
       botao2.innerHTML = "RECUSAR A PROPOSTA";

       botao2.style.display = "block";
       link1.style.display = "none";
       link2.style.display = "none";
       texto1.style.display = "none";

        corpo.style.background = "#3B3B3B";
        texto.style.color = "#D1D1D1";
        botao1.style.background = "#D1D1D1";
        botao1.style.color = "#3B3B3B";
        titulo.style.color = "white";
        texto.style.fontSize = "25px";
        texto.style.textAlign = "justify";
        botao2.style.background = "#D1D1D1";
        botao2.style.color = "#3B3B3B";
        botao1.style.borderColor = "white";
        botao2.style.borderColor = "white";
        texto.style.fontFamily = "arial";
        titulo.style.fontFamily = "arial";
        botao1.style.fontSize = "15px";
   }

   function decisao1(opcao){
       if(opcao == 1){
           cenario2();
       }else if(opcao == 2){
           cenario3();
       }
   }

   function cenario2(){
       cenario = 2;

       titulo.innerHTML = "SEGREDO REVELADO";
       texto.innerHTML = "Com o passar do tempo, a família de Gabriel desconfia do fluxo de dinheiro entrando em sua casa, investigam de onde ele vem. Quando descobrem, decepcionados, pedem para que Gabriel pare de vender drogas.<br>Gabriel encontra-se em um dilema: Caso pare, talvez não tenha dinheiro nem para comer ou caso continue, é possivel que seja pego pela polícia e assim irá entristecer sua família ainda mais.<p> Sabendo disso, o que Gabriel decide fazer?";

       botao1.innerHTML = "PARAR DE VENDER DROGAS";
       botao2.innerHTML = "CONTINUAR VENDENDO SENDO MAIS DISCRETO";

       botao2.style.display = "block";
       link1.style.display = "none";
       link2.style.display = "none";
       texto1.style.display = "none";

       corpo.style.background = "#3B3B3B";
        texto.style.color = "#D1D1D1";
        botao1.style.background = "#D1D1D1";
        botao1.style.color = "#3B3B3B";
        titulo.style.color = "white";
        texto.style.fontSize = "25px";
        texto.style.textAlign = "justify";
        botao2.style.background = "#D1D1D1";
        botao2.style.color = "#3B3B3B";
        botao1.style.borderColor = "white";
        botao2.style.borderColor = "white";
        texto.style.fontFamily = "arial";
        titulo.style.fontFamily = "arial";
        botao1.style.fontSize = "15px";
   }
   
   function decisao2(opcao){
       if(opcao == 1){
           cenario3();
       }else if(opcao == 2){
           cenario4();
       }
   }

function cenario3(){
    cenario = 3;

    titulo.innerHTML = "A SITUAÇÃO PIORA";
    texto.innerHTML = "Após ouvir sua família, ele volta a colher reciclagem. Apesar de seus pais viverem de \"bico\" e precisarem do máximo de ajuda possível, eles pedem que Gabriel comece a estudar, já que essa é provavelmente a única solução para que eles alcancem uma vida melhor futuramente.<br>Consequentemente, a situação ficará mais difícil, já que ele terá menos tempo para trabalhar.<p> Gabriel decide começar a estudar?";

    botao1.innerHTML = "SIM";
    botao2.innerHTML = "NÃO";

    botao2.style.display = "block";
    link1.style.display = "none";
    link2.style.display = "none";
    texto1.style.display = "none";

        corpo.style.background = "#3B3B3B";
        texto.style.color = "#D1D1D1";
        botao1.style.background = "#D1D1D1";
        botao1.style.color = "#3B3B3B";
        titulo.style.color = "white";
        texto.style.fontSize = "25px";
        texto.style.textAlign = "justify";
        botao2.style.background = "#D1D1D1";
        botao2.style.color = "#3B3B3B";
        botao1.style.borderColor = "white";
        botao2.style.borderColor = "white";
        texto.style.fontFamily = "arial";
        titulo.style.fontFamily = "arial";
        botao1.style.fontSize = "15px";
}

function decisao3(opcao){
    if(opcao == 1){
        cenario5();
    }else if(opcao == 2){
        cenario6();
    }
}

function cenario4(){
    cenario = 4;

    titulo.innerHTML = "EM FLAGRANTE";
    texto.innerHTML = "Após decidir continuar a vender, Gabriel passa a ser mais discreto para que sua família não perceba. Porém, um certo dia, ele é pego em flagrante pela polícia, que o dá voz de prisão.<p> Qual decisão Gabriel toma?";

    botao1.innerHTML = "TENTAR FUGIR";
    botao2.innerHTML = "FICAR E SER PRESO";

    botao2.style.display = "block";
    link1.style.display = "none";
    link2.style.display = "none";
    texto1.style.display = "none";

    corpo.style.background = "#3B3B3B";
        texto.style.color = "#D1D1D1";
        botao1.style.background = "#D1D1D1";
        botao1.style.color = "#3B3B3B";
        titulo.style.color = "white";
        texto.style.fontSize = "25px";
        texto.style.textAlign = "justify";
        botao2.style.background = "#D1D1D1";
        botao2.style.color = "#3B3B3B";
        botao1.style.borderColor = "white";
        botao2.style.borderColor = "white";
        texto.style.fontFamily = "arial";
        titulo.style.fontFamily = "arial";
        botao1.style.fontSize = "15px";
}

function decisao4(opcao){
    if(opcao == 1){
        cenario7();
    }else if(opcao == 2){
        cenario8();
    }
}

function cenario5(){
    cenario = 5;

    titulo.innerHTML = "UMA GRANDE PERDA";
    texto.innerHTML = "Gabriel se esforça bastante na escola em uma tentativa desesperada de conseguir dar uma vida melhor para sua família. Porém, após alguns anos, a mãe de Gabriel é diagnosticada com câncer e apesar de todos os esforços da família para conseguir dinheiro para o tratamento, ela falece.<br>Ele, agora, se encontra confuso e sem um rumo na vida. Cogitando largar os estudos para trabalhar mais e a história não se repetir.<p> Gabriel decide mesmo parar de estudar?";

    botao1.innerHTML = "SIM";
    botao2.innerHTML = "NÃO";

    botao2.style.display = "block";
    link1.style.display = "none";
    link2.style.display = "none";
    texto1.style.display = "none";

    corpo.style.background = "#3B3B3B";
        texto.style.color = "#D1D1D1";
        botao1.style.background = "#D1D1D1";
        botao1.style.color = "#3B3B3B";
        titulo.style.color = "white";
        texto.style.fontSize = "25px";
        texto.style.textAlign = "justify";
        botao2.style.background = "#D1D1D1";
        botao2.style.color = "#3B3B3B";
        botao1.style.borderColor = "white";
        botao2.style.borderColor = "white";
        texto.style.fontFamily = "arial";
        titulo.style.fontFamily = "arial";
        botao1.style.fontSize = "15px";
}

function decisao5(opcao){
    if(opcao == 1){
        cenario10();
    }else if(opcao == 2){
        cenario9();
    }
}

function cenario6(){
    cenario = 6;

    titulo.innerHTML = "A SITUAÇÃO NÃO MUDA";
    texto.innerHTML = "Gabriel decide apenas trabalhar, mesmo que isso não mude a sua situação. Após alguns anos, a mãe de Gabriel é diagnosticada com câncer, e apesar de todos os esforços da família para conseguir dinheiro para o tratamento, ela falece.<br>Essa situação afetou absurdamente o psicológico de Gabriel. Ele sente a perda da sua mãe todos os dias, ela era seu pilar, sua motivação para continuar e nunca desistir. Apesar de tentar se manter firme, ele não aguenta mais passar por toda essa dor sozinho.<p> Gabriel procura ajuda?";

    botao1.innerHTML = "SIM";
    botao2.innerHTML = "NÃO";

    botao2.style.display = "block";
    link1.style.display = "none";
    link2.style.display = "none";
    texto1.style.display = "none";

    corpo.style.background = "#3B3B3B";
        texto.style.color = "#D1D1D1";
        botao1.style.background = "#D1D1D1";
        botao1.style.color = "#3B3B3B";
        titulo.style.color = "white";
        texto.style.fontSize = "25px";
        texto.style.textAlign = "justify";
        botao2.style.background = "#D1D1D1";
        botao2.style.color = "#3B3B3B";
        botao1.style.borderColor = "white";
        botao2.style.borderColor = "white";
        texto.style.fontFamily = "arial";
        titulo.style.fontFamily = "arial";
        botao1.style.fontSize = "15px";
}

function decisao6(opcao){
    if(opcao == 1){
        cenario15();
    }else if(opcao == 2){
        cenario12();
    }
}

function cenario7(){
    cenario = 7;

    titulo.innerHTML = "UM TRÁGICO FIM.&#x2639&#xFE0F;";
    texto.innerHTML = "Gabriel tenta fugir, e apesar de correr o mais rápido que consegue, foi atingido por uma bala, caindo imediatamente. Largado e sozinho no chão, apenas a morte o faz companhia.";
    texto1.innerHTML = "VOCÊ PERDEU!&#x2620,&#xFE0F;"

    botao1.innerHTML = "TENTAR NOVAMENTE";
    botao2.innerHTML = "ENCERRAR O JOGO";

    botao2.style.display = "block";
    link1.style.display = "none";
    link2.style.display = "none";
    texto1.style.display = "block";


    corpo.style.background = "#3B3B3B";
        texto.style.color = "#D1D1D1";
        botao1.style.background = "#D1D1D1";
        botao1.style.color = "#3B3B3B";
        titulo.style.color = "white";
        texto.style.fontSize = "25px";
        texto.style.textAlign = "justify";
        botao2.style.background = "#D1D1D1";
        botao2.style.color = "#3B3B3B";
        botao1.style.borderColor = "white";
        botao2.style.borderColor = "white";
        texto1.style.color = "#e50914";
        texto1.style.fontFamily = "chiller";
        texto1.style.fontSize = "43px";
        texto.style.fontFamily = "arial";
        titulo.style.fontFamily = "arial";
        botao1.style.fontSize = "15px";
}

function decisao7(opcao){
    if(opcao == 1){
        cenario1();
    }else if(opcao == 2){
        cenario16();
    }
}

function cenario8(){
    cenario = 8;

    titulo.innerHTML = "UMA BOLA DE NEVE";
    texto.innerHTML = "Gabriel é preso com direito à fiança, mas como sua família não possui o dinheiro, ele cumpre seus 5 anos de pena. Ao cumprir sua sentença, volta para casa e recebe a notícia de que sua mãe foi diagnosticada com câncer, numa tentativa desesperada de conseguir dinheiro, ele volta a traficar.<br> Infelizmente, apesar de todos os esforços, sua mãe morre. Gabriel se encontra confuso, foi contra todos os princípios que foram ensinados pela sua mãe. O peso na consciência chega.<p> Diante disso, o que ele faz?";

    botao1.innerHTML = "CONTINUA A VENDER DROGAS";
    botao2.innerHTML = "DECIDE PARAR DE VENDER";

    botao2.style.display = "block";
    link1.style.display = "none";
    link2.style.display = "none";
    texto1.style.display = "none";

    corpo.style.background = "#3B3B3B";
        texto.style.color = "#D1D1D1";
        botao1.style.background = "#D1D1D1";
        botao1.style.color = "#3B3B3B";
        titulo.style.color = "white";
        texto.style.fontSize = "25px";
        texto.style.textAlign = "justify";
        botao2.style.background = "#D1D1D1";
        botao2.style.color = "#3B3B3B";
        botao1.style.borderColor = "white";
        botao2.style.borderColor = "white";
        texto.style.fontFamily = "arial";
        titulo.style.fontFamily = "arial";
        botao1.style.fontSize = "15px";
}

function decisao8(opcao){
    if(opcao == 1){
        cenario14();
    }else if(opcao == 2){
        cenario13();
    }
}

function cenario9(){
    cenario = 9;

    titulo.innerHTML = "UM FINAL PROMISSOR";
    texto.innerHTML = "Com o passar do tempo, Gabriel encontra diversas pessoas que o ajudam e incentivam a estudar e correr atrás dos seus sonhos. Com o incentivo dessas pessoas, ele consegue um emprego e aos 33 anos consegue se mudar com o resto de sua família e levar uma vida digna graças a seus esforços.";
    texto1.innerHTML = "VOCÊ VENCEU!<br>&#x1F601; &#x1F44F; &#x1F44F"

    botao1.innerHTML = "CONTINUAR";
    botao2.innerHTML = "CONTINUAR";

    botao2.style.display = "none";
    link1.style.display = "none";
    link2.style.display = "none";
    texto1.style.display = "block";

    corpo.style.background = "#3B3B3B";
        texto.style.color = "#D1D1D1";
        botao1.style.background = "#D1D1D1";
        botao1.style.color = "#3B3B3B";
        titulo.style.color = "white";
        texto.style.fontSize = "25px";
        texto.style.textAlign = "justify";
        botao2.style.background = "#D1D1D1";
        botao2.style.color = "#3B3B3B";
        botao1.style.borderColor = "white";
        botao2.style.borderColor = "white";
        texto1.style.color = "#C6EF21";
        texto1.style.fontFamily = "lucida console";
        texto1.style.fontSize = "43px";
        texto.style.fontFamily = "arial";
        titulo.style.fontFamily = "arial";
        botao1.style.fontSize = "15px";
    
}
function decisao9(opcao){
    if(opcao == 1){
        cenario16();
    }else if(opcao == 2){
        cenario16();
    }
}

function cenario10(){
    cenario = 10;

    titulo.innerHTML = "DESESPERO";
    texto.innerHTML = "Apesar de dar tudo de si, as coisas não fluem e Gabriel se encontra bastante desanimado. Esse sentimento de insuficiência o abala muito, fazendo com que ele desenvolva uma depressão profunda. Ele não aguenta mais.<p>O que ele faz?";

    botao1.innerHTML = "DECIDE BUSCAR TRATAMENTO PSICOLÓGICO";
    botao2.innerHTML = "DECIDE CONTINUAR TENTANDO";

    botao2.style.display = "block";
    link1.style.display = "none";
    link2.style.display = "none";
    texto1.style.display = "none";

    corpo.style.background = "#3B3B3B";
        texto.style.color = "#D1D1D1";
        botao1.style.background = "#D1D1D1";
        botao1.style.color = "#3B3B3B";
        titulo.style.color = "white";
        texto.style.fontSize = "25px";
        texto.style.textAlign = "justify";
        botao2.style.background = "#D1D1D1";
        botao2.style.color = "#3B3B3B";
        botao1.style.borderColor = "white";
        botao2.style.borderColor = "white";
        texto.style.fontFamily = "arial";
        titulo.style.fontFamily = "arial";
        botao1.style.fontSize = "15px";
}

function decisao10(opcao){
    if(opcao == 1){
        cenario15();
    }else if(opcao == 2){
        cenario12();
    }
}


function cenario12(){
    cenario = 12;

    titulo.innerHTML = "O FIM DE UMA JORNADA &#x2639&#xFE0F;";
    texto.innerHTML = "Gabriel, apesar de passar toda a sua vida lutando contra a pobreza, acaba não conseguindo alcançar os seus objetivos. Aos 33 anos, é infectado por uma grave amebíase, que, infelizmente, o leva a morte.";
    texto1.innerHTML = "VOCÊ PERDEU!&#x2620,&#xFE0F;";

    botao1.innerHTML = "TENTAR NOVAMENTE";
    botao2.innerHTML = "ENCERRAR O JOGO";

    botao2.style.display = "block";
    link1.style.display = "none";
    link2.style.display = "none";
    texto1.style.display = "block";

    corpo.style.background = "#3B3B3B";
        texto.style.color = "#D1D1D1";
        botao1.style.background = "#D1D1D1";
        botao1.style.color = "#3B3B3B";
        titulo.style.color = "white";
        texto.style.fontSize = "25px";
        texto.style.textAlign = "justify";
        botao2.style.background = "#D1D1D1";
        botao2.style.color = "#3B3B3B";
        botao1.style.borderColor = "white";
        botao2.style.borderColor = "white";
        texto1.style.color = "#e50914";
        texto1.style.fontFamily = "chiller";
        texto1.style.fontSize = "43px";
        texto.style.fontFamily = "arial";
        titulo.style.fontFamily = "arial";
        botao1.style.fontSize = "15px";

}

function decisao12(opcao){
    if(opcao == 1){
        cenario1();
    }else if(opcao == 2){
        cenario16();
    }
}

function cenario13(){
    cenario = 13;

    titulo.innerHTML = "O FIM";
    texto.innerHTML = "Gabriel, após deixar a vida do crime, tenta levar uma conversa com seus fornecedores. Isso não acaba nada bem, já que ele tinha uma grande dívida, e para pagá-la deveria continuar traficando. Gabriel recusa e oferece pagar a dívida de forma honesta, porém em um maior período de tempo, a proposta não é muito bem aceita. Após decidir deixar o local e ir para casa, Gabriel é baleado na testa pelos homens a quem devia dinheiro.";
    texto1.innerHTML = "VOCÊ PERDEU!&#x2620,&#xFE0F;";

    botao1.innerHTML = "TENTAR NOVAMENTE";
    botao2.innerHTML = "ENCERRAR O JOGO";

    botao2.style.display = "block";
    link1.style.display = "none";
    link2.style.display = "none";
    texto1.style.display = "block";


    corpo.style.background = "#3B3B3B";
        texto.style.color = "#D1D1D1";
        botao1.style.background = "#D1D1D1";
        botao1.style.color = "#3B3B3B";
        titulo.style.color = "white";
        texto.style.fontSize = "25px";
        texto.style.textAlign = "justify";
        botao2.style.background = "#D1D1D1";
        botao2.style.color = "#3B3B3B";
        botao1.style.borderColor = "white";
        botao2.style.borderColor = "white";
        texto1.style.color = "#e50914";
        texto1.style.fontFamily = "chiller";
        texto1.style.fontSize = "43px";
        texto.style.fontFamily = "arial";
        titulo.style.fontFamily = "arial";
        botao1.style.fontSize = "15px";
}

function decisao13(opcao){
    if(opcao == 1){
        cenario1();
    }else if(opcao == 2){
        cenario16();
    }
}

function cenario14(){
    cenario = 14;

    titulo.innerHTML = "O FIM";
    texto.innerHTML = "Gabriel, apesar de muita relutância, decide continuar no tráfico. As coisas estavam indo de acordo com o planejado, nenhuma suspeita vinda de sua família. O que Gabriel não esperava, é que mais alguém o observava. <br> Gabriel, que portava cerca de 5kg de drogas escondidas, é interceptado pela polícia, que ao invés de simplesmente o prender, toma uma drástica decisão: matá-lo. Gabriel leva 3 tiros em suas costas, o que o derruba imediatamente, em seus últimos momentos de vida, percebe o lado negativo da moeda.";
    texto1.innerHTML = "VOCÊ PERDEU!&#x2620,&#xFE0F;";

    botao1.innerHTML = "TENTAR NOVAMENTE";
    botao2.innerHTML = "ENCERRAR O JOGO";

    botao2.style.display = "block";
    link1.style.display = "none";
    link2.style.display = "none";
    texto1.style.display = "block";


    corpo.style.background = "#3B3B3B";
        texto.style.color = "#D1D1D1";
        botao1.style.background = "#D1D1D1";
        botao1.style.color = "#3B3B3B";
        titulo.style.color = "white";
        texto.style.fontSize = "25px";
        texto.style.textAlign = "justify";
        botao2.style.background = "#D1D1D1";
        botao2.style.color = "#3B3B3B";
        botao1.style.borderColor = "white";
        botao2.style.borderColor = "white";
        texto1.style.color = "#e50914";
        texto1.style.fontFamily = "chiller";
        texto1.style.fontSize = "43px";
        texto.style.fontFamily = "arial";
        titulo.style.fontFamily = "arial";
        botao1.style.fontSize = "15px";
}

function decisao14(opcao){
    if(opcao == 1){
        cenario1();
    }else if(opcao == 2){
        cenario16();
    }
}

function cenario15(){
    cenario = 15;

    titulo.innerHTML = "UMA LUZ NO FIM DO TÚNEL";
    texto.innerHTML = "Gabriel encontra uma ONG que o interna em uma clínica especializada onde recebeu o tratamento psicológico que precisava, com o passar do tempo ele percebeu que seus problemas poderiam tê-lo levado a um outro final mais trágico. <br>Agora, Gabriel procura conscientizar as pessoas sobre a importância da vida e de seguir o caminho da lei.";
    texto1.innerHTML = "VOCÊ VENCEU!<br>&#x1F601; &#x1F44F; &#x1F44F;";

    botao1.innerHTML = "CONTINUAR";
    botao2.innerHTML = "ENCERRAR O JOGO";

    botao2.style.display = "none";
    link1.style.display = "none";
    link2.style.display = "none";
    texto1.style.display = "block";


    corpo.style.background = "#3B3B3B";
        texto.style.color = "#D1D1D1";
        botao1.style.background = "#D1D1D1";
        botao1.style.color = "#3B3B3B";
        titulo.style.color = "white";
        texto.style.fontSize = "25px";
        texto.style.textAlign = "justify";
        botao2.style.background = "#D1D1D1";
        botao2.style.color = "#3B3B3B";
        botao1.style.borderColor = "white";
        botao2.style.borderColor = "white";
        texto1.style.color = "#C6EF21";
        texto1.style.fontFamily = "lucida console";
        texto1.style.fontSize = "43px";
        texto.style.fontFamily = "arial";
        titulo.style.fontFamily = "arial";
        botao1.style.fontSize = "15px";
}

function decisao15(opcao){
    if(opcao == 1){
        cenario16();
    }else if(opcao == 2){
        cenario16();
    }
}

function cenario16(){
    cenario = 16;

    titulo.innerHTML = "POBREZA NO BRASIL";
    texto.innerHTML = "Antes de falarmos sobre a pobreza no Brasil, temos primeiro que definir o que seria a palavra pobreza. \"Pobreza\" é basicamente falta daquilo que é necessário, como: Comida, moradia, etc. <br> Após definir pobreza, como estaria este grande problema em nosso país? A pobreza no Brasil está bem triste e é algo extremamente preocupante. Uma pesquisa feita em 2019 pelo IBGE diz que: <ul><li>Brasil tem quase 52 milhões de pessoas na pobreza;</li> <li>13 milhões de pessoas em extrema pobreza</li></ul> <br> Acreditamos que esses números aumentaram por conta da pandemia que teve início em 2020 e que prevalece até os dias atuais. Outra pesquisa feita pelo IBGE no ano passado diz os estados mais pobres do nosso país: <ul><li>Bahia</li><li>Maranhão</li><li>Acre</li><li>Alagoas</li></ul> <br> Acreditamos que estamos longe de erradicar a pobreza mundial, mas que infelizmente pessoas acabam passando por isso todos os dias e muitas vezes temos boas condições de vida, mas que muitas não damos valor. Pense nisso e no próximo que passa diversos problemas que nem imagina! <p> Referências:";

    link1.innerHTML = "Jornal Nacional.IBGE: Brasil tem quase 52 milhões de pessoas na pobreza e 13 milhões na extrema pobreza. <br>";
    link2.innerHTML = "G1 BA. IBGE aponta BA como estado brasileiro com maior nº absoluto de pessoas extremamente pobres. <p>";
    botao1.innerHTML = "ENCERRAR O JOGO";
    botao2.innerHTML = "ENCERRAR O JOGO";


    botao2.style.display = "none";
    link1.style.display = "block";
    link2.style.display = "block";
    texto1.style.display = "none";

    corpo.style.background = "#3B3B3B";
        texto.style.color = "#D1D1D1";
        botao1.style.background = "#D1D1D1";
        botao1.style.color = "#3B3B3B";
        titulo.style.color = "white";
        texto.style.fontSize = "25px";
        texto.style.textAlign = "justify";
        botao2.style.background = "#D1D1D1";
        botao2.style.color = "#3B3B3B";
        botao1.style.borderColor = "white";
        botao2.style.borderColor = "white";
        texto.style.fontFamily = "arial";
        titulo.style.fontFamily = "arial";
        botao1.style.fontSize = "15px";
}

function decisao16(opcao){
    if(opcao == 1){
        cenario17();
    }else if(opcao == 2){
        cenario17();
    }
}

function cenario17(){
    cenario = 17;

    titulo.innerHTML = "OBRIGADO POR JOGAR ! <br> &#x1F601; &#x1F3AE;";
    texto.innerHTML = "<ins>EQUIPE RESPONSÁVEL PELO JOGO</ins>: <br><br> <em>Programação Geral</em>: <br>Leslei Almeida <p> <em>Criação Dos Textos</em>: <br> Maria Eduarda Freitas <br> Julia Vitoria <p> <em>Programação De Interface</em>: <br> Henrique Cardoso <p> <em>Auxílio Geral e Revisão De Bugs</em>: <br> Gabriel Fernandes <p> <em>Pesquisas</em>: <br> Gabriel Fernandes";

    botao1.innerHTML = "JOGAR NOVAMENTE";
    botao2.innerHTML = "JOGAR NOVAMENTE";

    botao2.style.display = "none";
    link1.style.display = "none";
    link2.style.display = "none";
    texto1.style.display = "none";

    corpo.style.background = "#3B3B3B";
    texto.style.color = "#D1D1D1";
    botao1.style.background = "#D1D1D1";
    botao1.style.color = "#3B3B3B";
    titulo.style.color = "white";
    texto.style.fontSize = "20px";
    texto.style.textAlign = "center";
    botao2.style.background = "#D1D1D1";
    botao2.style.color = "#3B3B3B";
    botao1.style.borderColor = "white";
    botao2.style.borderColor = "white";
    texto.style.fontFamily = "arial";
    titulo.style.fontFamily = "arial";
    botao1.style.fontSize = "15px";
}

function decisao17(opcao){
    if(opcao == 1){
        cenario1();
    }else if(opcao == 2){
        cenario1();
    }
}