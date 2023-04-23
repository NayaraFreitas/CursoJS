const pessoas = [
    {id:3, nome: 'Luiz'},
    {id:2, nome: 'Nayara'},
    {id:1, nome: 'Maria'},
];

/*const novasPessoas = {};
for (const pessoa of pessoas){
    const {id} = pessoa;
    novasPessoas[id] = {...pessoa};
}*/

const novasPessoas = new Map();
for (const pessoa of pessoas){
    const {id} = pessoa;
    novasPessoas.set(id, {...pessoa});
}
console.log(novasPessoas.get(3));

//          pessoas of novasPessoas
/*for (const [identifier, {id, nome}] of novasPessoas) {    // posso pegar as chaves keys() , os valor values()
    //              pessoas
    console.log(identifier, id, nome);
}*/

novasPessoas.delete(2)
console.log(novasPessoas);