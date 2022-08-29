// Operação Ternária -> ? : <-
//(condição) ? 'valor para verdadeiro' : 'valor para falso';
 

const portuacaoUsuario = 1000;
const nivelUsuario = portuacaoUsuario >= 1000 ?'Usuario VIP' : 'Usuario Nomarl';

const corUsuario = null
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao);
    //  igual ao if else de baixo
    //
/*if (portuacaoUsuario >= 1000){
    console.log('Usuario VIP');

} else {
    console.log('Usuario Normal');
}*/



