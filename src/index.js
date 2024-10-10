// Importando a biblioteca readline-sync
const readline = require('readline-sync');

// Capturando o número de pessoas na mesa
const numeroPessoas = readline.questionInt('Digite o numero de pessoas na mesa: ');

// Capturando o valor total da conta
const valorTotal = readline.questionFloat('Digite o valor total da conta: ');

// Capturando o método de pagamento
const metodoPagamento = readline.question('Qual e o metodo de pagamento (PIX, dinheiro ou cartao)? ');


//Façã sua lógica para aplicar o desconto apenas para PIX OU DINHEIRO


// Exibindo os resultados


let valorComDesconto = valorTotal;

 if (metodoPagamento.toLowerCase() == "pix" || metodoPagamento.toLowerCase() == "dinheiro") {
 valorComDesconto = valorTotal * 0.9;
}

const valorPorPessoa = valorComDesconto / numeroPessoas;

console.log('\n--- Resumo ---');
console.log(`Número de pessoas: ${numeroPessoas}`);
console.log(`Método de pagamento: ${metodoPagamento}`);
console.log(`Valor total: R$ ${valorTotal.toFixed(2)}`);
console.log(`Valor total com desconto: R$ ${valorComDesconto.toFixed(2)}`);
console.log(`Valor por pessoa: R$ ${valorPorPessoa.toFixed(2)}`);
