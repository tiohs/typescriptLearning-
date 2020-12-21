// & ele é uma interceção de um conjunto

type TemNome = {nome : string};
type TemSobreNome = { sobrenome: string};
type TemIdade = {idade : number};

type Pessoa = TemNome & TemSobreNome & TemIdade; // And ou interceção

const pessoa: Pessoa = {
    nome : 'Luiz',
    idade : 12,
    sobrenome : 'Hamilton Silva'
}

console.log(pessoa);
// Exemplo com a interceção

type AB = 'A' | 'B';
type AC = 'A' | 'C';

type intersecao = AB & AC;


export default 1;
