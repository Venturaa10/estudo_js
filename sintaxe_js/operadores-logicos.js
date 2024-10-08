const notaFinal = 6;
const faltas = 2;
const advertencias = 0;


// "and" em js é representada por "&&"
// "or" em js é representada por dois "||"
if (notaFinal < 7 || faltas > 4) {
    console.log('Reprovado, boas festas');
} else {
    console.log('Não foi reprovado por falta');
}

if (faltas <= 2 && !advertencias) { // O "0" é um valor falso, logo se a variavel advertencia = 0, advertencia é true
    console.log('Recebeu bônus');
} else {
    console.log('Não recebeu bônus');
}
// Operador NOT
// O operador ! (NÃO lógico ou negação) inverte o valor do operando. Se o operando for true, ! retorna false. Se o operando for false, ! retorna true.
const chuva = false;

if (!chuva) {
    console.log("Não está chovendo. Pode sair de casa.");
} else {
    console.log("Está chovendo. Melhor ficar em casa.");
}