const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

// Enquanto a variavel i < o tamanho da lista "notas", bloco continua sendo executado, ao final do bloco acontece o incremento de i + 1
for (let i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i]; // Soma a nota da lista "notas" na variavel "somaDasNotas"
    console.log(somaDasNotas);
}

const media = somaDasNotas / notas.length;
console.log(`A media das notas é: ${media}`);


// TESTE 01
const numeros = [100, 200, 300, 400, 500, 600];
 
// Inicia com o ultimo elemento da lista, ou seja, i = 5
// Enquanto i for maior ou igual a 0, o bloco continua
// Realiza um decremento i - 1
for (let i = numeros.length - 1; i >= 0; i--) {
  console.log(numeros[i]);
}

// TESTE 02
const numerosPares = [];
// Imprimindo os números pares de 0 a 100
for (let i = 0; i <= 100; i += 2) {
  numerosPares.push(i);
}
 
console.log(numerosPares);