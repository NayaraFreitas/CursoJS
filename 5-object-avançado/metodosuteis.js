/*
Object.values(similar ao keys - pega só os valores)
Object.entries(similiar ao keys - le a chaves e os valores)
Object.assign (destino, any - copia um objeto)
Object.getOwnPropertyDescriptor(o, 'prop', retorna as propiedades(descritor) - writable, configurable, value , enumerable)
... (spread - similar ao assign - espalha os valores de um objeto em outro objeto)
//Já vimos
Object.keys(retorna as chaves - oque tem no objeto)
Object.freeze(congela o objeto - congelado não pode ser alterado)
Object.defineProperties (define várias propriedades- writable , configurable, value, enumerable)
Object.defineProperty (define uma propriedade - writable , configurable, value, enumerable)
*/


//----------------
/*const produto = {
    nome: 'Produto',
    preco: 1.8
};*/
/*Object.freeze(produto); cngela o objeto*/
//const caneca = {nome: produto.nome, preco: produto.preco}; /*forma manual de-se fazer , não é uma pratica boa , melhor usar spread ou assign */ 

/*const caneca = {...produto,    //(...)spread propriedade de copiar um objeto pra outro objeto
    material: 'porcelana'
};*/

/*const caneca = Object.assign({}, produto, {material:'procelana'});*/

/*caneca.nome = 'Luiz Otavio'
caneca.preco = 1.5;

console.log(produto);
console.log(caneca);*/
//----------------------

/*Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false,
    value: 'Qualquer outra coisa'
})
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));*/
const produto = {nome: 'Produto', preco: 1.8 , material:'porcelana'};
//console.log(Object.entries(produto));

for(let [chave, valor] of Object.entries(produto)){ // desctructor direto do for  
   console.log(chave , valor); 
}
