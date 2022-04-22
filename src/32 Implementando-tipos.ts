// Criar um tipo para uma `class` com `Type`
// No primeiro exemplo eu crio com uma `class`
// No Segundo recrio com um `Type`
// Uso primeiro quando quero privacidade
// Segundo para classes que usam public

export abstract class TipoPesso {
    protected abstract nome: string;
    protected abstract sobrenome: string;
    protected abstract nomeCompleto(): string;
}

export class Pesso extends TipoPesso {
    constructor(protected nome:string, protected sobrenome: string) {
        super();
    }
    protected nomeCompleto(): string {
        return this.nome + ' ' + this.sobrenome;
    }
}


// Sempre que vou usar um tipo a uma classe devo usar `implements`
type TipoPessoa = {
    nome: string;
    sobrenome: string;
    nomeCompleto(): string;
}

export class Pessoa implements TipoPessoa {
    constructor(public nome:string, public sobrenome: string) {

    }
    nomeCompleto(): string {
        return this.nome + ' ' + this.sobrenome;
    }
}


