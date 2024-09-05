const notaPrimeiroBi = 8;
const notaSegundoBi = 6.3;
const notaTerceiroBi = 7;
// O operador + além de realizar a soma de variavel tipo number, tambem é usado para juntar textos (strings) 
const notaQuartoBi = Number.parseInt('9.4'); // Convertendo uma string para o tipo Number

let media = (notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi) / 4;

if (media >= 7){
    media += media * 0.1;
}

// Utilizando a função .toFixed(Qtd) para determinar o número de casas decimais
console.log(`Média: ${media.toFixed(2)}`);

