export class Personal {
    constructor(
        private name: string,
        private firstName: string,
        private age: number,
        private _cpf: string
    ){
        this.cpf = _cpf;
    }

    set cpf(cpf: string) {
        this._cpf = cpf;
    }
    get cpf(): string {
        return this._cpf;
    }
}

const personal = new Personal('Hamilton', 'Silva', 15, '000-000.00');

console.log(personal.cpf)
