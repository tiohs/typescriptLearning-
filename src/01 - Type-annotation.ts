
// Tipos básicos (aqui ocorre inferência de tipos )
let nome: string = 'Luiz'; // Qualquer tipo de string
let idade: number = 0xF00d; // Tipo numero
let adulto: boolean = true; // True ou False
let simbolo: symbol = Symbol('Qualquer-symbol'); // Symbol
// let big: bigint = 10n; // bigint

// Quando a gente criar os nosssos tipos teem que ser letra maiuscula

// Array
let arrayToNumber : Array<number> =  [1, 1, 3];
let arrayToNumber2 : number[] = [1, 2, 3, 4];

let arrayToString : Array<string> = ['a', 'b'];
let arrayToString2 : string[] = ['a', 'b'];

console.log(nome);

// Objectos

let pessoa: {nome: string, idade: number, adulto?: boolean} = {
    idade: 10,
    nome: 'Hamilton Silva'
};
// O ponto de intorrogação torna o adulto opcional

// Função

function soma(x: number, y: number): number {
    return x + y;
}

const soma2 : (x: number, y: number) => number = (x, y) => x + y;

