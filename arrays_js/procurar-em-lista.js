const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias]; // Lista de listas. [0] -> alunos | [1] -> medias
console.log(lista);


function exibeNomeENota(aluno) {
    // Verifica se aluno existe/esta incluído dentro da lista "alunos".
    if (lista[0].includes(aluno)) {
        const indice = lista[0].indexOf(aluno); // Armazena o indice desse aluno na const "indice"
        const mediaAluno = lista[1][indice]; // Localiza a media do aluno na lista "medias", atraves do valor da const "indice"    
        console.log(`Aluno(a) ${aluno} tem a média ${mediaAluno}`);     
    }
    else {
        console.log('Estudante não localizado!');
    }
}

exibeNomeENota('Juliana');
exibeNomeENota('Lucas');