// Tuble
const dadosClientes: [number, string] = [1, 'Hamilton Silva'];
const dadosClientes2: [number, string, string] = [1, 'Hamilton Silva', 'Sala 1'];
dadosClientes.push(1);
dadosClientes.push(2);

console.log(dadosClientes);

// readonly array

const array1: readonly string[] = ['Hamilton Silva', 'Carlos'];
const array2: ReadonlyArray<string> = ['a', 'c', 'v'];

let dados = dadosClientes2.push(4);
let dados2 = dadosClientes2.push('Ola');

console.log(dados, dados2);

