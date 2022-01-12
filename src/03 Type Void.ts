// Type void é mais usado nas funções que não retornam nada Ex :
function semRetorno (...args: string[] ): void{
    console.log(args.join(', '));
}
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    exibirNome(): void{
        console.log(this.nome, this.sobrenome);
    }
}
semRetorno('Oi', 'Tudo Bem');
pessoa.exibirNome();
export { pessoa };

// Dica pessoal : retorno de funções e metodos
