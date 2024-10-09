// Importando a biblioteca readline-sync
const readline = require('readline-sync');

// Capturando o número de pessoas na mesa
const numeroPessoas = readline.questionInt('Digite o numero de pessoas na mesa: ');

// Capturando o valor total da conta
const valorTotal = readline.questionFloat('Digite o valor total da conta: ');

// Capturando o método de pagamento
const metodoPagamento = readline.question('Qual e o metodo de pagamento (1)PIX, (2)dinheiro ou (3)cartao? ');

//logica p aplicar o desconto
const divisao2 = valorTotal / numeroPessoas; 


//Faça sua lógica para aplicar o desconto apenas para PIX OU DINHEIRO, SEM DESCONTO e MOSTRANDO CONSOLE
switch (metodoPagamento) {
 case "1":
    desconto3 = valorTotal * 0.9;
    divisaoV = desconto3 / numeroPessoas;
    console.log(`O valor com desconto é de: R$${desconto3.toFixed(2)} cada pessoa deve pagar R$${divisaoV.toFixed(2)}`);
    break;

case "2":
    desconto3 = valorTotal * 0.9;
    divisaoV = desconto3/ numeroPessoas;
    console.log(`O valor com desconto é de: R$${desconto3.toFixed(2)} cada pessoa deve pagar R$${divisaoV.toFixed(2)}`);
    break;

case "3":
    console.log(`Metodo de pagamento sem desconto, valor total de: R$${valorTotal.toFixed(2)} cada um deve pagar R$${divisao2.toFixed(2)}`);
    break;

default:
    console.log('Metodo de pagamento inválido, tente novamente');

}






