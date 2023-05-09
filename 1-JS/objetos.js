/*const pessoa1 = {
    nome: 'Nayara',
    sobrenome: 'Freitas',
    idade: 21
};
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);


const pessoa2 = {
    nome: 'Luiza',
    sobrenome: 'Gata',
    idade: 22
};*/

/*function criaPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa1 = criaPessoa ('Luiz', 'Otavio', 25);
const pessoa2 = criaPessoa ('Nayara', 'Teles', 21);
const pessoa3 = criaPessoa ('Luiza', 'Sonza', 22);
console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome);*/

const pessoa1 = {
    nome: 'Nayara',
    sobrenome:'Freitas',
    idade: 21,

    fala () {
       console.log(`${this.nome} ${this.sobrenome} minha idade é ${this.idade}.`) 
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade ();
pessoa1.fala();