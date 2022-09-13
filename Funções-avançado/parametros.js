// arguements que sustenta todos os arguementos enviados , so as funções criadas com a function normal
/*function funcao(a, b, c) {
    //console.log(arguments[5]); // mostra oque eu coloquei no parametro 

    let total = 0;
    for (let argumento of arguments){
        total += argumento
    }

    console.log(total, a, b, c);
}
funcao(1, 2, 3, 4, 5);      // eu posso ou não ter um parametro ,pois o js não liga*/

//----------------------------------------

/*function funcao(a, b, c, d, e, f) {
    console.log(a, b, c ,d, e, f);
}
funcao(1, 2, 3);  // se divergi o numero de parametro com argumentos o js vai definir como undefined*/

//-----------------------------------------
 // vai da NaN  porque não é um conta aritimetica valida = a + b sem ter um valor no parametro


/*function funcao(a, b = 2, c =4) {
    //b = b || 0;  // com valor no b, agr vai aparecer o 2 
    console.log(a + b + c);
}
funcao(2, undefined, 20);     // cada valor que colocar no arguemento substituirá no parametro  // se usar undefined ele assume o parametro
 // null ele assume 0 , se usar '' ele juntar os numeros */                  

//--------------------------------------- 
// distruturação de objeto
/* function funcao({nome, sobrenome, idade}) {
    console.log(nome , sobrenome, idade);
}
funcao({nome: 'Nayara', sobrenome:'Freitas', idade:'21'});  // enviando um objeto literal como argumento para o parametro*/

//---------------------------------------
// distruturação com array
/*function funcao([valor1, valor2, valor3]) {
   console.log(valor1, valor2, valor3);
}
funcao(['Nayara','Freitas', 21]);*/

//---------------------------------------

const conta = function conta(operador, acumulador, ...numeros) {   // usando o rest ... , da para usar ...com argumenst  fica ..args
    for(let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }

    console.log(acumulador);
};
conta('*', 1 , 20,30,40,50);