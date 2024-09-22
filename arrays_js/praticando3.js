// 1 - Utilize o método forEach para imprimir cada elemento de um array juntamente com seu índice.
const numero = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

numero.forEach((num, indice) => {
    console.log(`Número: ${num} | Indice: ${indice}`);
});

// 2 - Crie uma função chamada executaOperacaoEmArray que recebe dois parâmetros: um array e uma função de callback que executa alguma operação matemática. Essa função deve iterar por cada elemento do array e aplicar a função de callback em cada um dos elementos, imprimindo o resultado da operação no console.
function executaOperacaoEmArray(array, callback) {
    array.forEach((elemento) => {
        console.log(callback(elemento));
    });
}

executaOperacaoEmArray([1, 2, 3], (num) => num * 2);


// 3 - Você recebeu um array numeros contendo valores numéricos. Crie um programa que verifique se um número específico está presente nesse array. Se estiver, o programa deve retornar a posição (índice) desse número. Caso contrário, se o número não estiver presente, o programa deve retornar "-1".
const numero2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
numero2.includes(55)

function VerificaNumero(lista ,numero) {
    let indice = lista.indexOf(numero);

    if (indice !== -1) {
        console.log(`O número ${numero} existe dentro da lista no índice: ${indice}`);
    } else {
        console.log(`O número ${numero} não existe dentro da lista. Retorno: ${indice}`);
    }
}
VerificaNumero(numero2,55);
VerificaNumero(numero2,76);
VerificaNumero(numero2,98);
VerificaNumero(numero2,50);
VerificaNumero(numero2,90);

// 4 - Você recebeu dois arrays de nomes contendo os alunos da Turma A e da Turma B.

const nomesTurmaA = [
  'João Silva',
  'Maria Santos',
  'Pedro Almeida'
];

const nomesTurmaB = [
  'Carlos Oliveira',
  'Ana Souza',
  'Lucas Fernandes'
];
// Utilize o método concat() para unir os arrays das turmas A e B em um único array chamado todasAsTurmas. 
// Depois, utilize o método find() para buscar um aluno específico pelo nome no array todosAlunos. Exiba no console uma mensagem informando o nome do aluno procurado; caso não exista na lista, retorne uma mensagem de aviso, por exemplo Aluno não encontrado.


let todasAsTurmas = nomesTurmaA.concat(nomesTurmaB);
console.log(todasAsTurmas);

let alunoProcurado = 'Ana Souza';
// O metodo find percorre a lista concatenada, verificando cada elemento, a cada iteração, esse elemento é armazenado no parametro "nome", a variavel "alunoProcurado" contém um nome que vai ser verificado a sua existencia na lista concatenada.
let aluno = todasAsTurmas.find(nome => nome === alunoProcurado);
// Se algum elemento da lista for igual ao valor de alunoProcurado, find() retorna esse elemento e o armazena na variável aluno.
// Caso contrário, se nenhum elemento corresponder, find() retorna undefined.
console.log(aluno);
if (aluno) {
    console.log(`O aluno ${aluno} está na turma.`);
} else {
    console.log('Aluno não encontrado.');
}

// 5 - Considere um array de números inteiros.

const numerosInt = [6, 9, 12, 15, 18, 21];
// Utilize o método forEach() para multiplicar cada elemento do array por 3 e exibir no console o resultado de cada multiplicação. 
// Depois, utilize o método findIndex() para encontrar o índice do número 18 no array original.

numerosInt.forEach(num => {
    console.log(`Número ${num} X 3 = ${num * 3}`);    
});

let indice = numerosInt.findIndex(numero => numero === 18);
console.log(indice);


