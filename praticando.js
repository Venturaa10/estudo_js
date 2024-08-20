// Declare três variáveis diferentes (uma para cada tipo: string, número e booleano) e atribua valores a elas. Em seguida, exiba o tipo de cada variável no console.
console.log('\nExercicio 1');
let nome1 = 'João Victor';
let numero = 10;
let bool = true;

// Função utilizada para saber o tipo da variavel -> "typeof"
console.log(`Tipo da variavel "nome": ${typeof nome1}\nTipo da variavel "numero": ${typeof numero}\nTipo da variavel "bool": ${typeof bool}`);

// Crie duas variáveis, uma contendo seu primeiro nome e outra contendo seu último nome. Em seguida, combine-as em uma terceira variável usando o operador + e em uma quarta variável usando template strings. Por fim, imprima os resultados obtidos no console.
console.log('\nExercicio 2');
let nome2 = 'João Victor';
let sobrenome = 'Ventura Oliveira';
let nome_completo = nome2 + sobrenome;
// Template strings são utilizadas crases ao inves de aspas simples ou duplas
let texto = `Meu primeiro nome: ${nome2} e meu segundo nome: ${sobrenome}`;
console.log(nome2);
console.log(sobrenome);
console.log(nome_completo);
console.log(texto);

// Declare duas variáveis, uma contendo um número e outra contendo uma string. Em seguida, combine-as em uma terceira variável usando template strings para montar uma frase e exiba o resultado no console.
console.log('\nExercicio 3');
let frase = 'Estou estudando JavaScript com Node.js';
let numero2 = 10;
console.log(`Juntando a frase: ${frase} com o número ${numero2}`);

// Crie uma variável inicializada com um valor de qualquer tipo e, em seguida, reatribua um novo valor a essa variável. Imprima ambos os valores no console após atribuí-los.
console.log('\nExercicio 4');
var valor = 'Estou Estudando Python';
console.log(`Primeira valor da variavel: ${valor} `);

var valor = 'Estou Estudando JavaScript';
console.log(`Segundo valor da variavel: ${valor} `);

// Declare uma variável usando var fora de um bloco de código (por exemplo, if) e outra dentro desse bloco. Tente acessar essas variáveis dentro do bloc e fora dele utilizando console.log e analise os resultados. Faça o mesmo processo utilizando let e compare com os resultados anteriores.
console.log('\nExercicio 5');

console.log('TESTE USANDO var')
console.log('Fora do bloco');
var time = 'Flamengo';
console.log(time);

if (10 > 7) {
    console.log('Dentro do bloco');
    var time = 'Messi best ever';
    console.log(time);
}


// Com o var, o codigo é executado normalmente, pois o var permite que uma mesma variavel receba valores diferentes, não importando se está dentro ou fora de um bloco de codigo!

// TESTE COM let AQUI
// console.log('TESTE USANDO let');
// console.log('Fora do bloco');
// let time = 'Flamengo';
// console.log(time);

// if (10 > 7) {
//     console.log('Dentro do bloco');
//     let time = 'Messi best ever';
//     console.log(time);
// }
// Com o let, retornou um erro, pois o let não permite que uma mesma variavel receba valores diferentes!


// Declare uma variável booleana que informa se está chovendo e utilize-a em uma estrutura condicional (if) para exibir uma mensagem informando se é preciso levar um guarda-chuva ou não dependendo do valor da variável.

console.log('\nExercicio 6');

let estaChovendo = true;

if (estaChovendo) {
    console.log('Está chovendo, é recomendado levar um guarda-chuva!')
} else {
    console.log('Não está chovendo, não é necessario levar um guarda-chuva!')
}