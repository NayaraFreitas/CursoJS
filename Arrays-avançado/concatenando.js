const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
//const a3 = a1.concat(a2, [7, 8,9], 'Nayara');
// ... rest no final para resto  -> ... spread no começo 

const a3 = [...a1,'Nayara' ,...a2, ...[7,8,9]]; //...spread , espalhar o a1 eo a2 , uma forma de concaternar

console.log(a3); 