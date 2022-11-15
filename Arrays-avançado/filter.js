// filter - filtrar o array -> vai sempre retornar um array com a mesma quantidade de elementos ou menos.

// retorne os numeros maiores que 10
//               0   1   2  3  4  5  6  7  8  9  . . . 
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosFiltrados = numeros.filter(function(valor) {        // como usam normalmente  (pode usar arrow function)
    return valor > 10;
});


/*function callbackFilter(valor){
    return valor > 10;
}*/


/*function callbackFilter(valor, indice, array) {
    if ( valor > 10) {
        return true;
    } else {                                        // modelo anti profissional
        return false;
    }
}*/

//const filtrados = numeros.filter(callbackFilter);
//console.log(numerosFiltrados);



//Retorne as pessoas que tem o nome com 5 letras ou mais
//retorne as pessoas com mais de 50 anos
//retorne as pessoas cujo nome termina com a


const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome:'Maria' ,  idade:23},
    {nome:'Eduardo' ,  idade:55},
    {nome:'Leticia' ,  idade:19},
    {nome:'Eliza' ,  idade:22},
    {nome:'Joana' ,  idade:47},
];

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 6);
const pessoasComIdadeMaior =  pessoas.filter(obj => obj.idade > 50);
const nomeQueTerminaComA= pessoas.filter(obj => { 
    return obj.nome.toLocaleLowerCase().endsWith('a');
});
console.log(nomeQueTerminaComA);


