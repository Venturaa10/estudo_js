// Arrow function
// Tambem não é possivel chamar a função antes de sua declaração, igual a expressão de função
const estudanteReprovou = (notaFinal, faltas) => {
    if (notaFinal < 7 && faltas > 4) {
        return true;
    } else {
    return false; 
    }
}

const exibeNome = (nome) => nome; // O "return" está oculto aqui

console.log(exibeNome('João Victor'));
console.log(estudanteReprovou(6,5));
console.log(estudanteReprovou(8,2));