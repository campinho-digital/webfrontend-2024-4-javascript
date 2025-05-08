// Importando a biblioteca readline-sync
const readline = require('readline-sync');

// Capturando o número de pessoas na mesa
let numeroPessoas = readline.questionInt('Digite o numero de pessoas na mesa: ');
// Verificando se o número de pessoas é válido (maior que 0)
while (numeroPessoas <= 0) {
    console.log('Número inválido pois deve ser maior que 0  - Tente novamente.');
    numeroPessoas = readline.questionInt('Digite o numero de pessoas na mesa: ');
}

// Capturando o valor total da conta
let valorTotal = readline.questionFloat('Digite o valor total da conta: ');
// Verificando se o valor total é válido (maior que 0)
while (valorTotal <= 0) {
    console.log('Número inválido pois deve ser maior que 0  - Tente novamente.');
    valorTotal = readline.questionFloat('Digite o valor total da conta: ');
}

// Capturando o método de pagamento
let metodoPagamento = readline.questionInt('Digite o numero correspondente para o pagamento ( 1 para PIX, 2 para dinheiro ou 3 para cartao ) :');

//Faça sua lógica para aplicar o desconto apenas para PIX OU DINHEIRO

// Verificando se o método de pagamento é válido (1, 2 ou 3)
while (metodoPagamento !== 1 && metodoPagamento !== 2 && metodoPagamento !== 3) {
    console.log('Método de pagamento inválido. Tente novamente.');
    metodoPagamento = readline.questionInt('Digite o numero correspondente para o pagamento ( 1 para PIX, 2 para dinheiro ou 3 para cartao ) :');
}

// Exibindo os dados informados
console.log(`Valor total da conta: R$ ${valorTotal.toFixed(2)}`);

// Calculando o valor por pessoa e aplicando desconto se necessário
// Se o método de pagamento for PIX ou dinheiro, aplicar 10% de desconto caso contrario não aplicar desconto
let desconto;
if (metodoPagamento === 1 || metodoPagamento === 2) {
    desconto = valorTotal * 10 / 100;
    const valorComDesconto = valorTotal - desconto;
    const valorPorPessoa1 = valorComDesconto / numeroPessoas;
    console.log(`Valor do desconto: R$ ${desconto.toFixed(2)}`);
    console.log(`Valor com desconto: R$ ${valorComDesconto.toFixed(2)}`);
    console.log(`Valor por pessoa: R$ ${valorPorPessoa1.toFixed(2)}`);
}
else if (metodoPagamento === 3) {
    desconto = 0;
    const valorPorPessoa2 = valorTotal / numeroPessoas;
    console.log(`Valor por pessoa: R$ ${valorPorPessoa2.toFixed(2)}`);
}
