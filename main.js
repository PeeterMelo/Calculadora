
//A declaração const cria uma variável cujo o valor é fixo, ou seja, uma constante somente leitura. Isso não significa que o valor é imutável, apenas que a variável constante não pode ser alterada ou retribuída.

/*criaçao da constante + nome = id buscada no html (#display)*/
const display = document.querySelector("#display"); //O querySelector retorna o primeiro elemento dentro do documento//

const buttons = document.querySelectorAll("button"); //retorna uma lista de elementos presentes no documento

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.id === "=") {
            display.value = eval(display.value);
            /*pegar o valor do display e exibir no display*/
        } else if (btn.id === "ac") {
            display.value = "";
        } else if (btn.id === "de") {
            display.value = display.value.slice(0, -1) /*0 para começar a contar do primeiro numero. valor negativo para quando apertar o botão BKSP apagar da direita */
        } else {
            display.value += btn.id;
            /*+= para concatenar as strings*/
        }
    })
})
/*para cada constante buttons ((forma que irá chama-los) => para atribuir a atividade btn.addeventlistener para adicionar esse evento durante o ("click"), o que mais vai acontecer () => {variaveis [if(se o id do btn for igual ao sinal de =)]
}


usos de iguais
1)=atribuiçao

3)=(Valor e Tipo igual) - é usado para a comparação entre duas variáveis, mas isso irá verificar o tipo estrito, o que significa que ele irá verificar o tipo de dados e comparar dois valores.
*/
