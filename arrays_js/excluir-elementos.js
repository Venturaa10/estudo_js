const notas = [10, 6, 8 , 5.5, 10];

notas.pop() // Remove o ultimo elemento da lista
console.log(notas)

const arrayVazio = [];
const arrayNaoVazio = [1, 2, 3];

console.log(Boolean(arrayVazio)); // Saída: true - Mesmo sendo um array vazio, é "truthy"
console.log(Boolean(arrayNaoVazio)); // Saída: true - Um array com elementos também é "truthy"