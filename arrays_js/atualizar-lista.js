const listaEstudantes = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];

// Pirmeiro parametro remove x elementos apartir do indice 1(Ana)
// Serceiro parametro remove x quantidade, nesse caso dois elementos (Ana e Caio) 
// Terceiro parametro, é o elemento que desejo incluir na lista no lugar dos elementos removidos.
listaEstudantes.splice(1, 2, 'Rodrigo');
console.log(listaEstudantes);