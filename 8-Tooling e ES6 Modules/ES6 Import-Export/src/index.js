// console.log('Testando o webpack')

//import { nome2 , sobrenome , idade , soma, Pessoa } from './modulo1';

//-- importação normal
//console.log(nome2,  sobrenome , idade);
//console.log(soma(5, 5));

//-- importou a classe
//const p1 = new Pessoa ('Nayara', 'Otávio')
//console.log(p1);

//---importando tudo
// import * as MeuModulo from './modulo1'
// console.log(MeuModulo);

//-- importando com default
// import qualquerNome from './modulo1';
// console.log(qualquerNome(5, 5))

//- importando com default e normal
import multiplica, {nome, sobrenome ,idade, soma} from './modulo1';
console.log(multiplica(5, 40));
console.log(nome, sobrenome, idade, soma(5,5))
