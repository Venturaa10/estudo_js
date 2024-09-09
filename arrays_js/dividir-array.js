const listaEstudantes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];
console.log(listaEstudantes);


// Dividindo a turma do inicio da lista até a metade da lista 
// Parametros: onde inicia, onde termina (O elemento na metade da lista não é incluído na variavel sala1)
const sala1 = listaEstudantes.slice(0,listaEstudantes.length / 2);
console.log(sala1);

// Dividindo a turma da metade até o fim da lista
// Parametros: onde inicia (Como não tem o parametro de onde termina, então vai até o fim da lista)
const sala2 = listaEstudantes.slice(listaEstudantes.length / 2);
console.log(sala2);