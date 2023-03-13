/*// new Object -> Object.prototype
// todas a funções costrutoras tem um objeto atrelados a ela que o _proto__ , prototype
const objA = {
    chaveA: 'A'
    //__proto__ : Object.prototype
};

const objB = {
    chaveB: 'B'
    //__proto__ : objtA -- pega o outro objeto e colocar no proto
};

const objC = new Object();
objC.chaveC = 'C'

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objA); // pulo o objeto B , pulo a cadeia 
console.log(objC.chaveA); //  .chaveB aparecerá undefined

// ObjC: chaveC "C" -> __proto__ : chaveB ="B" -> __proto__: chaveA: "A" __proto__. (a chave C que possui a chave b no proto que passou ter a chave chave A no seu proto , assim a chave se tendo o B e o A em seu proto).

// não é indicado mexer na __proto__ , utilize object.getPrototype pois é um elemento gett e  set.Prototype é setter*/

//------------------------------------------------------

// criar metodos dentro do prototype
// melhor colocar os metodos fora da função construtora

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}


Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
}

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
}

const p1 = new Produto('Camiseta', 50);

//literal
const p2 = {
    nome: 'Caneca',
    preco: 15
};
Object.setPrototypeOf(p2, Produto.prototype); // setando oo protoype do p1 para o p2

p2.aumento(10);
console.log(p1);
console.log(p2);

const p3 = Object.create(Produto.prototype, { // passando o objeto e o prototype , sem precisar o usar o new
    preco: {                    //  
        writable:true,            //
        configurable:true,         //
        enumerable:true,            //
        value:112                   //
    },                              ////////// configurando as propriedades dos objetos
    tamanho2: {                     //
        writable:true,              //    
        configurable:true,          //    
        enumerable:true,            //
        value:42                    //
    }                           ////
}); 
p3.nome =  'Calça';
p3.aumento(15)
console.log(p3)


