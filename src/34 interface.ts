// Interface 99,9 por cento dos casos são iguais a elias Type
// O type tem uma va


interface TipoPessoa {
    nome: string;
    sobrenome: string;
    nomeCompleto(): string;
}

interface TipoPessoaNome {
    nome: string;
}

interface TipoPessoaProps extends TipoPessoa, TipoPessoaNome {

}
export class Pessoa implements  TipoPessoaProps {
    constructor(public nome:string, public sobrenome: string) {

    }
    nomeCompleto(): string {
        return this.nome + ' ' + this.sobrenome;
    }
}


