//Obect.deineProperty , Object.defineProperties

function Produto(nome, preco, estoque) {
   /* this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;*/

    
    Object.defineProperty(this, 'estoque', { // pode utlizar mais uma vez 
        enumerable: true, // exibir o parametro enumerado (boolean) 'mostra a chave'
        value: estoque,  // valor 
        Writable: true,  // controla se o parametro pode ser alterado (boolean)
        configurable: true // pode apagar , reconfigurar a chave 'parametro' (boolean)
    });

    
    //defineProperties
    Object.defineProperties(this, {
        nome: {enumerable: true, // exibir o parametro enumerado (boolean) 'mostra a chave'
        value: nome,  // valor 
        Writable: true,  // controla se o parametro pode ser alterado (boolean)
        configurable: true },

        preco: {enumerable: true, // exibir o parametro enumerado (boolean) 'mostra a chave'
        value: preco,  // valor 
        Writable: true,  // controla se o parametro pode ser alterado (boolean)
        configurable: true },

        estoque: {enumerable: true, // exibir o parametro enumerado (boolean) 'mostra a chave'
        value: preco,  // valor 
        Writable: true,  // controla se o parametro pode ser alterado (boolean)
        configurable: true }
    });


}

const  p1 = new Produto('Camiseta ', 20,3);
//console.log(Object.keys(p1));
console.log(p1);
for(let chave in p1) {
    console.log(chave);
}