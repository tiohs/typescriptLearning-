export class Empresa {
    public readonly nome: string; // public não é necessario
    private readonly colaboradores: Colaborador[] = [];
    // Ele é const caso eu queira que não seja alterado devo uso em frente do type
    protected readonly cnpj: string;

    constructor(nome: string, cnpj: string) {
        this.nome = nome;
        this.cnpj = cnpj;
    }
    addColaborador(colaborador: Colaborador) {
        this.colaboradores.push(colaborador);
    }
    showColaboradore(): void {
        for (const colaborador of this.colaboradores) {
            console.log(colaborador);
        }
    }
}
export class Colaborador {
    constructor(
        public readonly nome: string,
        public readonly sobrenome: string
    ) {} // aqui já tem um this
}

const Empresa1 = new Empresa("Uniplace", "11.115.121/0001-11");

const colaborador = new Colaborador("Hamilton", "Silva");
const colaborador2 = new Colaborador("Marcio", "Silva");
const colaborador3 = new Colaborador("Antonia", "Silva");

console.log(Empresa1);
console.log(Empresa1.nome);

Empresa1.addColaborador(colaborador);
Empresa1.addColaborador(colaborador2);
Empresa1.addColaborador(colaborador3);
Empresa1.addColaborador({ nome: "Osmar", sobrenome: "Andre" });
