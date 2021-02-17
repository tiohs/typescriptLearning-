export class Pessoa {
    constructor(
        public nome: string,
        public sobrenome: string,
        private idade: number,
        protected cpf: string
    ) {}
    getIdade(): number {
        return this.idade;
    }
    getCpf(): string {
        return this.cpf;
    }
    getNomeCompleto(): string {
        return this.nome + " " + this.sobrenome;
    }
}

export class Aluno extends Pessoa {}
export class Cliente extends Pessoa {}

const pessoa = new Pessoa("Hamilton", "Silva", 10, "1029282");
const aluno = new Aluno("Hamilton", "Miranda", 18, "klswduh23");
const cliente = new Cliente("Antonia", "Marcio", 20, "djhudiew");

console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
