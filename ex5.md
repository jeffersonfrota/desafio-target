# Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em salas diferentes. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada. Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada? 

R = Considerando o cenário da questão. Conseguimos descobrir quais interruptores correspondem as suas determinadas lâmpadas da seguinte forma:

    Podemos considerar 3 estados das lâmpadas para a análise: lâmpada acessa, lâmpada apagada fria e lâmpada apagada quente;

    Primeiro passo, 
        - ligameremos o primeiro interruptor tempo suficiente para que ele esquente sua lâmpada;
        - Desligamos ele e ligamos o segundo interruptor;

    Segundo passo, 
        - faremos as duas idas nas distintas salas para analisar a situação das lâmpadas;

    Terceiro passo, Final,
        - Dada as duas idas nas distintas salas, teremos duas informaçoes sobre distintas lampadas;
        - Associaremos as informacoes aos respectivos interruptores;
        - Por exemplo, 
            A primeira ida revelou a lampada acessa, logo essa lampada estara associada ao segunto interruptor que ficou ligado;
            A segunda ida revelou a lampada apagada quente, logo essa lampada estara asscociada ao primeiro interruptor que foi ligado primeiro e desligado;
            Logo, a ultima lampada seria a lampada apagada fria e estaria associada ao terceiro e ultimo interruptor.

    Seguindo essa lógica, resolveriamos o problema dentro dos limites e escopo estabelecidos pela questão.