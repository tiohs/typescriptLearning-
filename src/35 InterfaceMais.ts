// Uma das grande diferença do Type e Interface é merge
// readonly diz que não podes alterar uma propriedade

interface Pessoa {
    nome: string;
}

interface Pessoa {
    sobrenome: string;
}

const pessoas: Pessoa = {
    nome: 'Luiz',
    sobrenome: 'Silva'
}
