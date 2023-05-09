let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

const resultadoUm = (varA && varB );
const resultadoDois = (varB && varC);
const resultadoTres = (varC && varA);

console.log(resultadoUm, resultadoDois, resultadoTres);

//  OUTRO MODO DE FAZER //

// let varA = 'A'; //B
// let varB = 'B'; //C
// let varC = 'C'; //A

//[varA, varB, varC] = [varB, varC, varA]//