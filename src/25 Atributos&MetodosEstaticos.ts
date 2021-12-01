

// Só é possivel ter acesso a metodos estaticos pela class melhor dizer sem instaciar
// Não é necessario escrever new Class() apenas chamar o metodo sem instanciar
// Class().name
export class Personal {
    static ageStart = 0;
    static cpfStart = '000.000.000-00';

    constructor(
        public name: string,
        public lastName: string,
        public age: number,
        public cpf: string
    ){

    }
    static creatPerson(name: string, lastName: string): Personal {
       return new Personal(name, lastName, Personal.ageStart, Personal.cpfStart)
    }

}

const personal = new Personal('Hamilton', 'Silva', 15, '000-000.00');
console.log(Personal.creatPerson('Paulina', 'Silva'));


