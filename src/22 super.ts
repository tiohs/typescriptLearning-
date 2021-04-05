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

export class Aluno extends Pessoa {
    constructor(
        nome: string,
        sobrenome: string,
        idade: number,
        cpf: string,
        public sala: number,
    ) {
        super(nome, sobrenome, idade, cpf);
    }
    getNomeCompleto(): string {
        console.log('Fazendo qualquer coisa ');
        return super.getNomeCompleto();
    }
}
export class Cliente extends Pessoa {
    getNomeCompleto(): string {
        return "Cliente :" + this.nome + " " + this.sobrenome;
    }
}

const aluno = new Aluno('Hamilton', 'Silva', 10, '102.2323.132.32', 12);
console.log(aluno.getNomeCompleto());
console.log(aluno);
