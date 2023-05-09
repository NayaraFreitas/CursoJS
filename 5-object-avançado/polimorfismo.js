/*------CONTA---------*/
//Superclass -classe mãe
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
    if(valor > this.saldo) {
        console.log(`Saldo insuficietne: ${this.saldo}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
};
Conta.prototype.verSaldo = function() {
    console.log(`Ag/c: ${this.agencia}/${this.conta} |` + 
    `Saldo: R$ ${this.saldo.toFixed(2)}`);
};

/*const conta1 = new Conta(11, 22 , 10)
conta1.depositar(11);
conta1.depositar(10);
conta1.sacar(30);
conta1.sacar(1.00)
conta1.sacar(10);*/

/*-------CONTA CORRENTR---------*/ 

function CC(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;

CC.prototype.sacar = function(valor) {
    if(valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
};

/*const cc = new CC(01, 22 , 0 , 100);
cc.depositar(10);
cc.sacar(110);
cc.sacar(50);*/

/*--------CONTA POUPANÇA------*/ 

function CP(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
}

CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;

const cp = new CP(12, 33, 0);
cp.depositar(10);
cp.sacar(10);
cp.sacar(1);

//polimorfismo fazer um metodo se comportar diferente 