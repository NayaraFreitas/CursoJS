// exercicio , com string e number
// console.log('Meu nome é "Nayara" . Estou aprendendo JavaScript ás', 20 ,'da noite');

// exercicio  de const

/* Nayara Freitas Teles tem 21 anos, pesa 90 kg tem 1,7 de altura e seu IMC é de" 25.9259259259259254"
Nayara nasceu em 2000*/
const nome = 'Nayara ';
const sobrenome = 'Teles';
const idade = 22;
const peso = 90;
const altura = 1.70;// em m
let imc = peso / (altura * altura);
let anoNascimento = 2022 - idade ;

console.log(nome,sobrenome, "tem", idade,"anos,pesa",peso,"kg");
console.log("e", altura ,"m de altura e seu IMC é de",imc)
console.log(nome, "nasceu no ano",anoNascimento ,".")
// como colocar a variavel no consolo.log , pode ser com crase `´ , ou com ${} , e tambem em vez de usar a virgula usar o + //

