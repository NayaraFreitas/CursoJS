// break e continue funciona em todos os laços, for in, for of, for classico , while e do while

// continue :ele pula pra proxima interação do laço

// break pode poupar recurso do servidor, pode melhorar a velocidade do código - sai do laço

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/*for ( let i in numeros) {   // for in
    let numero = numeros[i];

    if (numero === 2) {
        console.log('Pulei o numero 2')
        continue;
    } 

     console.log(numero);
   
    if (numero  === 7){
        console.log('7 encontrado, saindo ...')
        break;
    }

}*/

console.log('#######')

/*for (let numero of numeros) {    // for of
    if (numero === 2) {
        console.log('Pulei o numero 2')
        continue;
    } 

     console.log(numero);
   
    if (numero  === 7){
        console.log('7 encontrado, saindo ...')
        break;
    }
}*/

console.log('########'); 

let i = 0;
/*for (let i = 0; i < numeros.length; i++){ // for classico
    let numero = numeros[i];

    if (numero === 2) {
        console.log('Pulei o numero 2')
        continue;
    } 

     console.log(numero);
   
    if (numero  === 7){
        console.log('7 encontrado, saindo ...')
        break;
    }


}*/

console.log('#######')

/*while (i < numeros.length) { // while
    let numero = numeros[i];

    if (numero === 2) {
        console.log('Pulei o numero 2')
        i++
        continue;
    } 

     console.log(numero);
   
    if (numero  === 7){
        console.log('7 encontrado, saindo ...')
        i++
        break;
    }
    i++;
}*/

console.log('######');

do {
    let numero = numeros[i];

    if (numero === 2) {
        console.log('Pulei o numero 2')
        i++
        continue;
    } 

     console.log(numero);
   
    if (numero  === 7){
        console.log('7 encontrado, saindo ...')
        i++
        break;
    }

    i++;
} while (i < numeros.length);                 