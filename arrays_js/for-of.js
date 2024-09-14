const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for (let nota of notas) {
    somaDasNotas += nota;
}

const media = somaDasNotas / notas.length;

console.log(`A média das notas é: ${media}`)

// TESTE EXERCICIO

const numeros = [5, 8, 6, 10, 7];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}

const media2 = soma / numeros.length;

console.log("A média dos números é:", media);