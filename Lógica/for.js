// for classico - porque varios linguagem interpreta ele da mesma maneira

/*console.log('Linha 0')
console.log('Linha 1')
console.log('Linha 2')
console.log('Linha 3')
console.log('Linha 4')
console.log('Linha 5')*/

// estrutura de repetição
//não tem ; no final
// no parentes tem colocar tres coisa importante , uma variavel definir a variavel colocando o valor incial nela
// a segunda é colocar uma condição
// e terceira é icrementar ++
// i significa index

//para ir de 10 em dez troca o ++ por += 10

/*for (let i = 0; i <= 10; i++  ) {
    const par  = i % 2 === 0 ? 'par' : 'impar';  // para saber se é impar ou par
    console.log(i, par);
}*/


//checando o array usando esrutura de repetição
const frutas =['Maçã', 'Pera', 'Uva', 'Nayara', 'Eliza', 'Marina'];

for (let i = 0; i < frutas.length; i++) {
    console.log(`Indice ${i}`, frutas[i]);
}