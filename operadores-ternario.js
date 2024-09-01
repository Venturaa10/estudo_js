const valor = 50;
const texto = valor < 50 ? 'valor insuficiente' : 'valor suficiente'; // Caso True / Caso False
console.log(texto); // retorna 'valor suficiente'


// a condição, seguida do sinal ?
// o código a ser executado se a condição for true, seguida de :
// o código a ser executado se a condição for false.

// Código antes
let matriculaAtiva = true;

function verificaMatriculaAtiva() {
 if (matriculaAtiva === true) {
   return 'matrícula ativa no sistema';
 } else {
   return 'matrícula não está ativa';
 }
}

console.log(verificaMatriculaAtiva());
// retorna 'matrícula ativa no sistema'

// Código apos o ternario
let matriculaAtiva2 = false;

function verificaMatriculaAtiva2() {
    return matriculaAtiva2 ? 'matrícula ativa no sistema' : 'matrícula não está ativa'
}
console.log(verificaMatriculaAtiva2());
// retorna 'matricula não está ativa'

let idadeEstudante = 16;
const precisaDeAutorizacao = idadeEstudante < 18 ? true : false;
console.log(precisaDeAutorizacao); // true
