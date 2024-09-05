// Crie variáveis que armazenem o valor do saldo, de depósito e de um saque de uma conta bancária, depois realize operações de adição e subtração entre eles utilizando uma variável chamada operacao, considerando a função de cada variável criada anteriormente. Exiba os resultados finais no console.
let saldo;
let deposito;
let saque;

function operacao(saldo, deposito, saque){
    saldo += deposito;
    saldo -= saque;

    console.log(`Conta bancaria\nSaldo: R$${saldo.toFixed(2)}\nDeposito: R$${deposito.toFixed(2)}\nSaque: R$${saque.toFixed(2)}`);
}
operacao(5000,2000,4500);

// Crie uma variável numérica com um valor. Utilize um operador ternário para verificar se esse valor é par ou ímpar. Exiba o resultado no console.
let valor = 82;
let texto = valor %2 === 0 ? `O número ${valor} é par` : `O número ${valor} é impar`;
console.log(texto);

// Considere uma situação em que você está verificando se um usuário está logado e tem permissão de administrador para acessar determinada funcionalidade. Utilize variáveis booleanas para simular essas condições e use o operador AND para verificar se ambas são verdadeiras.
let usuarioLogado = true;
let permissaoAdmin = true;
let verifica = usuarioLogado && permissaoAdmin ? 'Acesso autorizado' : 'Acesso não autorizado';
console.log(verifica);

// Declare duas variáveis booleanas e use o operador OR para verificar se pelo menos uma delas é verdadeira. Exiba o resultado no console.
let bola = true;
let jogarBola = true;
let verifica2 = bola || jogarBola ? 'Pelo menos uma é verdadeira' : 'Ambas são falsas';
console.log(verifica2);

// Imagine um sistema que determina se um usuário tem idade suficiente para comprar o ingresso para um show. Declare duas variáveis que determinem a idade mínima e qual a idade do usuário e utilize estruturas condicionais (if, else) para determinar se o usuário pode realizar a compra.
let idadeEstudante = 10;
let idadeMinimaPermitida = 18;
let verificaIdade = idadeEstudante >= idadeMinimaPermitida ? `O estudante possui ${idadeEstudante} anos, compra autorizada` : `O estudante possui ${idadeEstudante} anos, compra não autorizada`;
console.log(verificaIdade);

if (idadeEstudante >= idadeMinimaPermitida) {
    console.log(`O estudante possui ${idadeEstudante} anos, compra autorizada`);
} else {
    console.log(`O estudante possui ${idadeEstudante} anos, compra não autorizada`);
}