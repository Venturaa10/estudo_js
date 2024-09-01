// Não é possivel acessar antes de inicializar a variavel, código não executado
console.log(estudanteReprovou(6,5));
console.log(estudanteReprovou(8,2));

// Expressão de Função
const estudanteReprovou = function (notaFinal, faltas) {
    if (notaFinal < 7 && faltas > 4) {
        return true;
    } else {
    return false; 
    }
}

console.log(estudanteReprovou(6,5));
console.log(estudanteReprovou(8,2));