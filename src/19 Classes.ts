export class Empresa {
    public readonly name: String;
    constructor(name: string) {
        this.name = name;
    }
}

const empresa1 = new Empresa("Uniplace");

console.log(empresa1.name);
