// importando a biblioteca 
const readline = require('readline-sync');


function calcularMesa() {


let continuar = true;

while (continuar) {

    console.clear()
    console.log('================= Calcular Conta =================');

    // número de pessoas na mesa
    const numeroPessoas = readline.questionInt('Digite o numero de pessoas na mesa: ');

    //  valor total da conta
    const valorTotal = readline.questionFloat('Digite o valor total da conta: ');

    // método de pagamento
    console.log('Escolha o metodo de pagamento:');
    console.log('1 - PIX');
    console.log('2 - Dinheiro');
    console.log('3 - Cartão');

    // método de pagamento
    const metodoPagamento = readline.questionInt('Digite o numero correspondente ao metodo de pagamento: ');

    // variável de desconto (precisa receber um valor, então recebeu o valor total)
    let valorComDesconto = valorTotal


    switch (metodoPagamento) {
        case 1: // PIX
            valorComDesconto = valorTotal * 0.9;
            console.log('-------------------------------------------------------')
            console.log('Desconto de 10% aplicado para pagamento via PIX!');
            break;
        case 2: // Dinheiro
            valorComDesconto = valorTotal * 0.9;
            console.log('-------------------------------------------------------')
            console.log('Desconto de 10% aplicado para pagamento em dinheiro!');
            break;
        case 3: // Cartão
            console.loo('-------------------------------------------------------')
            console.log('Nenhum desconto aplicado para pagamento com cartão.');
            break;
        default:
            console.log('-------------------------------------------------------')
            console.log('Metodo de pagamento inválido. Nenhum desconto será aplicado.');
    }


    const valorPorPessoa = valorComDesconto / numeroPessoas;
    console.log('-------------------------------------------------------')
    console.log(`O valor total: ${valorTotal.toFixed(2)}`)
    console.log('-------------------------------------------------------')
    console.log(`Valor com desconto aplicado: ${valorPorPessoa.toFixed(2)}`)
    console.log('-------------------------------------------------------')
    console.log(`O valor total a ser pago por cada pessoa é: R$ ${valorPorPessoa.toFixed(2)}`);

    // variável para decidir o loop
    const resposta = readline.question('Deseja registrar outra mesa? (s/n): ').toLowerCase();

    if (resposta === 's') {
        continuar = true;
    }

    else  {
        continuar = false     
        console.log('Encerrando o registro de mesas.');
    }
    


}
}

calcularMesa();

module.exports = calcularMesa;