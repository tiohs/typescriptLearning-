// Utilizamos o Padrão de Projecto da Gang of Four
export class Calc {
    constructor(public number: number){

    }
    add(n: number): this {
        this.number += n;
        return this;
    }

    sub(n: number): this {
        this.number += n;
        return this;
    }

    mul(n: number): this {
        this.number += n;
        return this;
    }

    div(n: number): this {
        this.number += n;
        return this;
    }
}

export class SubCalc extends Calc {
    pow(n: number): this {
        this.number **= n;
        return this;
    }
}

const calc = new SubCalc(5);
// Chamda em cadeia
calc.add(5).sub(5).mul(3).pow(2);

console.log(calc);

// Builder - GoF

export class RequestBuilder {
    private method: 'get' | 'post' | null = null;
    private url: string | null = null;

    setMethod(method: 'get' | 'post') {
        this.method = method;
        return this;
    }
    setURL(url: string) {
        this.url = url;
        return this;
    }
    send():void {
        console.log(`Enviando uma requisição via ${this.method} para ${this.url}`);
    }
}

const request = new RequestBuilder();

request.setMethod('post').setURL('http://www.unitel.ao.co/').send();
