/**
 Entre 0 - 11 -Bom dia
Entre 12 - 17 - Boa Tarde
entre 18 - 23 - Boa noite
 */

// if pode ser usado sozinha com a condição dele 
// o else if não pode ser executado sozinha , usado após o uso de if , sempre que utilizo o else , preciso de um if antes
// posso ter varios else ifs na condição (na checagem)
// eu so posso ter um else por ultimo
// podemos usar condições else if , apenas if e else


/*const hora = 50;

if (hora >= 0 && hora <= 11){
    console.log('Bom dia');
} else if (hora >= 12 && hora <= 17 ) {                     
    console.log('Boa Tarde');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite');
} else {
    console.log('Olá');
}*/

/*const tenhoGrana = NaN;
if (tenhoGrana) {
    console.log('Vou sair de casa');
} else {
    console.log('Não vou sair de casa')
}*/


////////////  aula 2 de if , else , else if


// Se isso ocorrer (numero >= 0 && numero <= 5) ocorrer , faça isso (O número está entre 0 e 5).--- exemp ---
// Se não , faça isso ('O numero NÂO está entre 0 e 5) -- exemp --



 // if else , ele chega de cima pra baixo , qual verdadeira e qual não , e para quando chegar no verdadeira , para ser executado 

if (1 === 1 ){ // verdadeira
    console.log('LITERAL');       
}

const numero = 10;

if (numero >= 0 && numero <= 5) {
    console.log('O número está entre 0 e 5.');
} else if (numero >= 6 && numero <= 8) {
    console.log('O número está entre 6 e 8');
}else if (numero >= 9 && numero <= 11) {       
    console.log('Este número está entre 9 e 11');
} else {
    console.log('Não está entre nenhum número.');
}


console.log('... aqui vai o resto do código');
