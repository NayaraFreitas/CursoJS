//for in -> lê os indices ou chaves do objeto

const pessoa = {
    nome: 'Nayara',
    sobrenome: 'Freitas',
    idade: 21
};

//const chave = 'nome';

//console.log(pessoa.nome);
//console.log(pessoa[chave]);



for (let chaves in pessoa ){
    console.log(chaves, pessoa[chaves]);
}














//                0       1       2
//const frutas = ['Pera', 'Maçã', 'Uva'];
/*for (let indice in frutas) {   // qualquer nome que eu der na variavel vai funcionar
    console.log(frutas[indice]);
}*/


/*for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}*/
