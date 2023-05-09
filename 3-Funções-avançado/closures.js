//Global
function retornaFuncao(nome) {  //closure
    //const nome = 'Nayara'; //closure
    return function () {
        return nome;
    };
}

const funcao = retornaFuncao('Luiz'); //script
const funcao2 = retornaFuncao('Julia')
console.dir(funcao);     // no console do navegador , da para ver a função anonimma , e da pra ver o escopo 
console.dir(funcao2);

console.log(funcao(), funcao2());

//--O closure é a habilidade de acessar o seu escopo léxico--//