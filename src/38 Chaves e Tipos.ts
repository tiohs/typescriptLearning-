type Veiculo = {
    marca: string;
    ano: string;
};

// Se mudar em cima o typo muda em baixo o type nesse caso brand, year

type Car = {
    brand: Veiculo['marca']; // Pegando o tipo da chave Veiculo brand
    year: Veiculo['ano']; // Pegando o tipo da chave Veiculo para year
    name: string;
};

const carro: Car = {
    brand: 'Ford',
    year: '2020',
    name: 'Ferrari',
};



