// Union type - ele diz que quando uma variável ou um retorno de funcção tem mais de um tipo

import { type } from "os";

function addOrConcat(a: number | string | boolean, b: number | string | boolean): number | string{
    if(typeof a === 'number' && typeof b === 'number') return a + b;
    return `${a}${b}`;
}
// Aqui cubrimos todas as possiblidades

console.log(addOrConcat(10, 10));
console.log(addOrConcat(true, '10'));
console.log(addOrConcat(10, '10'))
