class Pessoa {                      // funciona parecido com a função construtora
    constructor(nome , sobrenome) {
        this.nome = nome;                   // a class e um molde
        this.sobrenome = sobrenome;
    }

    falar(){
        console.log(`${this.nome} esta falando`)
    }

  
}
  
function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function(){
    console.log(`${this.nome} esta falando.`)
}

const p1 = new Pessoa('Nayara', 'Freitas');   // não pode esquecer do new
