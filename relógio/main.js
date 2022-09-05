
 // selecionando as classes 
/*const iniciar = document.querySelector('.iniciar');//
const pausar = document.querySelector('.pausar');//     /com o document.addeventlistener já esta adicionado as classes
const zerar = document.querySelector('.zerar');*///



const relogio = document.querySelector('.relogio');

function getTimeFromSecond(second) { // escopo   // função para criar os segundos do relogio
    const data = new Date(second * 1000);    // tranformando em milisegundos
    return data.toLocaleTimeString('pt-BR',{ // para colocar no fuso horario do brasil
        hour12: false,
        timeZone: 'UTC'                      // para zerar as horas
    } );
}

let second = 0;// pros segundo começar no 0
let timer ;

function startClock() {  // escopo  // função para começar o relogio
   timer = setInterval( function() {  // usar o setInterval para os segundo ser corrido
        second ++;   // colocquei second ++ para ir de um em 1 segundos
        relogio.innerHTML = getTimeFromSecond(second);   // passei o segundos pro html com a função de criar o segundos e o segundo que começa com 0 
   }, 1000 ); // par aocntar de 1 em 1 segundos
}

document.addEventListener('click', function(e){
    //console.loge'e.target'; // vai me falar qual elemento está sendo clicado
    const el = e.target;
    if(el.classList.contains('zerar')){
         relogio.classList.remove('pausado');
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';  // para voltar ao estado inicial do relogio 
        second = 0;
    }

    if(el.classList.contains('iniciar')){
        clearInterval(timer); // clear para parar o setInterval
        startClock();
    }

    if(el.classList.contains('pausar')){
        clearInterval(timer);  
        relogio.classList.add('pausado');
    }
});










 ///      | a parte de cima e simplificando o que está em baixo



 // adicionando um evento e criando uma função dentro para pode aparecer um alert , como o click

/*iniciar.addEventListener('click', function(event){  // evento de click para os segundos começar a correr
    relogio.classList.remove('pausado');
    clearInterval(timer); // clear para parar o setInterval
    startClock();
});

pausar.addEventListener('click', function(event){
    clearInterval(timer);  
    relogio.classList.add('pausado'); // para quando pausar fique vermelho
});

zerar.addEventListener('click', function(event){
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';  // para voltar ao estado inicial do relogio 
    second = 0;
});*/