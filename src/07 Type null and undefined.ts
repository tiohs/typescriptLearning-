// undefiend é quando uma variável não é difinida e quando a gente quero returna Ex

let x;
if(x === undefined) x = 20;
console.log(x*2);

export function createPerson(name: string, firstName: string): {
    name: string;
    firstName?: string;
}{
    return {
        name,
        firstName,
    };
}

// O null mais usado pelo o desenvolvidor Ex :

export function squareOf(x: any){
    if(typeof x !== 'number') return null;
    return x * x;
}
let valor = squareOf(2);
if (valor === null){
    console.log('Valor invalido ');
} else {
    console.log(valor * 2);
}
