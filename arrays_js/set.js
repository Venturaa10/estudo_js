const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

// Set -> É um conjunto, que armazena valores unicos
const nomesAtualizados = new Set(nomes);

// Clonando a lista nomes e adicionando mais um elemento a lista
const listaNomesAtualizados = [...new Set(nomes)];

listaNomesAtualizados.push("Juliana");

console.log(nomesAtualizados);
console.log(listaNomesAtualizados);
