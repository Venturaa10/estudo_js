const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(listaDeNotas) {
    // reduce -> É uma função "callback"
    // const somaDasNotas = listaDeNotas.reduce((acumulador, nota) => {
    //     return acumulador + nota;
    // }, 0);

    // parametro "acumulador" -> Um valor que acumula o resultado das operações
    // parametro "nota" -> O elemento atual do array que está sendo processado, nesse caso é o valor da lista "listaDeNotas"
    // Soma o valor atual (nota) ao "acumulador"
    // O valor inicial é 0, ou seja, o valor inicial do "acumulador"
    const somaDasNotas = listaDeNotas.reduce((acumulador, nota) => acumulador + nota, 0);
    const media = somaDasNotas / listaDeNotas.length;
    return media;
}

// O reduce percorre o array "listaDeNotas", somando cada nota ao acumulador
// Saída: a soma total das notas 
console.log(calculaMedia(salaJS));
console.log(calculaMedia(salaJava));
console.log(calculaMedia(salaPython));

// TESTE
const numeros = [43, 50, 65, 12]
 
const soma = numeros.reduce((acum, atual) => atual + acum, 0)
 
console.log(soma) 