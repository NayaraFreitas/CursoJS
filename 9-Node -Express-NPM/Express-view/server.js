const express = require('express'); // pra carregar o express
const app = express();   /// -------^
const routes = require('./routes') //requerindo as routas
const path = require('path') // caminhos absolutos

app.use(express.urlencoded({extend: true})); // para tratar o req.body - senão parecerar undefind

app.set('views', path.resolve(__dirname, 'src', 'views'));// passando o caminho absoluto (com o node o __dirname busca os diretórios ai não precisa por './src/views'  o src e views vai como parametro)
app.set('view engine', 'ejs'); // view engine oara funcinar  (ejs para poder meio que usa html e poder colocar js sem problema)

app.use(routes) // para usar as rotas

app.listen(3000, ()=>{    // criando o local host usando a porta 3000 que não é oficializada do protocolo TCP - lcoal host basico para teste
  console.log('Acessar http://localhost:3000')
  console.log('Servidor executando na porta 3000') ; 
});