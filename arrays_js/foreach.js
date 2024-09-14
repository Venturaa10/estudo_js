const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

// forEach -> É um função chamado de "callback", e não retorna nenhum tipo de dado
// É uma função que chama outra função dentro dela
notas.forEach(function (nota) {
    somaDasNotas += nota;
});

// notas.forEach(somaNotas);

// function somaNotas(nota) {
//     somaDasNotas += nota
// }

const media = somaDasNotas / notas.length;
console.log(`A média das notas é: ${media}`);

// TESTE
const lista = [1, 2, 3, 4, 5];
let soma = 0;
 
lista.forEach(numero => soma += numero);
console.log(soma) 