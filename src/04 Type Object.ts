// Esse é o jeito mais inteligente e facil de fazer

// const objectA = {
//     chaveA: 'Valor-A',
//     chaveB: 'Valor-B',
// }

// objectA.chaveA;
// Add Typagem

const objectA: {
    readonly chaveA: string; // Type basico , ele não pode mais altera o valor da chave
    chaveB: string; // Type basico
    chaveC?: string; // Difinindo a chave C como uma string e ela é opcional
    [key: string]: unknown; // Difinindo um chave qua a gente não conhece como string e o seu valor também não sobemos
} = {
    chaveA : 'Ola mundo',
    chaveB : 'God Life'
}

objectA.chaveB = 'Beijamim';


