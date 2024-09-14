const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const medias = [7, 4.5, 8, 7.5];

// filter -> É um metodo "callback"
// É uma boa pratica utilizar o "_" underline para representar parametros que não estão sendo utilizados
const reprovados = alunos.filter((_, indice) => { // O segundo parametro referencia o indice do "aluno" na lista "alunos"
    return medias[indice] < 7; // Se a media do aluno for menor que 7, retorna o nome do "aluno" da lista "alunos"
});

console.log(reprovados);

// TESTE
const notas = [10, 5, 7, 4, 8, 3];

// Se filter(true), o elemento é adicionado no novo array (aprovados), se retornar false, o elemento é descartado
const aprovados = notas.filter((nota) => nota >= 7);
console.log(aprovados);