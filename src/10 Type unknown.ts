// Type UNKNOWN Ele é um tipo any mais seguro, ele não funciona sem ser checado qual é o tipo   Ex :
// Posso usar em typagem onde recebe vairos tipos de dados

let x: unknown;

x = 1;

if (typeof x === 'number'){
    console.log(x + 1)
}
