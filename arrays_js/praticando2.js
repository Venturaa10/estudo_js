// 1 - Crie uma função que receba dois arrays e os concatene em um único array.
const nomes = ['João', 'Vinicius', 'Bruno', 'Larissa', 'Gabriela'];
const notas = [10.32, 43.54, 65.12, 78.41, 89.42];

function concatenaListas (lista1, lista2) {
    const concatena = lista1.concat(lista2);
    console.log(`Lista Concatenada: ${concatena}`);
}
concatenaListas(nomes, notas);


// 2 - Crie um array chamado numeros contendo números de 1 a 10. Utilize o método slice para criar um novo array chamado parteNumeros que contenha apenas os números de índice 3 a 7 de numeros.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const parteNumeros = numeros.slice(2,7);

console.log(`Lista Original: ${numeros}`);
console.log(`Nova lista com slice: ${parteNumeros}`);

// 3 - Dado o array frutas contendo frutas que desejamos comprar na feira:
const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi'];
console.log(`Frutas antigas: ${frutas}`);
// Utilize o método splice para remover as frutas no índice 2 e 3 e, em seguida, adicione as frutas 'Kiwi' e 'Pêssego' nesses mesmos índices.
frutas.splice(2,2,'Kiwi', 'Pêssego');
console.log(`Frutas atualizadas: ${frutas}`);


// 4 - Crie dois arrays chamados menuPrincipal e menuDeSobremesas contendo opções do cardápio de um restaurante. Utilize o método concat para criar um novo array menuCompleto contendo todos os elementos de menuPrincipal seguidos pelos elementos de menuDeSobremesas.
const menuPrincipal = ['Frango Aparmegiana', 'Bife com batata frita', 'Lasanha', 'Arroz com ovo', 'Macarrão ao molho branco'];
const menuDeSobremesas = ['Pudim', 'Sundae', 'Torta de Chocolate', 'Pave', 'Sorvete']; 
const menuCompleto = menuPrincipal.concat(menuDeSobremesas);;

console.log(`Menu Principal: ${menuPrincipal}`);
console.log(`Menu Sobremesas: ${menuDeSobremesas}`);
console.log(`Menu Completo: ${menuCompleto}`);

// 5 - Crie uma lista bidimensional com 3 linhas e 3 colunas, onde cada elemento seja uma matriz 3x3 com valores iniciando em 1 e aumentando em 1 a cada elemento.
// Dicas:
// comece com um array vazio, por exemplo const matriz = [] e adicione valores nele com push;
// você pode resolver usando um for dentro de outro for.

// 6 - Acesse e imprima o elemento na segunda linha e terceira coluna da lista bidimensional matriz criada no exercício anterior.

// 7 - Adicione um novo elemento (por exemplo,15) na terceira linha e segunda coluna da lista bidimensional matriz criada anteriormente.

const matriz = [];
let valor = 1;

for (let linha = 0; linha < 3; linha++) {
    // Primeiro for, gera uma "linha"
    console.log(`Linha: ${linha}`);
    const novaLinha = []; // Lista que vai receber 3 valores a cada loop
    for (let coluna = 0; coluna < 3; coluna++) {
        // Segundo for, é executado 3 vezes antes de sair do bloco de execução para continuar o primeiro for
        console.log(`Valor: ${valor}`);
        novaLinha.push(valor);
        valor++;
    }
    matriz.push(novaLinha); // Adiciona três valores na lista "novaLinha" a cada execução do bloco de codigo
    console.log(`Nova Linha: ${novaLinha}`); // A cada execução, são armazenadas 3 valores dentro da lista "novaLinha"

}

console.log(matriz);
console.log(`Acessando o elemento da segunda linha e terceira coluna: ${matriz[1][2]}`);

matriz[2][1] = 15; // Atribuindo um novo valor ao indice
console.log(`Lista atualizado com o valor 15 na terceira linha e segunda coluna: ${matriz}`);
console.log(matriz);



