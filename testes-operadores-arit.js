// Teste 1
const salarioMensal = 3500; 
const despesasFixas = 1200; 
const despesasVariaveis = 500; 
const economiasMensais = 800;
const bonusAnual = 3000;

const resultado = (salarioMensal - despesasFixas - despesasVariaveis) * 12 + (economiasMensais * 12) + bonusAnual;

console.log(`Resultado: ${resultado.toFixed(2)}`);

// Teste 2 
// Trabalhando com precedência, aplicando uma operação matematica para que seja resolvida na ordem correta, primeiro multiplicação e divisão, e em seguida, o restante
let resultado2;
resultado2 = 10 + ((5 * 2) / 3) - 7 + ((15 * 3) / 5) + 20 - (4 * 2);

console.log(`Resultado2: ${resultado2.toFixed(2)}`);

// Teste 3
// Todas as formas resultam no aumento do valor de contadorVisitas em 1 unidade!
let contadorVisitas = 0;
contadorVisitas = contadorVisitas + 1;
contadorVisitas += 1;
contadorVisitas++;

// Teste 4
// Verificar se os produtos estão disponíveis em estoque, atualizar o estoque após a venda e, caso a venda seja realizada, exibir uma mensagem informando que a venda foi realizada com sucesso.
let estoqueProdutoA = 50;

function realizarVenda(quantidade) {
    if (quantidade > estoqueProdutoA) {
        console.log("Quantidade insuficiente em estoque.");
    } else {
        estoqueProdutoA -= quantidade;
        console.log(`Venda realizada com sucesso. Novo estoque: ${estoqueProdutoA}`);
    }
}
realizarVenda(25)