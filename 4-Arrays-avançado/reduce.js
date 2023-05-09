//reduce - reduzir o array / versatil 


//Some todos os numeros (reduce)
// retorne um array com os pares (filter)
// retorne um array como o dobro dos valores (map) 
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function(acumulador, valor) { //  o acumulador  ele adiciona a cada alteração do laço (ou seja acumulando no valor)
    //acumulador += valor;  // para fazer a some de todos os arrays

    //if(valor % 2 === 0) acumulador.push(valor); // para saber quais são os numeros pares , mas para isso é melhor fazer com .filter
    
    acumulador.push(valor * 2); // retornando os valores em dobro 
    return acumulador;
}, []); //(0)valor inicial do acumulador, se colocar nada ele pega o primeiro numero do array
//console.log(total);


// retorne a pessoa mais velha
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome:'Maria' ,  idade:23},
    {nome:'Eduardo' ,  idade:55},
    {nome:'Leticia' ,  idade:10},
    {nome:'Eliza' ,  idade:64},
    {nome:'Joana' ,  idade:63},
];
const maisVelha = pessoas.reduce(function(acumulador,valor) {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});

console.log(maisVelha);