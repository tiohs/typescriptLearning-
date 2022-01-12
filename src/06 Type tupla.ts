// Tuble
const dadosClientes: [number, string] = [1, 'Hamilton Silva'];
const dadosClientes2: [number, string, string] = [1, 'Hamilton Silva', 'dados'];
dadosClientes.push(1);
dadosClientes.push('Ola');

console.log(dadosClientes);

// readonly array

const array1: readonly string[] = ['Hamilton Silva', 'Carlos'];
const array2: ReadonlyArray<string> = ['a', 'c', 'v'];

let dados = dadosClientes2.push(4);
 dadosClientes2.push('Ola');
 let dados2 = dadosClientes2.push('Olsa');
console.log(dados, dados2);

