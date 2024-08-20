// É aceito como valor numerico, numeros inteiros e numeros com ponto flutuante em JS
const notaPrimeiroBi = 8;
const notaSegundoBi = 6.3;
const notaTerceiroBi = -5;
// O operador + além de realizar a soma de variavel tipo number, tambem é usado para juntar textos (strings) 
const notaQuartoBi = Number.parseInt('7'); // Convertendo uma string para o tipo Number

const total = (notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi) / 4;

// Utilizando a função .toFixed(Qtd) para determinar o número de casas decimais
console.log(`Média: ${total.toFixed(2)}`);

// Juntando strings com o operador +
const nome = 'Lionel Messi';
console.log('O melhor jogador de todos os tempos é: '+ nome);