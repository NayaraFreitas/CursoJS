// Essa função tem como trabalho pausar o código em um determinado local
//Lazy avaliation
// na função gerador não precisa ser só numeros poder ser qualquer coisa, strings, funções


function* geradora1() {
    // Código qualquer
    yield 'Valor 1'; // similar ao return
    // Código qualquer
    yield 'Valor 2'; 
    // Código qualquer
    yield 'Valor 3'; 
}

//const g1 = geradora1();
/*console.log(g1.next().value);// só g1 aprecerá Object [Generator] {}, para eu ver o o valor se utiliza o .next() //para aparecer cada valor = valor 1
console.log(g1.next().value);  //para aparecer cada valor = valor 2
console.log(g1.next());  //para aparecer cada valor = valor 3
console.log(g1.next());*/ // mostrará o done true porque acabou os valores
/* aparecerá com .next() - { value: 'Valor 1', done: false } , para ver só o valor por o .value , o done false 
porque paro no primeiro valor da geradora então false porque ela possui outros valores não termino
*/

/*for (let valor of g1) {  // o for sabe os valores do gerador
    console.log(valor)
}*/

/*function* geradora2() { // gerador infinito , vai me entrega valores sempre que eu pedir
    let i = 0 ; 

    while(true){
        yield i;
        i++;
    }
}

const g2 =  geradora2();
console.log(g2.next().value);*/

/*function* geradora3(){
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4(){ // esta vai delegar para a geradora3 (vai juntar com a g3)
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 =  geradora4();
for( let valor of g4){
    console.log(valor);
}*/

function* geradora5() {
    yield function() {
        console.log('Vim do yield 1');
    };

    return function(){  // ele vai para a geradora aqui deixando o que está abaixo inacessivel
        console.log('Vim do return');
    }
    // ...

    yield function() {
        console.log('Vim do yield 2');
    };
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();


