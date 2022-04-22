// Interface 99,9 por cento dos casos são iguais a elias Type
// O type tem uma va


type TipoPessoa = {
    nome: string;
    sobrenome: string;
    nomeCompleto(): string;
}
type TipoPessoaNome = {
    nome: string;
}
export class Pessoa implements TipoPessoa, TipoPessoaNome  {
    // Uma das formas de reduzir essa implements é escrever a interceção
    // type Tipo = TipoPessoa, TipoPessoaNome depois impletar somente o tipo
    // Exemplo :
    // type Tipo = TipoPessoa & TipoPessoaNome;
    // export class Pessoa implements Tipo  {
    constructor(public nome:string, public sobrenome: string) {

    }
    nomeCompleto(): string {
        return this.nome + ' ' + this.sobrenome;
    }
}


