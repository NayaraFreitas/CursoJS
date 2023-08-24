const express = require('express'); // pra carregar o express
const app = express();   /// -------^

//http://facebook.com/profiles/12345?campanha=googleleads&nome_campanha=sheila


app.use(express.urlencoded({extend: true})); // para tratar o req.body - senão parecerar undefind

//  a requisição e a resposta 
app.get('/', (req, res) => { 
    res.send(`
        <form action="/" method="POST">
        Nome: <input type="text" name="nome">
        <button>Enviar</button>
        </form>
    `);
});

app.get('/testes/:idUsuarios?/:parametro?' , (req, res) => {
    // /profile/3 - parametro
    // /profile/?chave=1=valor1&chave2=valor2 - query
    console.log(req.params); 
    console.log(req.query);
    res.send(req.query.facebookprofile);
});

app.post('/' , (req,res) => {
    // 
    console.log(req.body);
    res.send(`Oque você me enviou foi : ${req.body.nome}`);
})

app.get('/contato', (req,res) => {
    res.send('Obrigado por entrar em contato com a gente.');
})

app.listen(3000, ()=>{
    console.log('Acessar http://localhost:3000')
  console.log('Servidor executando na porta 3000') ; 
});