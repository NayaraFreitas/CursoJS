exports.paginaInicial = (req, res) => { 
        res.render('index');
    return

   
}

exports.trataPost = (req, res) => {
    res.send(req.body); // onde está recendo a rota do post
};