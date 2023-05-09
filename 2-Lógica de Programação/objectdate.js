/*const tresHoras = 60 * 60 * 3 * 1000; 
const umDIa = 60 * 60 * 24 *1000;
const data = new Date(0 + tresHoras + umDIa); //1/1/1970 Timestamp unix ou epóca unix*/

//                      ano,mes,dia - horas,mins,seg, milesimos --- o messes no js começa pelo 0 , então 3 é abril
//const data = new Date(2019,3,20, 15,14,27, 1000);

/*const data = new Date(1660087585649);
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1);
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia semana', data.getDay()); // 0 - domingo, 6 sabado
console.log(data.toString());*/

//console.log(Date.now()); //milesimos de segundos
function zeroAEsquerda (num){
    return num >= 10 ? num : `0${num}`
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
   const mes = zeroAEsquerda(data.getMonth() + 1);
   const ano = zeroAEsquerda(data.getFullYear());
   const horas = zeroAEsquerda(data.getHours());
   const min = zeroAEsquerda(data.getMinutes());
   const seg = zeroAEsquerda(data.getSeconds());

   return `${dia}/${mes}/${ano}  ${horas}:${min}:${seg}`;

}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);