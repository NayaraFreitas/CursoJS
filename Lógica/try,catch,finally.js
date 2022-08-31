// tratando e lançando erros
  // posso criar outro try dentro do try 
/*try{ 
 // executada quando não há erros 
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e gerou errou');
    console.log('Fechei o arquivo');

    try{
        console.log(b)
    }catch (error){
        console.log('Deu erro');
    }




} catch (err){
// executada quando há erros
    console.log('Tratando o erro');
} finally {
    // será executado sempre 
    console.log(' FINALLY : Eu sempre sou executado');
}*/
 
function retornaHora(data) {
    if (data && !(data instanceof Date)) {  // se a data for enviada e não for uma instancia de date 
        throw new TypeError('Esperando instância de Date')
    }
 
    if (! data) {
        data = new Date();
    }
 
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false

    });
}

try{
    const data = new Date('1-1-1970 12:58:12');
    const hora = retornaHora();
    console.log(hora);
}catch (e){
  //tratar erro
} finally{
    console.log('Tenha um bom dia');
}



/*const data = new Date('1-1-1970 12:58:12');
const hora = retornaHora(11);
console.log(hora);*/