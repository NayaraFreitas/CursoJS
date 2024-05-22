require('dotenv').config();

const express = require('express'); // pra carregar o express
const app = express();   /// -------^
const mongoose = require('mongoose'); // para poder conectar o database
//const conectionString = ''; // url do servidor no MongoDb - FOI OCULTADO PELO DOTENV
mongoose.connect(process.env.CONECTIONSTRING)//{useNewUrlParser: true} não tem necessida de usar por conta da version do node - CONECTOU O SERVIDOR E OCLTOU COM O DOTENV

.then(()=> { // quando apromise for resolvida concta  abase de dados
  //console.log('Conectei a base de dados')
  app.emit('pronto') //emitir um sinal quando conectar
})// isso retornar um promise 
.catch(e => console.log(e)) // caso há algun erro ( mas precisaria elaborar mais para poder mostrar ao cleinte)



const routes = require('./routes') //requerindo as routas
const path = require('path') // caminhos absolutos
const { middlewareGlobal, outroMiddleware } = require('./src/middlewares/middleware') // importando o middleware


app.use(express.urlencoded({extend: true})); // para tratar o req.body - senão parecerar undefind

app.use(express.static(path.resolve(__dirname, 'public'))); // Para arquivos estáticos

app.set('views', path.resolve(__dirname, 'src', 'views'));// passando o caminho absoluto (com o node o __dirname busca os diretórios ai não precisa por './src/views'  o src e views vai como parametro)
app.set('view engine', 'ejs'); // view engine oara funcinar  (ejs para poder meio que usa html e poder colocar js sem problema)

//Nossos prorpios middleware -21/05/2024
app.use(middlewareGlobal)

app.use(routes) // para usar as rotas

//22/05/2024
app.on('pronto', () =>{ // isso é uma boa ideia pos se a base de dados não se conectar primeiro não terá como o cliente acessar
  //colocando o caminho 
  app.listen(3000, ()=>{    // criando o local host usando a porta 3000 que não é oficializada do protocolo TCP - local host basico para teste
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000') ; 
  });

}) // quando o aplicativo tiver pronto por conta do app.emit 

