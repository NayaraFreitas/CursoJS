const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');

const escreve = require('./modules/escrever');
const ler = require('./modules/ler');

// const pessoas = [
//     {nome:'João'},
//     {nome:'Maria'},
//     {nome:'Eduador'},
//     {nome:'Joana'},

// ];

// const json = JSON.stringify(pessoas, '', 2);
// escreve(caminhoArquivo, json)

async function leArquivo(caminho) {
    const dados = await ler(caminho);
    renderizarDados(dados);
}

function renderizarDados(dados){
    dados = JSON.parse(dados);

    dados.forEach(val =>  console.log(val.nome));
}

leArquivo(caminhoArquivo);

/*const dadosArquivo = leArquivo(caminhoArquivo)
    .then(dados => console.log(dados))
    .catch( (e) => console.log(e));
*/

