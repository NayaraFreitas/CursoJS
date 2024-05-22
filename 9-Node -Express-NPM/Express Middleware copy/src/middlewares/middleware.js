exports.middlewareGlobal = (req, res, next) =>{
    //console.log();
    //console.log('Passei no middlware global'); // agr precisa importar isso no serve

    if(req.body.cliente) {
        req.body.cliente = req.body.cliente.replace('Miranda', 'Não USe MIRANDA')
        console.log();
        console.log(`Vi que você postou ${req.body.cliente}`);
        console.log();

    }
    next();

    //console.log();

    
} // não pode esquecer do next senão a resqisição não termina

exports.outroMiddleware = (req,res,next) => {
    next();
}