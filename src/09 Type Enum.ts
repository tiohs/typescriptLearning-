// Enum é usado para quando alguém tem mais opcação do que o esperado . Ele é um tipo e um valor

enum Cores {
    VERMELHO, // 0
    AZUL, // 1
    AMARELO // 2
}
enum Cores {
    C = 4, // 0
    D, // 1
    E // 2
}

console.log(Cores);
console.log(Cores.VERMELHO);
console.log(Cores[0]);

console.log(Cores);
console.log(Cores.VERMELHO);
console.log(Cores[0]);

// Caso eu queira que o Vermelho fosse 10,Azul = 20, Amarelo = 30

enum Cores1 {
    VERMELHO = 10, // 10
    AZUL = 20, // 20
    AMARELO = 30, // 30
    BRANCO = '#fff', // O parametro seguinte tem que ser numerico para ele saber como continuar a numeração
    PRETO = 0
}

console.log(Cores1);
console.log(Cores1.VERMELHO);
console.log(Cores1.BRANCO);
