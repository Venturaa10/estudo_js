// 1 - Faça uma função que aceite vários arrays como argumentos e retorne um único array contendo todos os elementos dos  arrays fornecidos, utilizando Spread Operator.
// Dica: é possível usar o spread operator diretamente em um parâmetro de função para "espalhar" seu conteúdo, por exemplo function funcaoExemplo(...params).
const cores1= ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho'];
const cores2 = ['Laranja', 'Verde', 'Roxo', 'Azul'];
function funcaoExemplo(...lista) {
    const combinado = [].concat(...lista); // Utilizando o Spread Operator 
    console.log(combinado);
}
funcaoExemplo(cores1, cores2);
// 2 - Crie um array de números chamado valores. Depois,escreva um programa que some todos os elementos deste array utilizando o método reduce.
const valores = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const soma = valores.reduce((acumulator, valor) => acumulator + valor, 0);
console.log(soma);


// 3 - Considere duas listas de cores:
const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho']
const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul']
// Crie um programa que una essas duas listas, removendo cores duplicadas e exiba a lista final.
const todasAsCores = coresLista1.concat(coresLista2);
const removeDuplicadas = [new Set(todasAsCores)];
console.log(removeDuplicadas);

// 4 - Escreva uma função que receba um array de números e retorne um array contendo apenas os números pares.
const numerosTotal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function numerosPares(lista) {
    let pares = lista.filter(numero => numero %2 === 0);
    console.log(pares);
}

numerosPares(numerosTotal);

// 5 - Crie uma função que filtre os números de um array que são múltiplos de 3 e maiores que 5.
let numeros5 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

function filtraNumeros(lista) {
    let armazena = lista.filter(numero => numero %3 === 0 && numero > 5);
    console.log(armazena);
}
filtraNumeros(numeros5);

// 6 - Crie uma função que receba um array de números e retorne a soma de todos os elementos.
const valores2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

function somaTudo(lista) {
    const calcula = lista.reduce((acumulator, valor) => acumulator + valor, 0);
    console.log(calcula);
}
somaTudo(valores2);