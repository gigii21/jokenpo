function jogar(){
    if(document.getElementById("pedra").checked == false
    /*Esse código verifica o estado de um elemento de input com o ID "pedra".
    A expressão document.getElementById("pedra") busca e retorna o elemento do 
    documento HTML que possui o ID "pedra". Em seguida, .checked é usado para 
    obter o estado do elemento.
    Se o estado do elemento for igual a false, isso significa que a caixa de 
    seleção associada ao elemento não está marcada ou selecionada. Caso contrário, 
    se o estado do elemento for true, isso indica que a caixa de seleção está marcada.
    Portanto, essa linha de código verifica se a caixa de seleção representada pelo elemento 
    com ID "pedra" não está marcada, retornando true se a caixa não estiver marcada e false 
    caso contrário. */

    && document.getElementById("papel").checked == false
    && document.getElementById("tesoura").checked == false
    )
{/*ódigo é uma função chamada "jogar". Ele verifica se nenhum dos elementos 
    de input com os IDs "pedra", "papel" e "tesoura" está marcado como selecionado. 
    Se todos eles estiverem desmarcados, o bloco de código dentro das 
    chaves será executado. */

    alert("Selecione uma função")
    }

    else{
        // Logica principal
        var sorteio = Math.floor(Math.random()* 3);
        /*Esse código cria uma variável chamada "sorteio" e atribui a ela um número 
        aleatório entre 0 e 2. Isso é feito usando a função Math.random() para gerar 
        um número decimal entre 0 e 1, e então multiplicando-o por 3 e arredondando 
        para baixo usando a função Math.floor(). O resultado é um número inteiro que 
        pode ser 0, 1 ou 2, representando o resultado de um sorteio ou escolha 
        aleatória entre três opções. */

        switch(sorteio){
            case 0:
                document.getElementById("pc").src="pcpedra.png";
                break;

                case 1:document.getElementById("pc").src="pcpapel.png";
                break;

                case 2: document.getElementById("pc").src = "pctesoura.png";
                break;
                }
                /*Esse código é um bloco de instruções que usa a variável "sorteio" para 
                determinar qual imagem será exibida na página HTML. O código utiliza a 
                estrutura switch-case para avaliar o valor da variável "sorteio" e executar 
                uma ação correspondente, dependendo do caso.
                Se o valor de "sorteio" for 0, a imagem com o ID "pc" terá seu atributo src 
                alterado para "pcpedra.png". Se o valor for 1, a imagem será alterada para 
                "pcpapel.png". Se o valor for 2, a imagem será alterada para "pctesoura.png". */


            // Verifica o vencedor ou declara empate

        
        if((document.getElementById("pedra").checked == true && sorteio == 0)
            || (document.getElementById("papel").checked == true && sorteio == 1)
            || (document.getElementById("tesoura").checked == true && sorteio == 2)
            )
            {
                document.getElementById("placar").innerHTML= "EMPATE";   
            }/*Esse código verifica se a seleção do usuário (escolhida entre "pedra", "papel" 
            ou "tesoura") é igual ao valor contido na variável "sorteio". Se a condição for 
            verdadeira, ou seja, se o jogador e o sorteio forem iguais, o bloco de código 
            dentro das chaves será executado.
            Dentro desse bloco, a função document.getElementById("placar").innerHTML é usada 
            para atualizar o conteúdo HTML do elemento com o ID "placar". Nesse caso, o texto 
            "EMPATE" será exibido no elemento. */

            

            else if((document.getElementById("pedra").checked == true && sorteio == 2)
            || (document.getElementById("papel").checked == true && sorteio == 0 )
            || (document.getElementById("tesoura").checked == true && sorteio == 1))
            {
                document.getElementById("placar").innerHTML = "Você Venceu!!!";
            }/*Ele verifica se a seleção do usuário (escolhida entre "pedra", "papel" ou 
            "tesoura") é diferente do valor contido na variável "sorteio". Se essa condição 
            for verdadeira, o bloco de código dentro das chaves será executado.
            Dentro desse bloco, a função document.getElementById("placar").innerHTML é usada 
            para atualizar o conteúdo HTML do elemento com o ID "placar". Nesse caso, o texto 
            "Você Venceu!!!" será exibido no elemento.

 */
            else{
                document.getElementById("placar").innerHTML = "Computador venceu";
            }
    }
    
}
    function resetar(){
        document.getElementById("pc").src="pc.png";
        document.getElementById("pc").innerHTML="";
    }/*Esse código é uma função chamada "resetar" que serve para redefinir ou reiniciar o estado 
    de alguns elementos da página HTML.
    Dentro dessa função, são utilizadas duas chamadas à função document.getElementById() para 
    acessar elementos na página com os IDs "pc".
    A primeira linha de código altera o atributo src da imagem com ID "pc", definindo-o como 
    "pc.png", o que provavelmente restaura a imagem padrão.
    A segunda linha de código define o conteúdo interno (innerHTML) do elemento com ID "pc" 
    como uma string vazia, removendo qualquer texto ou conteúdo anteriormente exibido nesse elemento. */