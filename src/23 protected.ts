// Super subscrever os valores da class Pai
export class Empresa {
    public readonly name: String;
    protected readonly colaboradores: Colaborador[] = [];
    private readonly cnpj: string;

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
}

export class Udemy extends Empresa {
    constructor(){
        super("Uniplace", "12653-232719-12327");
    }
    popColaborador(): Colaborador | null {
        const colaborador = this.colaboradores.pop();
        if(colaborador) return colaborador;
        return null;
    }
}
export class Colaborador {
    constructor(
        public readonly firstName: string,
        public readonly lastName: string
    ) {}
}
const empresa1 = new Udemy();
const colaborador: Colaborador = new Colaborador("Hamilton", "Silva");
empresa1.addColaborador(colaborador);
empresa1.Index();
console.log(empresa1.popColaborador());

