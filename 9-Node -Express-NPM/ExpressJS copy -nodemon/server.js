const express = require('express'); // pra carregar o express
const app = express();   /// -------^

//      /  CRIAR    LER   ATUALIZAR   APAGAR
//CRUD - CREATE - READ - UPDATE -   DELETE
//      \  POST     GET     PUT      DELETE

//Rotas na aplicação  e é isso que o expressa vai ajudar a resolver
//http://meusite.com/ <-GET -> Entregue a página /
//http://meusite.com/SOBRE <-GET -> Entregue a página / SOBRE
//http://meusite.com/contato <-GET -> Entregue a página / contato

//  a requisição e a resposta 
app.get('/', (req, res) => { 
    res.send(`
        <h2>Preencha o formulário</h2>
        <form action="/" method="POST">
        Nome: <input type="text" name="nome">
        <button>Enviar formulário</button>
        </form>
    `);
});

app.post('/' , (req,res) => {
    res.send('Recebi o formulário');
})

app.get('/contato', (req,res) => {
    res.send('Obrigado por entrar em contato com a gente.');
})

app.listen(3000, ()=>{
    console.log('Acessar http://localhost:3000')
  console.log('Servidor executando na porta 3000') ; 
});