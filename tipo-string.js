const estudante = "Caroline";
const estudante1 = "MARIA EDUARDa";
const docente = 'Ana';
const cumprimento = "Nosso lema é 'estudar bastante!'";
const citacao = `"'Ju diz: Nosso lema é estudar bastante!'"`
const texto = 'estudando JavaScript';
console.log(texto.includes('Java')); // retorna true, ou seja, foi encontrada a palavra "Java" no texto
const texto2 = 'Flamengo é o maior do rio'
console.log(texto2.includes('mengo'));
console.log(texto2.includes('menor')); // Retorna False

console.log(cumprimento);
console.log(citacao);
// Template String (`${const/let}`)
console.log(`A estudante se chama: ${estudante}`);

// Metodo para deixar a string toda em caixa alta
const senha = `SenhaSegura123 / ${estudante.toUpperCase()}`;
console.log(senha);
// Metodo para deixar a string toda em caixa baixa
const senha2 = `SenhaSegura456 / ${estudante1.toLowerCase()}`;
console.log(senha2);