// IIFE - immediatly inkoed function expression

/*function qualquerCoisa() {
    console.log(1112234);
}
qualquerCoisa(); // assim chama imediatamente , mas toca no escopo global*/

/*(function(){
   const nome = 'Nayara';
   console.log(nome);
})();  // dessa forma cham imediatamente  e não toca no escopo global

const nome = 'Maya' // global*/

(function(idade, peso , altura){  // dentro dos parentes função anonima

    const sobrenome = "Freitas";
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Nayara'))
    }

    falaNome();
    console.log(idade,peso, altura);
})(21, 90, 1.70);
