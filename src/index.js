// Importando a biblioteca readline-sync
const readline = require('readline-sync');

// Capturando o número de pessoas na mesa
const numeroPessoas = readline.questionInt('Digite o número de pessoas na mesa: ');

// Capturando o valor total da conta
  const valorTotal = readline.questionFloat('Digite o valor total da conta: ');

// Capturando o método de pagamento
const metodoDePagamento  = readline.question('Qual é o método de pagamento (PIX, dinheiro ou cartão)? ');


//Faça sua lógica para aplicar o desconto apenas para PIX OU DINHEIRO

if (metodoDePagamento === 'PIX' || metodoDePagamento === 'dinheiro') {
  let valorComDesconto = valorTotal - (valorTotal * 0.10);
  
    console.log(valorTotal, metodoDePagamento, numeroPessoas);
  console.log('O valor da conta com desconto  é: R$:', valorComDesconto.toFixed(2), 'e o valor por pessoa é R$:', (valorComDesconto / numeroPessoas).toFixed(2));
}
else {
  let valorComDesconto = valorTotal;
  console.log(valorTotal, metodoDePagamento, numeroPessoas);
  console.log('Como método é catão,  o valor da conta é: R$:', valorTotal.toFixed(2), 'e o valor por pessoa é R$:', (valorTotal / numeroPessoas).toFixed(2));
}



