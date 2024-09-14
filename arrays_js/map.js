const notas = [10, 9.5, 8, 7, 6];

// map -> Metodo "callback"
// const notasAtualizadas = notas.map(function (nota) { 
//     // É necessario utilizar o "return", para retornar o valor
//     return nota + 1;
// })


// Utilizando arrow function
// arrow function é comum ser utilizada quando se trabalha com "callback"
const notasAtualizadas = notas.map(nota => nota + 1 >= 10 ? 10 : nota + 1);
// if nota + 1 maior que 10? Sim -> nota = 10, pois a nota max. é 10
// Se não, retornar nota + 1, pois a nota vai continuar sendo menor ou igual a 10
console.log(notasAtualizadas);

// EXERCICIO

const arrayNums = [1, 2, 3, 4];

const multiplicar = arrayNums.map(function (numero) {
    return numero * 10;
})

console.log(multiplicar);