const express = require('express'); // pra carregar o express
const app = express();   /// -------^
const routes = require('./routes')


app.use(express.urlencoded({extend: true})); // para tratar o req.body - senão parecerar undefind

app.use(routes)

app.listen(3000, ()=>{
    console.log('Acessar http://localhost:3000')
  console.log('Servidor executando na porta 3000') ; 
});