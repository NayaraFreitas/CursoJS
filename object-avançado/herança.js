// Produto -> aumento , desconto
// Camise =  cor, caneca = material , lapis

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

// escreve o methodo no prototype do produto

Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
};


Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
};

// função construtora para o produto

function Camiseta(nome, preco , cor){
    Produto.call(this, nome , preco); // o this para chamar a função, assim que coloca o parametros ja esta chamando a função produto
    this.cor = cor;
}


Camiseta.prototype = Object.create(Produto.prototype) //o prototype da camiste é um objeto vazio , vai setar este prototype para criar o do produto , então assim ele ficará linkado  
Camiseta.prototype.constructor = Camiseta; // indicando para o Produto que o 'produto' é a camiseta,  quando foi colocado o produto no objeto vazio da camiseta ele colocou o Produto no proto constructor como Produto  assim deixando de identificar que o 'produto' é a camiseta - então este metodo muda para o constructor como camiseta

Camiseta.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

function Caneca(nome, preco, material, estoque){ //
    Produto.call(this, nome, preco);     // -- o call para erda de produto - por isso se chama herança
    this.material = material;            //  o this para chamar os methodos

    Object.defineProperty(this, 'estoque',{
        enumerable: true,
        configurable: false,
        get: function(){
            return estoque;
        },

        set: function(valor) {
            if(typeof valor !== 'number') return;
            estoque = valor;
        }
    })
}                                    

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;


const produto = new Produto('Gen', 111);
const camiseta = new Camiseta('Regata', 7.5, 'Preta');
const caneca = new Caneca('Xícara', 50, 'Porcelana', 5);
camiseta.aumento(100)
caneca.estoque = 100;

console.log(camiseta);
console.log(produto);
console.log(caneca);
console.log(caneca.estoque)