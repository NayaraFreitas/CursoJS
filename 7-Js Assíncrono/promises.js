//Promesas
// com o promise  o codigo fica limpo e não tem a necessidade de fazer callback , pois eles tem o funcionamento parecido,que solucionar a sincronização

// para fazeer a promise , fazer uma function que demore 

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}


function esperaAi(msg, tempo){

    return new Promise((resolve , reject) => {
        if(typeof msg !== 'string') reject(new Error('ERRO'));

        setTimeout(()=>{ 
        resolve(msg); // só com isso ja estou resolvendo a promessa
        }, tempo);

    });   // o cronstrutor vai chamar a promise, o pessoal constuma usar arrow function no promise , nessa promesso eu posso resolve ou rejeitar


    
}

esperaAi('Frase 1', rand(1, 3))  // ex: conexão com bd
    .then(resposta => {                                                             //
        console.log(resposta);   // dentro do then posso retorna outra promise         // 
        return esperaAi('Frase 2', rand(1 ,));     //ex: buscando daos da base           //
    })                                                                                  //
    .then(resposta => {                                                                //         
       //return resposta + ' Vai pro outro then'                                      //  
       console.log(resposta)                                                            // ---- encadenhando
       return esperaAi(2222222, rand(1, 3));         //ex:trando os dados da base  //        /// usando numero para usar o reject
    })                                                                              //
    .then(resposta => {                                                             //
        console.log(resposta);                                                       //   
    })                                                                              //
    .then( () =>{                                                                   //    
        console.log('Serei o ultimo a ser exibido'); // ex: exida dados na tela    //
    })                                                                           //   
    .catch( e => {
        console.log('ERRO:', e)
    });  // com o reject e necessário cria uma functon no catch | catch sempre é erro



    //then será executada quando a promise for chamado, o catch quando o erro for capturado, then e catch tbm recebe função
    // os ex: são exmplos do seria em um caso real de promise, para entender por que faz isso

    console.log('Isso será exibido primeiro');  // será exibido primeiro porque as promises são em paralelo


