// Um array esparso é um tipo de array no qual a maioria dos elementos tem valores indefinidos. Crie um array esparso e atribua valores a alguns elementos do array (por exemplo, defina valores nos índices 1, 3 e 7). Imprima no console o array e também a informação de comprimento do array.
const esparso = [10, 50, 110, 160, 200, 250, 330];
console.log(esparso.length);
// Adicionando elementos em determinado indice
// 1º Argumento: Indice onde o novo elemento sera adicionado
// 2º Argumento: O número de elementos a serem excluidos, nesse caso nenhum
// 3º Argumento: O elemento a ser adicionado 
esparso.splice(1,0,20);
esparso.splice(3,0,125);
esparso.splice(7,0,390);
console.log(esparso);
console.log(esparso.length);
// Crie um programa em Node.js que inicie com um array cinco elementos e atribua um novo valor para a primeira posição (índice 0) desse array. Em seguida, exiba o array antes e depois da alteração.
const elementos = [1, 2, 3, 4, 5];
console.log(elementos);
elementos.unshift(6,7); // Metodo para adicionar um ou mais elementos no inicio da lista
console.log(elementos);

// Crie um array vazio chamado meuArray e adicione 3 números inteiros de sua escolha utilizando o método push(). Imprima no console os itens presentes no array para verificar se os números foram adicionados. Em seguida, substitua o primeiro elemento do array (índice 0) pelo dobro do seu valor atual. Imprima no console o array atualizado para verificar a mudança.
const meuArray = [];
meuArray.push(10);
meuArray.push(50);
meuArray.push(70);
console.log(meuArray);
const remove = meuArray.shift(); // Metodo para remover o primeiro elemento da lista
meuArray.unshift(remove * 2); // Inserindo o elemento que possui o dobro do valor da const remove
console.log(meuArray);


// Desenvolva um programa em Node.js que crie um array vazio e atribua valores a ele utilizando o método push(). Adicione três números inteiros ao array e, em seguida, exiba o array resultante.
const arrayVazia = [];
arrayVazia.push(100);
arrayVazia.push(500);
arrayVazia.push(1000);
console.log(arrayVazia);


// Desenvolva um programa em Node.js que simule uma clínica veterinária. Crie um array vazio chamado clinica que representará a fila de animais na clínica. Em um primeiro momento, simule a chegada de três animais diferentes e exiba a lista de animais no console. Após a exibição, remova os animais da lista um por vez e, por fim, exiba no console o estado final da lista.
const clinica = ['Cachorro', 'Gato', 'Pato'];
console.log(clinica);
clinica.pop(); // Remove o ultimo elemento da lista
console.log(clinica);
clinica.pop();
console.log(clinica);
clinica.pop();
console.log(clinica);
