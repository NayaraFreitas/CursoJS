/*const falaNome = require('./mode1');  //.falaNome; posso usar o caminha relativo tbm colocando a função no fnal
                // require('./mode1')// posso importa o caminho completo 
const falaNome = mode1.falaNome; //tbm posso importar assim

console.log(falaNome());*/

// const {nome , sobrenome, falaNome} = require('./mode1'); // da para importar assim tbm
// console.log(nome , sobrenome);
// console.log(falaNome());


//-----------Importando a Classe --------\\

//fazendo destroctor 
const mod1 = require('./mode1');
const {Pessoa} = require('./mode1');

const p1 = new Pessoa('Joana')
console.log(p1)