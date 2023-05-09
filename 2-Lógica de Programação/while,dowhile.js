/*const nome = 'Nayara';

let  i = 0;

while (i < nome.length) {
    console.log(nome[i]);
    i++;
}*/

// --------------------------- While --- checa a condição e ai executa o laço -- while significa enquanto

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = 10  //random(min, max);

while (rand !== 10) {  // quando o random for diferente de 10
    //rand = random(min , max);
    console.log(rand);
}

console.log('#########')

// ---------------- DO While - ----------------- significa faça enquanto (literal)

do {
   // rand = random(min, max);
    console.log(rand);
}while(rand !== 10);