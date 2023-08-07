//----------Modos de fazer o exports ------------//
/*const nome = 'Nayara';
const sobrenome = 'Freitas';

const falaNome = () => nome + ' ' + sobrenome;

console.log(module) // o module e do node

//module.exports.nome = nome; // ele é um objetos normal como qualquer outro objeto
//module.exports.sobrenome = sobrenome;
//module.exports.falaNome = falaNome; // não precisa executa a função ,você so esta entrelando ela.

//                                                                 -chave-  -variavel-
//A  VARIAVEL NÃO PRECISA TER O MESMO NOME DA CHAVE EXMPL: EXPORTS.PESSOA = NOME , pra poder exportar

exports.nome = nome; // posso usar sem o module na frente que funcina do mesmo jeito
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;

this.qualquercoisa = 'O que eu quiser exportar' // funciona no module tbm

modelo.exports = {            //sobreescrever o objeto todo para exports tbm pode , mas não posso fazer isso com exports direto
    nome , sobrenome , Pessoa
};


console.log(exports); // pode usar o module.exports ou so exports*/

//-----Fazendo com Classe -------------//

class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

exports.Pessoa = Pessoa;