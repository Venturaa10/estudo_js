const estudante = { 
    // Estrutura de um objeto, composto de conjuntos de chave e valor
    nome: 'João Victor',
    idade: 21,
    cpf: '21211212211',
    turma: 'JavaScript'
}

function exibeInfoEstudantes(objEstudante, infoEstudante) {
    // Notação de colchete
    return objEstudante[infoEstudante]; // Primeiro parametro: O Objeto, Segundo parametro: A chave do objeto
} 

console.log(estudante[0])
console.log(estudante['pet']); // Saída: undefined, chave inexistente


console.log(estudante['nome']);
console.log(estudante['cpf']);
console.log(exibeInfoEstudantes(estudante, 'nome'));
console.log(exibeInfoEstudantes(estudante, 'cpf'));