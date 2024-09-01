const estaAprovado = true;

if (estaAprovado === true) {
    console.log('Aprovado');
}

// Quando utilizo dois "==" para realizar comparação, leva em consideração o valor dentro da string.
// Quando utilizo três "===", além do valor da string, leva em consideração o tipo do dado
// Para funcionar corretamente e boa pratica, é recomendado utilizar "===" em qualquer comparação em JS
if ('0' === 0) {
    console.log('Passou na comparação')
} else {
    console.log('Não passou na comparação')
}

