// Getters - metodo para returno um valor da class
// Setters - Para setar um valor a class
export class Personal {
    constructor(
        private name: string,
        private firstName: string,
        private age: number,
        private _bi: string
    ){
        this.bi = _bi;
    }
    set bi(bi: string) {
        this._bi = bi;
    }
    get bi(): string {
        return this._bi;
    }
}

const personal = new Personal('Hamilton', 'Silva', 15, '7161');

console.log(personal.bi)
