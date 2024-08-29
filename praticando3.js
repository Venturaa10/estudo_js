// 1. Exercício: Exibir Mensagem
// Crie uma variável chamada mensagem e atribua a ela o valor "Olá, Mundo!". Em seguida, exiba o valor da variável no console.
let msgInicial = 'Praticando JavaScript';
console.log(msgInicial);

// 2. Exercício: Operações Matemáticas
// Crie duas variáveis, a, b e c, e atribua a elas valores numéricos. Calcule e exiba a soma, subtração, multiplicação e divisão desses valores no console.
let msgCalcula = 'Fazendo calculos entre valores numericos'
let number1 = 10;
let number2 = 42;
let number3 = 129;

let soma = number1 + number2 + number3;
let subtracao = number1 - number2 - number3;
let multiplicacao = number1 * number2 * number3;
let divisao = number1 / number2 / number3;

console.log(`Resultado das operações entre os valores ${number1}, ${number2}, ${number3}:\nSoma: ${soma}\nSubtração: ${subtracao}\nMultiplicação: ${multiplicacao}\nDivisão: ${divisao.toFixed(2)}`);

// 3. Exercício: Verificar Paridade
// Crie uma variável chamada numero e atribua a ela um valor numérico. Verifique se o número é par ou ímpar e exiba a mensagem correspondente no console.
let numeroVerificar = 75;

if (numeroVerificar %2 === 0 ) { // É boa pratica utilizar "===" para comparar em JavaScript
    console.log(`O número ${numeroVerificar} é par`);
} else {
    console.log(`O número ${numeroVerificar} é impar`);
}

// 4. Exercício: Concatenar Strings
// Crie duas variáveis de string, primeiraParte e segundaParte, e combine-as em uma nova variável chamada mensagemCompleta. Exiba o resultado no console.
let primeiraParte = 'O Flamengo é o Maior da America';
let segundaParte = ' e o Barcelona Maior da Europa';
let mensagemCompleta = primeiraParte + segundaParte;
console.log(mensagemCompleta);

// 5. Exercício: Comparar Números
// Crie duas variáveis numéricas, x e y. Verifique se x é maior, menor ou igual a y e exiba a comparação no console.
let x = 50;
let y = 50;

if (x > y) {
    console.log(`O valor de X ${x} é maior que Y ${y}`);
}
else if (x < y) {
    console.log(`O valor de X ${x} é menor que Y ${y}`);
} else {
    console.log(`O valor de X ${x} é igual ao de Y ${y}`);
}

// 6. Exercício: Usar if-else
// Crie uma variável idade e atribua um valor a ela. Use uma estrutura if-else para verificar se a pessoa é maior de idade (18 anos ou mais) e exiba a mensagem correspondente no console.
let idade = 18;

if (idade < 18) {
    console.log(`O usuario tem ${idade} anos, então é menor de idade!`);
} else if (idade >= 18) {
    console.log(`O usuario tem ${idade} anos, então é maior de idade!`);
}
// 7. Exercício: Contar Caracteres
// Crie uma variável chamada texto e atribua a ela uma string. Use a propriedade length para contar o número de caracteres da string e exiba o resultado no console.
let texto = 'Flamengo o maior clube do mundo';
console.log(texto.length);

// 8. Exercício: Manipular Arrays
// Crie um array com três números. Adicione um novo número ao final do array e remova o primeiro número. Exiba o array resultante no console.
let lista = [10,30,50];
console.log(`Lista original: ${lista}`);
lista.push(70); // metodo push adiciona um novo elemento a lista 
console.log(`Lista após inserir mais um número: ${lista}`);
lista.shift(); // metodo shift que remove o primeiro elemento da lista
console.log(`Lista após remover o primeiro elemento: ${lista}`);

// 9. Exercício: Usar for Loop
// Crie um loop for que percorra os números de 1 a 10 e exiba cada número no console.
for (let i = 1; i <= 10; i++) {
    console.log(i);
} 

// 10. Exercício: Função para Calcular Área
// Crie uma função chamada calcularArea que recebe dois parâmetros, largura e altura, e retorna a área de um retângulo. Teste a função com diferentes valores e exiba o resultado no console.

function calcular(largura, altura) {
    let areaRetangulo = largura * altura;
    console.log(`A área do retângulo é: ${areaRetangulo.toFixed(2)}`);
}

calcular(10.5,8.77);