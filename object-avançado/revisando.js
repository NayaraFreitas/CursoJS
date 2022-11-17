// literal  '' `` "" é feito pelas  {}
/*const pessoa = {
    nome:'Nayara',
    sobrenome:'Teles'
};

const chave = 'nome';*/
//console.log(pessoa[chave]); // colocar em colchete funciona do mesmo jeito que .nome

//construtor 
/*const pessoa1 = new Object();
pessoa1.nome = 'Nayara';
pessoa1.sobrenome = 'Freitas';
pessoa1.idade = 30;
pessoa1.falarNome = function() {
    return(`${this.nome} está falando seu nome.`)
};
//pessoa1.falarNome();
//delete pessoa1.nome; // apagar um objeto
//console.log(pessoa1);
pessoa1.getDataNascimento = function(){
    const  dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;     //metodos
};

//console.log(pessoa1.getDataNascimento());

for (let chave in pessoa1){
    console.log(pessoa1[chave]);
}*/

//molde para criar objetos
//factory functions / construtor functions
//factory
/*function criaPessoa(nome, sobrenome){
    return{
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa('Nayara', 'Freitas');
console.log(p1.nomeCompleto);*/

//construtor
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this);
}

const p1 = new Pessoa('Nayara', 'Teles'); // new cria um objeto vazio {} <- this é atrelada a este objeto
const p2 = new Pessoa('Maria', 'Miranda');
p1.nome = 'Outra Coisa';
p1.sobrenome = 'QLQ';
delete p1.nome;
console.log(p1);
console.log(p2);
