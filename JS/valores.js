/*
Primitivos (valores imutaveis) - string, number, boolean, underfined, null (bigint, simbol) - valores copiados

Referencia (valores mutaves) - array, object , function  - valores passado por referencia


*/

// ---------Primitivos ---------------//
//          0123    
/*let nome = 'Luiz'; //-- imutavel
nome[0] = 'R' // não funcionará
console.log(nome[0], nome);*/

/*let a = 'A';
let b = a; //cópia 
console.log(a, b);

a = 'Outra coisa';
console.log(a, b);*/

//---------------Referencia--------------//

/*let a = [1, 2, 3];  // aponta pro mesmo valor na memoria
let b = [...a];
let c = b;
console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

a.push('luiz');
console.log(a, c);*/

//object
/*const a = {
    nome: 'Nayara',
    sobrenome: 'Freitas'
};

const b = {...a};

a.nome = 'Luiza'
console.log(a);
console.log(b);*/