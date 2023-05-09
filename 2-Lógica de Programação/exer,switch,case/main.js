/*const h1 = document.querySelector('.container h1');
const data = new Date();

function getDiaSemanaTexto (diaSemana) {
    let diaSemanaTexto;
    
    switch (diaSemana){
        case 0:
           diaSemanaTexto ='Domingo';
           return diaSemanaTexto;
        case 1:
        diaSemanaTexto = 'Segunda-Feira';
           return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça-Feira';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta-Feira'
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta-Feira';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta-Feira';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = '';
            return diaSemanaTexto;
    }
   
}

function getNomeMes (numeroMes){
    let nomeMes;

    switch (numeroMes){
        case 0:
            nomeMes = 'Janeiro';
            return nomeMes;
        case 1:
            nomeMesTexto = 'Fevereiro';  
            return nomeMes; 
        case 2:
            nomeMes = 'Março';
            return nomeMes;
        case 3:
            nomeMes = 'Abril';
            return nomeMes;
        case 4:
            nomeMes = 'Maio';
            return nomeMes;
        case 5:
            nomeMes = 'Junho'
            return nomeMes;
        case 6:
            nomeMes = 'Julho';
            return nomeMes;
        case 7:
            nomeMes = 'Agosto';
            return nomeMes;
        case 8:
            nomeMesTexto = 'Setembro';
            return nomeMes;
        case 9:
            nomeMesTexto = 'Outubro'
            return nomeMes;
        case 10:
            nomeMes = 'Novembro'
            return nomeMes;
        case 11:
            nomeMes = 'Dezembro';
            return nomeMes;
    }
}*/

/*function criaData (data) {
    const diaSemana = data.getday();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMesTexto(nomeMes);

   return (`${nomeDia}, ${data.getDate()} de ${nomeMes}` +
   `de ${data.getFullYear()} ${data.getHours()}: ${data.getMinutes()}`);
}

h1.innerHTML= criaData(data);*/

/*h1.innerHTML = getDiaSemanaTexto(data.getDay());
h1.innerHTML += ', '
h1.innerHTML += (data.getDate());
h1.innerHTML += ' de  '
h1.innerHTML += getNomeMes(data.getMonth());
h1.innerHTML += ',  às '
h1.innerHTML += (data.getHours());
h1.innerHTML += ':'
h1.innerHTML +=(data.getMinutes());
h1.innerHTML += ' Horas.'*/

const h1 = document.querySelector('.container h1');
const data = new Date();
/*h1.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle: 'full'});
h1.innerHTML += ' '
h1.innerHTML += data.toLocaleTimeString('pt-BR', {timeStyle:'short'});*/


//fazer coom array //
/*function getNomeMes (numeroMes) {
    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio']
    return getNomeMes[numeroMes]
}*/
