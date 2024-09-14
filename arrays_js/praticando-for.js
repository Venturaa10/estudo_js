// Escreva um código que utilize o loop for/of para iterar e imprimir cada elemento de um array.
const numeros = [1,2,3,4,5,6,7,8,9,10];

for (let valor of numeros) {
    console.log(valor);
}

// Crie uma função que receba uma array e imprima no console o número do índice e o elemento.
const nomes = ['João', 'Leticia', 'Duda', 'Lucas', 'Guilherme'];
function informaIndice(lista) {
    for (let indice = 0; indice < lista.length; indice++) {
        console.log(`Indice: ${indice} | Valor: ${lista[indice]}`);
    }
}
informaIndice(nomes);

// Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.
let numerosInt = [1, 2, 3, 4, 5, -10, 200, 30, 400, 500, 60, 70, 80, 100];

function somaLista(lista) {
    let soma = 0;
    for (let i = 0; i < lista.length; i++) {
        soma += lista[i];
    }
    console.log(`A soma dos numeros da lista: ${soma}`)
}

somaLista(numerosInt);

// Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array, no seguinte formato: 'o menor número é X e o maior número é Y'.


function maiorEMenorValor (lista) {
    console.log(`O maior valor é ${Math.max(...lista)} e o menor valor é ${Math.min(...lista)}`);
}
maiorEMenorValor(numerosInt);

// Crie um programa que utilize um laço for para percorrer uma array const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14] e exibir no console apenas os números pares contidos nesse array.
const numeros2 = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];

for (let i = 0; i < numeros2.length; i++) {
    if (numeros2[i] %2 === 0) {
        let par = numeros2[i];
        console.log(`Numero Par: ${par}`);
    }
}

// Crie um programa que calcule a média dos números presentes em um array utilizando um loop for.
const numeros3 = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];
let armazenaValor = 0;

for (let i = 0; i < numeros3.length; i++) {
    armazenaValor += numeros3[i];
}
console.log(`A media da lista "numero3" é: ${armazenaValor / numeros3.length}`);