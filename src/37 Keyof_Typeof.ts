// typeof no campo do tipo ele transforma em uma tipagem

// Os dois tipo são iguais mais definidamente diferente

type CoresObj = {
    vermelho: string;
    verde: string;
    azul: string;
}
// É igual ao tipo de cima

type CoresObjs = typeof coresObj;

// Usando só a chave do objecto

type CoresObjKeyOf = keyof CoresObjs;

const coresObj = {
    vermelho: 'red',
    verde: 'green',
    azul: 'blue',
};


function traduzirCor(cor: keyof CoresObj, cores: typeof coresObj): string {
    return cores[cor];
}

console.log(traduzirCor('verde', coresObj));
