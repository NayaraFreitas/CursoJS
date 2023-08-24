/*const cachorro = require('./b/c/d/mode2'); // chamando a função parecido com export default no ES6

module.exports = cachorro*/

// const pet = new cachorro('Lara')

// pet.latir();


//variaveis internar dentro do modulo  -- caminho absoluto 
//console.log(__filename); //nome do arquivo atual
//console.log(__dirname); //nome da pasta atual

//---------------------------------

/*const path =require('path');
console.log(__dirname);
console.log(path.resolve(__dirname, '..', '..', 'arquivos', 'imagens')); // caminhando pelas pastas*/

const Cachorro = require('./b/z/mod3.js');

const c1 = new Cachorro('Lara');
c1.latir();

