const nome = 'Nayara';
const sobrenome = 'Freitas';
const idade = 22;

function soma(x, y){
    return x + y;
}

export {nome, sobrenome , idade , soma}

//export { nome as nome2, sobrenome, idade, soma};

// export class Pessoa {
//     constructor(nome , sobrenome) {
//         this.nome = nome;
//         this.sobrenome = sobrenome;
//     }
// }

export default (x ,y) => x *y;