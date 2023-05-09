// atribuição via desestruturação objects

const pessoa = {
    nome: 'Nayara',
    sobrenome: 'Freitas',
    idade: 21,
    endereco: {
        rua: 'taquaritinga',
        numero: 79
    }
};



//pode setar um valor , caso não esteja no object - usando = ''
//pode muda o nome da variavel com :
//const {endereco: {rua, numero}, endereco } = pessoa;  
//const nome = pessoa.nome;
const {nome, ...resto} = pessoa // pode usar o rest para pegar o resto das informações no object
console.log(nome, resto);