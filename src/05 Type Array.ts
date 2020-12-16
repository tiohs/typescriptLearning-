// Array <T> - T[] posso add o meu proprio tipo
function mulArgs(...args: Array<number>): number {
    return args.reduce((ac, valor) => ac * valor, 1);
}

console.log(mulArgs(2,2));
