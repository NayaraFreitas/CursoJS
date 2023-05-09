// Declaração de função - forma normal 
//na forma normal acontece o function hoisting - posso chama a função antes declarar ou depois  de declarar 

function falaoi(){
    console.log('Oie');
}
falaoi()

// First-class objects (objetos de primeira classe)
// Function expression
const souUmDado = function(){
    console.log('Sou um dado');
};
souUmDado();

function executaFuncao(funcao) {
    console.log('Vou executa sua função abaixo.')
    funcao();
}
executaFuncao(souUmDado);

// Arrow function 
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};
funcaoArrow();

// Dentro de um objeto pode ter uma função
const obj = {
    falar: function(){    // pode tirar o function e deixar só falar()
        console.log('Estou falando...');
    }
};
obj.falar();


