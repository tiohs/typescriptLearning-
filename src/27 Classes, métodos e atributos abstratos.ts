// É aquando falamos que uma classa é abstrata ela não pode ser instanciada por
// uma outro elemento que não seja uma classe filha então ela só pode ser estendida


// Abstrate em um medodo estou a dizer que toda a class filho precisa de ter um
// o metodo que o pai diz ser abstrato .

// Atributos abstatos tenhem o mesmo funcionamento de uma metodod

export abstract class Personal {
    protected abstract emoji: string;
    constructor(
        protected name: string,
        protected skill: number,
        protected vida: number) {
        }

        atacar(personagem: Personal): void {
            this.bordao();
            personagem.perderVida(this.skill);
        }

        perderVida(forcaAtaque: number): void {
            console.log(`${this.emoji} - ${this.name} agora tem ${this.vida} de vida ...`);
            this.vida -= forcaAtaque;
        }

        abstract bordao(): void;
}

export class Guerrira extends Personal {
    protected emoji = '\u{1F9DD}';
    bordao(): void {
        console.log(this.emoji + ' Atacar Aaaaaaaaaaaaaaaa A!!')
    }
}
export class Mostro extends Personal {
    protected emoji = '\u{1F9DF}';
    bordao(): void {
        console.log(this.emoji + ' MMMOOOOORS!')
    }
}

const gurreira = new Guerrira('Ana', 100, 1000);
const monstro = new Mostro('Carlos', 87, 1000);


gurreira.atacar(monstro)
gurreira.atacar(monstro)
gurreira.atacar(monstro)
monstro.atacar(monstro)
