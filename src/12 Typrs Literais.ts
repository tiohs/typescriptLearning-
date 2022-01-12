// Usar valores como type
let x = 10;
const y = 10;
let a:100 = 100;
let c = 100 as const;

const pessoa = {
    nome: 'Luiz' as const,
    sobrenome: 'Miranda',
};
pessoa.nome = 'Luiz';

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string{
    return cor;
}
const cor: number = escolhaCor('Vermelho').indexOf('V');
console.log(cor);

// Module mode
export default 1;
