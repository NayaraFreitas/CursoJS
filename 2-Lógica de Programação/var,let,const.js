/// let tem escopo de bloco {... bloco } , quando esta dentro de chaves
// var so tem escopo de função


const verdadeiro = true;

/*let nome = 'nayara'; // criando

var nome2 = 'nayara'; // criando

//var nome2 = 'Otavio'; // redeclarada
//console.log(nome, nome2)

if (verdadeiro) {
    let nome = 'Freitas'; // criando
    var nome2 = 'Rogerio'; // redeclarando
    //console.log(nome, nome2);

    if (verdadeiro) {
        var nome2 = 'Ronaldo' // redeclarado
        let nome = 'Outra coisa';

       // console.log(nome, nome2);
    }
}

console.log(nome, nome2);*/


//---------------------------//

// quando var está dentro da function não pode usar o console.log fora da function , pois não responderá
// se o var estiver fora e colocar o console.log dentro da function ele funcionará , var so respeita dentro da função
// let é egoista


/*var sobrenome = 'Freitas'
function falaoi() {
    //var nome = 'Nayara'
    console.log(sobrenome);
}
falaoi();*/

/*function falaoi() {

    if (verdadeiro){
        var sobrenome = 'Nayara';
        let nome = 'Freitas'; // se colocar no console , vai dar not defined
    }

    console.log(sobrenome);
}
falaoi();*/

// não pode usar o console.log antes de declarar algo , pois dará  undefined -- |
//acontece  com todas variaveis criadas com var e function
// se fazer com let dará erro
console.log(sobrenome);
var sobrenome = 'Freitas';

