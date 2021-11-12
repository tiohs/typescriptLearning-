// Crainda apenas uma conexão para a base de dados
// Nome do metodo Singleton - Gof
// Ele é muito bom para criar um instacia de um objecto
export class Database {
     constructor(
        private host: string,
        private user: string,
        private password: string
        ) {}
        connect(): void {
            console.log(this.host, this.user, this.password);
        }
}

const db = new Database('localhost', 'Hamilton Silva', 'massango123');
const db1 = new Database('localhost', 'Hamilton Silva', 'massango123');

console.log(db);
console.log(db1);



