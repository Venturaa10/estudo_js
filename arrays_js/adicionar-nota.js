// Mesmo sendo uma const, quando se trabalha com array, é permitido a manipulação de dados do array
const notas = [10, 6, 8];
notas.push(7); // Metodo para adicionar um elemento ao final da lista 

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
console.log(notas);
console.log(media);

const arrayVazia = [,,,];
console.log(arrayVazia.length)
arrayVazia.push(50)
console.log(arrayVazia)
console.log(arrayVazia.length)