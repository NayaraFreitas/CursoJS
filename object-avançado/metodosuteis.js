/*
Object.values
Object.entries
Object.assign (des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
... (spread)
//Já vimos
Object.keys(retorna as chaves)
Object.freeze(congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

const produto = {
    nome: 'Produto',
    preco: 1.8
};

/*const caneca = {...produto,    //...spread propriedade de copiar um objeto pra outro objeto
    material: 'porcelana'
};*/

const caneca = Object.assign({}, produto, {material:'procelana'});


caneca.nome = 'Luiz Otavio'
caneca.preco = 1.5;

console.log(produto)
console.log(caneca);

