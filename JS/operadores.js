//Aritméticos
// + Adição / concatenação
// **  Potenciação
// % resto da divisão
// 

/* como funciona a hierarquia de calculo no javascript
() oque tiver so parantes ele calcula primerio
1º ** potenciação
2º * multiplicação
3º  / % divisão e resto de divisão "porcentagem"
4º + -
*/

/*const num1 = 5;
const num2 = 10;
console.log(num1 ** num2);*/

/*const num1 = 5;
const num2 = 10;
console.log(num1 % num2);*/

/*const num1 = 5;
const num2 = 10;
const num3 = 7;
console.log((num1 + num2) * num3);*/



// ++  pode ser tanto pos quanto pre (++contador) - ++ incremento (mais mais)

/*let contador = 1;
//contador++; //2
//contador++; //3
//++contador; //4
//contador++; //5
/*console.log(contador++);*/ /*console.log(++contador)
console.log(contador);*/

// decremento = -- (menos menos)

//const passo = 2;
let contador = 0;
/*contador = contador + passo;
console.log(contador);
contador = contador + passo;
console.log(contador);
contador = contador + passo;
console.log(contador);*/



// operadores de atribuição  *= , +=, **=, 
/*contador += 2;  
contador += 2;  
contador += 2;  
console.log(contador)  */


//NaN - not a number

const num1 = 10;
const num2 = Number('Nayara');
console.log(num1 + num2);
console.log(typeof num2);

//parseInt para converte para numero inteiro
//parseFloat para converte para numero decimais
// Number ele identifica se é int ou float 