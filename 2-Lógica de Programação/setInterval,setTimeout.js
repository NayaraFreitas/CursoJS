function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pr-BR',{
        hour12: false
    });
}

/*function funcaoDoInterval(){
    console.log(mostraHora());
}*/

// não precisa criar outra função , basta usar um fuction anonima(fastamas slaá)

const timer = setInterval(function(){  // o setInterval ele  não para , tem que forçar para parar , pode jogar o setIterval numa variavel
    console.log(mostraHora());
}, 1000);  // o 1000 é de milisegundos 

setTimeout(function(){
    clearInterval(timer);
},10000);

setTimeout(function(){
    console.log('ÓLa Mundo!')
}, 3000);





//console.log(mostraHora());