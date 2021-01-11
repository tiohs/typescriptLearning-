export class Empresa {
    public readonly nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }
}

const Empresa1 = new Empresa("Uniplace");

console.log(Empresa1.nome);
