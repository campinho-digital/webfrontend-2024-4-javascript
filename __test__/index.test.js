const calcularMesa = require('../src/index');
const readline = require('readline-sync');

    // criando função simulada para receber o input da função calcularMesa, onde foi usado o método readline-sync
  jest.mock('readline-sync', () => ({
    questionInt: jest.fn(),
    questionFloat: jest.fn(),
    question: jest.fn(),
  }));


test ('Simula cálculo do cadastro', () => {
    // passa o valor 2 para primeira vez que for chamado o Int
     readline.questionInt.mockReturnValueOnce(1);
    // informa um valor total  float pra primeira vez que chamar float
     readline.questionFloat.mockReturnValueOnce(400);
    // Outro valor int definido, chamando o PIX
     readline.questionInt.mockReturnValue(1);
    // segundo valor float informando valor total 500 
     readline.questionFloat.mockReturnValue(500);
    // simula a resposta não para q question de texto pra primeira vez que chamar a função de string
     readline.question.mockReturnValueOnce('n');

     // chama  a função para atribuir os valores nela
     calcularMesa();
    // confirma que o int foi chamado
     expect(readline.questionInt).toHaveBeenCalledTimes(2);
    // informa que o primeiro valor float foi chamado

    //
    expect(readline.questionFloat).toBe(500);


     expect(readline.questionFloat).toHaveBeenCalledTimes(1);
    // retorna o valor de variavel que foi atribuido a essa chamada
     expect(readline.question).toHaveBeenCalledWith('Deseja registrar outra mesa? (s/n): ')

    
})

      





