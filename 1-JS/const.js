//Não podemos criar constantes com palavras reservadas
//Constantes precisam ter nomes significativos 
//Não pode começar o nome de ums constante com um numero
//Não podem conter espaços ou traços
//Utilizamos camlCase
//Case-sensitive
//Não pode modifica o valor de uma constante
//Não UTILIZE VAR, UTILIZE const.

/*const nome = 'João';
console.log(nome)*/

// String = Text | fora da aspas e um Number = Número
// + - *  sinal de soma , subtração e mulplicação//
const primeiroNumero = 5;  //Number 
/* se colocar aspas no cinco e soma com o 10 no console.log( typeof (primeiroNumero +  segundoNumero))virará uma string então sera uma junção e ficara
com o numero 510*/
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
 //console.log(resultado);
// console.log(resultadoDuplicado);
//console.log(resultadoTriplicado);

//console.log( typeof primeiroNumero ); // para o tipo se é string ou number