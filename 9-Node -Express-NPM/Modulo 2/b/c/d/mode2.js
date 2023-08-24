/*module.exports = function(x,y) {   // este modulo irá exportar direto esta função -- funciona com oque eu quiser
    return x * y;
}*/

module.exports = class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    latir(){
        console.log(`${this.nome} está fazendo au au`)
    }
};

