// a função fabrica faz retornar um objeto -> fabrica
// a constrututora ela ja faz por si só -> constroi objetos
// construtora -> sempre se inicia com letra maiusculo  e sempre utilizar (new) exemp: "Pessoa(new)"

function Pessoa(nome, sobrenome) {
    // Atributos ou metódos públicos
    // Privada
    const ID = 123456;

    const metodoInterno = function(){      

    };
    //

                                                               // dentro do objeto em si não precisa usar virgula

    // Atributos ou metódos públicos
    this.nome = nome;    // o this apontará para o p1 e o p2 
    this.sobrenome = sobrenome;

    this.metodo = function(){
        console.log(this.nome + ': sou um metodo');
    };

} // não precisa usar o return

// Pessoa.nome = nome

const p1 = new Pessoa('Nayara', 'Freitas');
const p2 = new Pessoa('Luiza', 'Pereira'); // não pode esquecer a palavra new ( sempre precisara chamá a palavra new)
p2.metodo(); // chamando a função metodo

console.log(p1.nome);
