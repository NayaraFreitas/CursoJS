//const nomes = new Array('Eduardo', 'Joana', 'Maria') ;// array constructor
// Array são dados por referencia (valor por referencia)
//const novo = [...nomes]; //spred operator
//console.log(novo);
//nomes.push('Otavio') // adiciona no final do array {.unshift adiciona no começo e altera os indices}
//novo.pop(); // remove o ultimo {.shift() remove no começo mas ele reloca os indices}
//nomes[2] = 'Luiz';
//delete nomes[2]; // elimina do array mas não deleta o indice


//               0          1       2       3         4
//const nomes = ['Nayara', 'João', 'Joana', 'Wallace', 'Carol'];
//const novo = nomes.slice(1, -2);  // fatia o array
//console.log(novo);

//const nome =  'Nayara Freitas Teles';
//const nomes = nome.split(' '); // transforma uma String em array
const nomes = [ 'Nayara', 'Freitas', 'Teles' ];
const nome = nomes.join(' ');  // tranforma o array em String
console.log(nome);
