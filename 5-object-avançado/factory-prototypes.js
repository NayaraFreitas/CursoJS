//Compondo um objeto comm varios objetos
//Composição - Mixim

const falar = {
    falar(){
        console.log(`${this.nome} está falando.`);
    },
};

const comer = {
    comer(){                                                   ///Funções desacopladas 
        console.log(`${this.nome} está comendo.`);
    },
};

const beber = {
    beber(){
        console.log(`${this.nome} está bebendo.`);
    },
};

//const pessoaPrototype = {...falar, ...comer, ...beber} //spread -- jogando os metodos desacopladas no proto da pessoa

const pessoaPrototype = Object.assign({}, falar, comer, beber); // usando Object.assign para jogar os metodos par o _proto_ da pessoa


function criaPessoa(nome, sobrenome) {
   /* const pessoaPrototype = {    //const colocado no proto da pessoan
        falar(){
            console.log(`${this.nome} está falando.`);
        },

        comer(){
            console.log(`${this.nome} está comendo.`);                  ////- funções acopladas
        },

        beber(){
            console.log(`${this.nome} está bebendo.`);
        },
    }*/

    return Object.create(pessoaPrototype, { //proto
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });


}

const p1 = criaPessoa('Nayara', 'Freitas');
const p2 = criaPessoa('Maria', 'A');
console.log(p2);