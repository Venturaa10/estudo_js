
function exibeInfoEstudante (nome, nota) {
    return `Info do estudante\nNome: ${nome}\nNota: ${nota}`;
    // console não executado
    console.log(`Info do estudante\nNome: ${nome}\nNota: ${nota}`);
}

// Sem utilizar a palavra-chave "return" na funnção, apenas o "console.log" para retornar a string
exibeInfoEstudante('João Victor',10);
exibeInfoEstudante('Vinicius',8);
exibeInfoEstudante('Duda',6);
exibeInfoEstudante(); // Retorna "undefined" ambos os parametros

// Executa linha caso eu esteja utilizando a palavra-chave "return" na função
console.log(exibeInfoEstudante('João Victor',10));
console.log(exibeInfoEstudante('Vinicius',8));
console.log(exibeInfoEstudante('Duda',6));

function dividir(dividendo, divisor) {
    if (divisor !== 0) {
      return dividendo / divisor;
    } else {
      return 'favor não dividir por zero';
    }
   }
   
   const resultado = dividir(10, 5);
   console.log(resultado); // 2
   const resultadoZero = dividir(10, 0);
   console.log(resultadoZero); // 'favor não dividir por zero'