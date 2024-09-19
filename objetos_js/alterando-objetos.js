const estudante = { 
    // Estrutura de um objeto, composto de conjuntos de chave e valor
    nome: 'João Victor',
    idade: 21,
    cpf: '21211212211',
    turma: 'JavaScript'
}

console.log(estudante.telefone); // Saída: undefined
estudante.telefone = '55119999999'; // Adicionando uma chave e valor ao objeto
console.log(estudante.telefone); // Retorna o valor da chave 
console.log(estudante); // A chave adicionada depois ao objeto, tambem sera exibida

estudante.nome = 'Vinicius'; // Alterando o valor da chave
console.log(estudante);

const estudante2 = {}; // Criando um objeto vazio
estudante2.nome = 'Ana Maria'; // Adicionando uma chave e valor 
console.log(estudante2);



// DELETANDO UM CONJUNTO DE CHAVE E VALOR
const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
   }

console.log(objPersonagem.aliado) // Valor da cahve
delete objPersonagem.aliado // delete -> Propriedade para deletar
console.log(objPersonagem.aliado) // undefined




// TESTE
const pessoa = {
    nome: "Bruce Banner",
    dataNascimento: "25/01/1980",
    carteiraIdentidade: "997776-X",
    email: "profbanner@email.com",
    telefone: "+552877776666",
    cidade: "Cachoeiro de Itapemirim",
    estado: "ES"
 }

pessoa.seguraSocial = '854321985-9';
pessoa.cpf = '212112121221';
console.log(pessoa);

console.log(`${pessoa.cpf.substring(0,4)}`);
console.log(`${pessoa.carteiraIdentidade.substring(0,4)}`);

