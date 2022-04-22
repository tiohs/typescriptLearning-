// Criando type elias devem começar com letra maiúscula

type Idade = number;
type Pessoa = {
    nome: string;
    idade: Idade;
    salario: number;
    corPreferida?: string;
};

type corRGB = 'Vermelho' | 'Verde' | 'Azul';
type corMik = 'Claro' | 'Magenta' | 'Amarela' | 'Preto';
type corPreferida = corRGB | corMik;

const pessoa: Pessoa = {
    nome: 'Hamilton',
    idade: 19,
    salario: 100_000,
    corPreferida:<corPreferida> 'Amarela'

};

export function setCorPreferida(pessoa: Pessoa, cor: corPreferida): Pessoa{
  return {...pessoa, corPreferida : cor};
}
console.log(setCorPreferida(pessoa, 'Preto'));

export default 1;
