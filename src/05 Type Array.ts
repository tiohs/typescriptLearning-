// Type Array
// Formas de representação onde o tipo é reprensentado por T e pode receber os
// valores string, number, boolean.
// Array <T> - T[] posso add o meu proprio tipo
// Ex :
export function mulArgs(...args: Array<number>): number {
    return args.reduce((ac, valor) => ac * valor, 1);
}

export function concatenaString(...args: string[]): string {
    return args.reduce((ac, valor) => ac + valor);
}

export function toUpperCase(...args: string[]): string[] {
    return args.map((valor) => valor.toUpperCase());
}

console.log(mulArgs(2,2));
console.log(concatenaString('a','b', 'c'));
console.log(toUpperCase('a','b', 'c'));
