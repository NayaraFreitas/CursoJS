//Metodo estaticos são metodos que você pode acessar na classe sem instancia a classe, sem ultilizar a palavrinha new.

class ControleRemoto { // metodos estaticos estão apenas referentes a classe e não a instancia
    constructor(tv){
        this.tv = tv;  // referente a instancia
        this.volume = 0;  // referente a instancia
    }

    //Metodo de instancia
    aumentarVolume() {    //metodos
        this.volume += 2;
    }

    diminuirVolume() {
        this.volume -= 2;
    }

    //Método de estático
    /*static trocaPilha() { // static  - faz o metodo virar de intancia para estático - posso chamar ele pela class 
        console.log("Okay")
    }*/

    static soma(x, y) {
        return x + y;
    }

}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume(); // chamando a instancia
controle1.aumentarVolume();
controle1.aumentarVolume();

console.log(controle1);

//ControleRemoto.trocaPilha(); // metodo referente a classe -- não precisa fica preso a instancia - sem precisar do new , consequentemente não tem acesso aos dados da classe, para isso precisa criar o objeto com o new

console.log(ControleRemoto.soma(2,4));
