//const HomeModel = require("../models/HomeModel");

//-Normalmente não pe usado  e tambem não funcionou comigo 
// HomeModel.create({
//     titulo:'Um titulo de teste',
//     decricao : 'Uma Descrição de Teste.'
// })
// .then(dados => console.log(dados))
// .catch(e => console.log(e));




export function paginaInicial(req, res) { 
        res.render('index');
    return
}
export function trataPost(req, res) {
    res.send(req.body); // onde está recendo a rota do post
}