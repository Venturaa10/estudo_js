const notas = [10, 8.5, 5, 6.5, 8, 7.5];

// Imprimindo o indice e o seu valor correspondente de cada valor da lista
// primeira expressão: executada apenas uma vez
// segunda expressão: condição de execução
// terceira expressão: executada sempre ao final do bloco de codigo
for (let indice = 0; indice < notas.length; indice++) {
    console.log(`${indice} : ${notas[indice]}`);
    
}