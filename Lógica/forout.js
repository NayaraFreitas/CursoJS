//
const nomes = ['Luiz', 'Otavio', 'Henrique'];

//'Luiz Otávio';

//----- For classico - Geralmente com interáveis (array ou string)

/*for (let i = 0; i < nomes.length; i++ ){
    console.log(nomes[i]);
}

console.log('####');


//------- For in - Retorna o indice ou chave (string, array ou objetos )

for ( let i in nomes){
    console.log(nomes[i]);
}

console.log('####');


//--- for of - retorna o valor em si (interáveis, arrays ou strings)

for (let valor of nomes ){
    console.log(valor);
}

console.log('####');

nomes.forEach( function(valor, indice , array){  //valor e  indice dentro o array 
    console.log(valor, indice, array);
});*/


//----------- como object não tem como usar o for out 

const pessoa = {
    nome:'João',
    sobronome: 'Luiz'
};

for (let chave in pessoa){
    console.log(chave, pessoa[chave]);
}

for ( let valor of pessoa) {

}