/*
Escreva uma função que recebe um número e retorne a seguinte:
Número é divisivel por 3 = Fizz
Número é divisivel por 5 = Buzz
Número é divisivel por 3 e 5 = FizzBuzz
Número não é divisivel por 3 e 5 = Retorna o próprio numero
Checar se o número é realmente um número = Retorna o próprio numero
Use a função com número de 0 a 100
*/ 

function fizzBuzz(numero) {
    if (typeof numero !== 'number') return numero;
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';//por ter dois check ela tem que ser checada primeiro , senão não sera retornada
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
    

    return numero
}

console.log('a', fizzBuzz('a'));

for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i))
}

