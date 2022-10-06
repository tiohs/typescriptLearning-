type Count = {
    total: number;
    entrada: number;
    saida: number;
}

type ArqEnv = {
    type: 'entrada' | 'saida';
    valor: number;
}

class DigitalCart {
    constructor(private  name: String,
        private  count: Count = {
            total: 0,
            entrada: 0,
            saida: 0
        }){
    }

    Entrada(amount: number){
        this.count.entrada += amount;
        this.count.total += amount;
    }

    saida(amount: number){
        this.count.saida -= amount;
        this.count.total -= amount;
    }

    arqEnv(arr: ArqEnv[]){

    }
    showCount(){
        return this;
    }
}

const myCount = new DigitalCart('Hamilton Silva');
const arqEnv = [{ type : 'entrada' , valor : 1000 }, { type : 'saida' , valor : 1000 }, { type : 'entrada' , valor : 1000 }, { type : 'entrada' , valor : 1800 }]
console.log(myCount.showCount());
