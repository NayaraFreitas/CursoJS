// factory function (função fabrica)
// constructor function (função construtora)

function criaPessoa(nome, sobrenome, peso, altura){
    return {
        nome, sobrenome,// quando uma função esta dentro de um objeto chamamos de metodo 

        //getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },

        //Setter
        set nomeCompleto(valor){
            valor = valor.split(' ');  // virou array
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            //console.log(valor) //vetor (p1)
        },

        fala: function(assunto = 'Falando sobre nada') {
            return `${this.nome} está ${assunto}. `;   //o this sempre vai se referir a pessoa (p1) que voce estive executando
        } ,                                                          // se eu mudar a pessoa ele correspondera a qual eu mudei (p2)
        
        peso: peso,
        altura: altura,
        //Getter
        get imc(){           /// com get ele vai fingir ser um atributo  // existi o setter tambem que seta 
           const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}
//o this pode variar 

const p1 =  criaPessoa('Nayara', 'Freitas', 90 , 1.80);
//console.log(p1.imc());
//const p2 = criaPessoa('Luiza', 'Pessoa', 65, 1.65);
//console.log(p2.imc());
//console.log(p2.fala('falando sobr JS'));
//---- usado o get para virar atributo o imc---//
//console.log(p1.nome);
//console.log(p1.sobrneome);
//console.log(p1.imc);
//-------------------------------------------------//
//console.log(p1.nomeCompleto); //  com get, sem o get fica o metodo normal nomeCompleto()
//p1.nomeCompleto = 'Maya Teles Julius';
//console.log(p1.nome)
//console.log(p1.sobrenome)






