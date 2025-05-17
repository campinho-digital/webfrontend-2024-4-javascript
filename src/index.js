// Importando a biblioteca readline-sync
const { startTransition } = require('react'); //<-- acho que isso nao estava aki 
const readline = require('readline-sync');

// Capturando o número de pessoas na mesa
const numeroPessoas = readline.questionInt('Digite o número de pessoas na mesa: ');
 
// Capturando o valor total da conta
const valorTotal = readline.questionFloat('Digite o valor total da conta: ');

// Capturando o método de pagamento
const metodoPagamento = readline.question('Qual é o método de pagamento (PIX, dinheiro ou cartão) ? ');

//Façã sua lógica para aplicar o desconto apenas para PIX OU DINHEIRO
const comopaga = metodoPagamento.toLowerCase();
let  desconto = 0 ;

if (comopaga === "PIX" ||  "dinheiro"){ 
    desconto = valorTotal * 10 / 100 
}

else (comopaga = "cartão");{

}

let valorfinal = valorTotal  - desconto;

let valorporpessoa = valorfinal / numeroPessoas;

// Exibindo os resultados
console.log (`valor total da conta es igual a R$ ${valorfinal}`);
console.log (`valor por pessoa e de R$ ${valorporpessoa}`);
