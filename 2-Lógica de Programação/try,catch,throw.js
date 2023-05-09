// tratando e lançando erros


/*try {
    console.log(nãoExisto)
} catch(err) {
    console.log('nãoExisto não existe');   // não pode exibir os erros para o usuario , pois não é seguro
    console.log(err);
}*/

function soma(x, y){
    if (typeof x !== 'number' || typeof y !== 'number'){   // lançar um erro
        throw new Error('x e y precisam ser números.');
    }

    return x + y
}


try {
    console.log(soma(1,2));     /// para solucionar o erro do throw colocar dentro do try e catch
    console.log(soma('1',2));
}catch(error) {
    //console.log(error);
    console.log('Algumar coisa mais agradavel para o usuário');
}



