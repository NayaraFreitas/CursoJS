/*
&& -> false and true  -> false "o valor mesmo"
|| -> true or false  ->vai retornar "o valor verdadeiro"


FALSY  -  valores válidos como falso - que finge falso | 
false
'' "" ``
0
null / undefined
NaN
// diferente desse e dado como true
 
*/
//&&
/*function falaOi () {
    return 'oi';
}

let vaiExecutar = 'Joãozinho';

console.log(vaiExecutar && falaOi());*/

//

const corUsuario = 'vermelho';
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);