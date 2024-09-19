const estudante = { 
    // Estrutura de um objeto, composto de conjuntos de chave e valor
    // Propriedade -> É um par chave-valor
    // chave: valor
    nome: 'João Victor',
    idade: 21,
    cpf: '21211212211',
    turma: 'JavaScript'
}

console.log(estudante.nome); // Acessando a chave 'nome'
console.log(`Os três primeiros digitos do CPF são ${estudante.cpf.substring(0,3)}`);

