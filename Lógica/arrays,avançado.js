// atribuição via desestruturação

//operator - ... rest -pega o resto ,, spread -- espalha


//indice         0       1     2     3     4     5     6     7     8
//const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
/*const [um,  , tres, , cinco, , sete] = numeros;
console.log(um, tres, cinco, sete);*/

/*const [um, dois, tres,...resto] = numeros;
console.log(um, dois, tres);
console.log(resto);*/

/*const primeiroNumero = numeros[0]
console.log(numeros[0])*/




//indice             0       1        2
//indice de dentro 0 1 2 , 0 1 2 , 0 1 2  
const numeros = [ [1,2,3],[4,5,6],[7,8,9] ];
const [lista1, lista2, lista3] = numeros
console.log(lista2[2]);


//const [,[,,seis]] = numeros;                 // modo mais complexo para pega o numero dentro indice 
//console.log(seis);


//console.log(numeros[1][2]) // acessar o indice dentro de indice - primeiro o de fora depois o de dentro







//----------------------------------------------//

/*let a  = 'A'; // b
let b = 'B'; // c
let c = 'C'; // a

const letras = [b, c, a];
[a, b, c] = letras;       //[ 1, 2, 3];

console.log (a, b, c);*/