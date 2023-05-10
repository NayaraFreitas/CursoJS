// a gente trabalha com promises quando é uma coisa asincrona , quando a gente não tem certeza quando vai terminar
function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}


function esperaAi(msg, tempo){

    return new Promise((resolve , reject) => {
        /*if(typeof msg !== 'string') {
        reject('CAI NO ERRO');
        return;
        }*/
        setTimeout(()=>{ 
            if(typeof msg !== 'string') {
            reject('CAI NO ERRO');
                    return;
            }

        resolve(msg.toUpperCase() + '- Passei na promise');
        return;
        }, tempo);

    }); 

}

function baixaPagina() {
    const emCache = true;

    if(emCache) {
        return Promise.reject('Página em cache')
    }else {
        return esperaAi('Baixei a página', 3000);
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina)
    })
    .catch(e => console.log('ERRO', e));


// --- Metodos --- //
//Promise.all Promise.race Promise.resolve Promise.reject
const promises = [
    //'Primeiro valor',
    esperaAi('Promise 1', rand(1, 5)),
    esperaAi('Promise 2', rand(1, 5)),
    esperaAi('Promise 3', rand(1, 5)),
    esperaAi(1000, rand(1, 5)),
    //'Outro valor'
];

/*Promise.all(promises)
.then(function(valor){
    console.log(valor)
})
.catch(erro => {
    console.log(erro)
});*/

/*Promise.race(promises)  // entrega oque ja foi resolvida - ou seja a primeira
.then(function(valor){
    console.log(valor)
})
.catch(function(erro){
    console.log(erro);
});*/
