class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado){
        console.log(this.nome + ' já está ligado')    
        return;
        }

        this.ligado = true;
    }

    desligar() {
        if(!this.ligado) {
            console.log(this.nome + ' já está desligado')
            return;
        }
        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico {  // extends  para saber de quem ele vai herdar
    constructor(nome, cor, modelo) {
        super(nome); // para puxar da outra class que ela herdar o nome - chamar o construtor da class pai para executar - ele e necessario apos o uso do extends.

        this.cor = cor;     // especifico dessa class smartphone
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }

    ligar() {
        console.log('Olha, você alterou o método ligar.')
    }

    falaOi() {
        console.log('OI');
    }
}



const s1 = new Smartphone('Iphone', 'Preto', '14 pro');
console.log(s1);

const t1 = new Tablet('Ipad', true);
t1.ligar()  // pode sobreescrever metodos e criar tbm
t1.ligar()
t1.falaOi();
//console.log(t1);