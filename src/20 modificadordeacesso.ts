export class Empresa {
    private readonly name: String;
    private readonly colaboradores: Colaborador[] = [];
    protected readonly cnpj: string;

    constructor(name: string, cnpj: string) {
        this.name = name;
        this.cnpj = cnpj;
    }
    /**
     * addColaborador
     */
    public addColaborador(colaborador: Colaborador): void {
        this.colaboradores.push(colaborador);
    }
    /**
     * Index colaborador
     */
    public Index(): void {
        this.colaboradores.forEach((a) => {
            console.log(`${a.firstName} ${a.lastName}`);
        });
    }
    public Name(): String {
        return this.name;
    }
}

export class Colaborador {
    constructor(
        public readonly firstName: string,
        public readonly lastName: string
    ) {}
}
const empresa1 = new Empresa("Uniplace", "12653-232719-12327");
const colaborador: Colaborador = new Colaborador("Hamilton", "Silva");
empresa1.addColaborador(colaborador);
empresa1.Index();
console.log(empresa1.Name());
