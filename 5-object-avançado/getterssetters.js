//defineProperty -> Getter e Setters
function Produto(nome, preco , estoque ){
    this.nome = nome;
    this.preco = preco;
    //this.estoque = estoque
    let estoquePrivado = estoque;
    Object.defineProperty(this , 'estoque', {
        enumerable: true,
        //value: estoque,  // nao foi precisa por conta da utilização do getter e do setter
        //writable: true,  // 
        configurable: true,
        get: function(){   // o getter e so pega e mostra o valor
            return estoque;
        },
        set: function(valor){
            if(typeof valor !== 'number'){
                throw new TypeError('Mensagem');
            }

            estoquePrivado = valor;
        }

    });
}

/*const p1 = new Produto('Camiseta', 20, 3);
//console.log(p1);
p1.estoque = 'eihsfj';
console.log(p1.estoque);*/


function criaProduto(nome){   /// gettter e setter na factory function
    return {
        get nome(){
            return nome;
        },
        set nome(valor){
            valor = valor.replace('coisa.', '');
            nome = valor;
        }
    }
}

const p2 = criaProduto('Camiseta');
p2.nome = 'qualquer coisa.'
console.log(p2.nome);