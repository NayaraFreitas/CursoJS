//  um random de segundos para simular ,  qunado mandandd algo para banco de dados ou esta´usando uma api

function rand(min=0, max=3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) =>{
        setTimeout(()=> {
            if(typeof msg !== 'string'){
                reject('CAI NO ERRO');
                return;
            }

            resolve(msg.toUpperCase() + '- Passei na promise')
            return;
        }, tempo);
    });
}

// esperaAi('Fase 1', rand())
//     .then(valor => {
//         console.log(valor)
//         return esperaAi('Fase 2', rand());
//     })
//     .then(fase => {
//         console.log(fase)
//         return esperaAi('Fase 3', rand());
//     })
//     .then(outrafase => {
//         console.log(outrafase);
//         return outrafase
//     })
//     .then(ultimafase => {
//         console.log('Terminamos na fase' , ultimafase)
//     })
//     .catch(e => console.log(e))

//* trocando then e catch com para async e await */

async function executa() {  // o async e o await ficnado juntas , se não usar o async não tem como usar o await dentro da função
    try{
    const fase1 = esperaAi('Fase 1', 1000); /// se estiver sem o await  pode ficar como pending na promise
    console.log(fase1);

    setTimeout(function(){
        console.log('Essa promise estava pendente')
    }, 1100);

    const fase2 = await esperaAi('Fase 2', rand());
    console.log(fase2);
    
    const fase3 = await esperaAi('Fase 3', rand());
    console.log(fase3);

    console.log('Terminamos na fase:', fase3)
    }catch(e){
        console.log(e);
    }
}

executa();

/* Estados do Promise
pending -> pendente
fullfield -> representação de sucesso , resolvida
reject -> rejeitada
*/

const teste2 = esperaAi('qlq', 5000);
console.log(teste2); // fica pendente posi a a ultima não foi executada ainda , por isso se usa then oe catch ou try e catch , e o async e o await dentro ...