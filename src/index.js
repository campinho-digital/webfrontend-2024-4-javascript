// Importando a biblioteca readline-sync
const readline = require("readline-sync");

// Capturando o número de pessoas na mesa
//const numeroPessoas = readline.questionInt('Digite o número de pessoas na mesa: ');
//console.log(numerodepessoas)
// Capturando o valor total da conta
//const valorTotal = readline.questionFloat('Digite o valor total da conta: ');
//console.log(valorTotal)
// Capturando o método de pagamento
//const metodoPagamento = readline.question('Qual é o método de pagamento (PIX, dinheiro ou cartão)? ');
//console.log(formadepagamento)

//Façã sua lógica para aplicar o desconto apenas para PIX OU DINHEIRO

// Exibindo os resultados
// primeiro criei as const que iria ultilizar para rodar o programa.

// const opçao, ultilizei para dar opcoes de escolha para o garçom, e switch para assim que o garçom der um comando o progama rodar de acordoco.

let continuar = true;
while (continuar) {
  const mesa = readline.questionInt("digite o numero da mesa: ");
  const pessoas = readline.questionInt(
    "digite o numero de pessoas pagante na mesa: "
  );
  const valortotal = readline.questionInt("digite o valor total da conta: ");
  const opcao = readline.questionInt(
    "escolha a forma de pagamento:(1: Pix - 2: Dinheiro - 3: Cartao): "
  );
  const desconto = valortotal * 0.1;
  const precocomdesconto = valortotal - desconto;
  const divisaoporpessoas = precocomdesconto / pessoas;
  const divisaosemdesconto = valortotal / pessoas;

  switch (opcao) {
    // case 1 e para pagamento em pix onde acontecera o desconto de 10% em cima do valor total da conta.
    case 1:
      console.log(`voce escolheu Pix como pagamento.`);
      const desconto = valortotal * 0.1;
      const precocomdesconto = valortotal - desconto;
      console.log(
        `total da conta De: ${valortotal}. Com o Desconto de 10%, o total a pagar é De: ${precocomdesconto}. `
      );
      console.log(`valor a pagar por pessoa é De: ${divisaoporpessoas}.`);
      break;
    // case 2 e para pagamento em dinheiro onde acontecera o desconto de 10% em cima do valor total da conta.
    case 2:
      console.log("Voce escolheu Dinheiro como pargamento.");
      const desconto2 = valortotal * 0.1;
      const precocomdesconto2 = valortotal - desconto2;
      console.log(
        `Total da conta De: ${valortotal}. Com o Desconto de 10%, o total a pagar é De: ${precocomdesconto2}. `
      );
      console.log(`valor a pagar por pessoa é De: ${divisaoporpessoas}.`);
      break;

    // case 3 e para o pagamento em cartao onde nao avera desconto de 10%.
    case 3:
      console.log(`Valor total a pagar é ${valortotal}`);
      console.log(`valor a pagar por pessoa é De: ${divisaosemdesconto}.`);
      break;
    // usei o default para caso o garçom coloque uma opçao invalida.
    default:
      console.log("opçao invalida");
      break;
  }
  // const para realizar o loop.
  const fechamento = readline
    .question(`deseja realizar um novo fechamento de mesa? (s/n);`)
    .toLowerCase();

  if (fechamento != "s") {
    continuar = false;
  }
}
