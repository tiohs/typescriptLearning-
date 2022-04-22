// Na composição um objeto tem outro objecto como parte dele
// Carro precisaria das rodas para andar é agregação
// Carro precisa de motor para ser um carro composição

// Carro é uma ligação de Composição

// Outro Exemplo
// Ser humano e o coração é uma composição


export class Carro {
    private readonly motor: Motor = new Motor();

    ligar(): void {
        this.motor.ligar();
    }
    acelarar(): void{
        this.motor.acelarar();
    }
    parar(): void{
        this.motor.parar();
    }
    desligado(): void{
        this.motor.desligado();
    }
}

export class Motor {
    ligar(): void {
        console.log('Motor está ligado ')!
    }
    acelarar(): void{
        console.log('Motor está acelerando...');
    }
    parar(): void{
        console.log('Motor está parado...');
    }
    desligado(): void{
        console.log('Motor está desligado')
    }
}

const carro = new Carro();

carro.acelarar();
