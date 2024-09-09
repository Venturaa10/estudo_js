const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];
console.log(lista);

// Template String
console.log(
    `
A aluna da posição 1 da lista é: ${lista[0][1]}. 
a nota dessa aluna é ${lista[1][1]}
    `
);
// lista[0][1], [0] -> Acessando o primeiro elemento dentro da lista, que é a lista alunos, [1] -> Acessando o elemento da lista alunos através do indice, ou seja, 'Juliana'

const nomes = ["Ana", "Juliana", "Leonardo"];
const idades = [30, 35, 28];
const faculdade = [false, true, true];
 
const funcionarios = [nomes, idades, faculdade];

console.log(
    `
    Aluno(a): ${funcionarios[0][0]} | Idade: ${funcionarios[1][0]} | Faculdade: ${funcionarios[2][0] == true ? 'Matriculado na Faculdade': 'Não está Matriculado' }\n
    Aluno(a): ${funcionarios[0][1]} | Idade: ${funcionarios[1][1]} | Faculdade: ${funcionarios[2][1] == true ? 'Matriculado na Faculdade': 'Não está Matriculado'}\n
    Aluno(a): ${funcionarios[0][2]} | Idade: ${funcionarios[1][2]} | Faculdade: ${funcionarios[2][2] == true ? 'Matriculado na Faculdade': 'Não está Matriculado'}
    `);