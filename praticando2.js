// Crie uma variável contendo uma frase. Em seguida, exiba no console o comprimento da frase e a mesma frase com letras maiúsculas.
const frase = 'O Flamengo e o Barcelona são gigantes';
console.log(frase.length); // Exibe o comprimento da frase
console.log(frase.toUpperCase());

// Declare duas variáveis, uma inicializada com valor null e outra que não recebe atribuição (resultando em undefined). Exiba os valores no console.
let teste1 = null;
let teste2;
// const teste2; // Vai dar error, pois não é possivel declarar uma const sem inicializar com um valor
console.log(teste1);
console.log(teste2);

// Crie 3 variáveis de tipos diferentes, utilize template strings para combinar os diferentes tipos de dados (number, string, boolean) em uma única string e exiba o resultado no console.
let primeiraVar = 10;
let segundaVar = '35';
let terceiraVar = true;

console.log(`Tipos das Variaveis\nPrimeira variavel é: ${typeof primeiraVar}\nSegunda variavel é: ${typeof segundaVar}\nTerceira variavel é: ${typeof terceiraVar}`);

// Crie uma variável numérica e uma string. Faça a conversão da variável numérica para string e da string para número. Exiba os tipos de dados resultantes no console.
let textoConvervet = 123;
let numConvert = '567';
console.log('Antes da Conversão')
console.log(typeof(textoConvervet));
console.log(typeof(numConvert));

console.log('Depois da conversão')
console.log(typeof(String(textoConvervet)));
console.log(typeof(parseInt(numConvert)));


// Crie uma variável com uma string e utilize métodos de manipulação de strings, como toUpperCase, toLowerCase, slice ou outros, para modificar a string original. Exiba os resultados finais no console.
let manipulandoString = '   Olá, hoje está sol e muito quente'
console.log(`String Original: ${manipulandoString}\n`)
console.log(`Utilizando toUpperCase: ${manipulandoString.toUpperCase()}`)
console.log(`includes: ${manipulandoString.includes('sol')}`) // true
console.log(`includes: ${manipulandoString.includes('Sol')}`) // false
console.log(`slice: ${manipulandoString.slice(8)}`);
console.log(`slice dois argumentos: ${manipulandoString.slice(8,15)}`);
console.log(`replace: ${manipulandoString.replace('quente','frio')}`);
console.log(`trim: ${manipulandoString.trim()}`);



