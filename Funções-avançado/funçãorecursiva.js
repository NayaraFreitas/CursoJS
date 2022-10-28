// Uma função em que ela se chama por si , como uma ""laço""
// o javascript tem um limite de de função recursiva 

function recursiva(max){

    console.log(max); // com console aqui começo com 0
    if(max >= 50) return;  // para a função aqui // dando um limite para recursiva
    max++;
                   // <-com o console aqui começa no 1
    recursiva(max);
}

recursiva(0);