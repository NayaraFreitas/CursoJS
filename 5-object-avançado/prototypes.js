/*Javascript é baseado em protootipos para passar propriedades e métodos de um obbjeto para outro.

Definição de protótipo
Prototipo é o termo usado para se referir ao que foi criado pela primeira vez, servindo do modelo ou molde para futuura produções.

Todos os objetos tem uma referencia interna para um prototipo (___proto___)
que vem da propriedade prototype da funÇão construtora que foi usada para criá-lo. quando tentamos acessar um membro de um objeto, primeiro o motor do JS vai tentar encontrar este membro no próprio objeto e depois a cadeia de prototipos é usada até o topo(null) até encontrar (ou não ) tal membro.
*/ 

// assim que criar uma função construtora o javascript linka atomaticamente o objeto __proto__  (prototype) na função.

//Para que o desempenho da função pessoa o this.nomeCompleto melhore foi passado para o prototipo __proto__ (deixando como "armazenado" no metodo ) para melhorar o programa


function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
   // this.nomeCompleto = () => 'Original' + this.nome + ' ' + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + '' + this.sobrenome
}

const pessoa1 = new Pessoa('Nayara', 'F.'); // <= Pessoa = função construtora
const data = new Date(); // <--- Date = função construtora

console.dir(pessoa1);
console.log(data);
