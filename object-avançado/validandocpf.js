//705.484.450-52  070.987.720-03

/*  Conta feita para validar cpf
7x  0x  5x   4x  8x  4x   4x   5x   0x
10  9   8    7   6   5    4    3    2
70  0   40   28  48  20   16   15    0 = 237


11 - (237 % 11)  =  5 (primeiros digitos)
Se o numero digito for maior que 9, consideramos 0,

7x   0x    5x    4x    8x    4x     4x    5x     0x     5x
11   10    9     8     7     6      5     4      3       2
77   0    45     32    56   24     20     20     0      10  = 284

11 - (284 % 11) = 2 (Segundo digito)

705.484.450-52  === 705.484.450-52
*/

/*let cpf = '705.484.450-52';
let cpfLimpo = cpf.replace(/\D+/g, '');
cpfArray = Array.from(cpfLimpo);
console.log(cpfArray.reduce((ac, val) => ac + Number(val), 0 ));*/

function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function() {
            return cpfEnviado.replace(/\D+/g, '');
        } 
    });
}

ValidaCPF.prototype.valida = function() {
    if (typeof this.cpfLimpo === 'undefined') return false;
    if (this.cpfLimpo.lenght !== 11) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);

    return true;
};

ValidaCPF.prototype.criaDigito = function(cpfParcial){
    const cpfArray = Array.from(cpfParcial);  

    let regressivo = cpfArray.length + 1;
    let digito = cpfArray.reduce((ac , val) => {
        ac += (ac * Number(val));
        regressivo--;
        return ac;
    },0);

    console.log(digito);
}

const cpf = new ValidaCPF('705.484.450-52');
console.log(cpf.valida());