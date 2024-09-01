// Crie uma função que receba o nome de uma pessoa como argumento e retorne uma saudação personalizada. Em seguida, chame a função e exiba a saudação no console.
function saudacao(nome) {
    console.log(`Olá, ${nome}`);
}
saudacao('João');
saudacao('Vinicius');

// Crie uma função que receba a idade de uma pessoa e retorne se ela é maior de idade (idade >= 18). Imprima o resultado no console.
function maioridade(nome, idade) {
    if (idade >= 18) {
        console.log(`O(a) ${nome} tem ${idade} anos, então é maior de idade`);
    } else {
        console.log(`O(a) ${nome} tem ${idade} anos, então é menor de idade`);
    }
}
maioridade('João Victor',19);
maioridade('Vinicius', 16);
maioridade('Julia', 18);

// Crie uma função que receba uma string e verifique se é um palíndromo (uma palavra que é lida da mesma forma de trás para frente) utilizando o método de string reverse(). Retorne true se for um palíndromo e false caso contrário. Imprima o resultado no console.

function palindromo(palavra) {
    const palavraInvertida = palavra.split('').reverse().join('');
    
    if (palavraInvertida === palavra) {
        return true;
    } else {
        return false;
    }
}

console.log(palindromo('arara')); // Resultado: true


// Crie uma função que receba três números como parâmetros e determine qual é o maior entre eles. Utilize estruturas condicionais (if, else) para comparar os valores e determinar o maior. Imprima o maior valor no console.
function qualOMaior(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        console.log(`O primeiro número ${num1} é o maior entre ${num2} e ${num3}!`);
    } else if (num2 > num1 && num2 > num3) {
        console.log(`O segundo número ${num2} é o maior entre ${num1} e ${num3}!`);
    } else if (num3 > num1 && num3 > num2) {
        console.log(`O terceiro número ${num3} é o maior entre ${num1} e ${num2}!`);
    } else {
        console.log(`Os números ${num1}, ${num2} e ${num3}, possuem o mesmo valor!`);

    }
}
qualOMaior(20,15,10);
qualOMaior(15,20,10);
qualOMaior(10,15,20);
qualOMaior(10,10,10);

// Crie uma arrow function chamada calculaPotencia que receba dois parâmetros: a base e o expoente. A função deve calcular a potência da base elevada ao expoente e retornar o resultado.
// "**" É o operador de exponenciação
const calculaPotencia = (base,expoente) => base**expoente;

console.log(calculaPotencia(10,2)); // Número 10, elevado ao expoente 2