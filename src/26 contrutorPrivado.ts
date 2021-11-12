// Crainda apenas uma conexão para a base de dados
// Nome do metodo Singleton - Gof
// Ele é muito bom para criar um instacia de um objecto
// As class podem ser uma tipagem
export class Database {
    private static database: Database;
     private constructor(
        private host: string,
        private user: string,
        private password: string,
        ) {}
        connect(): void {
            console.log(this.host, this.user, this.password);
        }

        static getDatabase( host: string,  user: string, password: string ): Database {
            if(Database.database) {
                console.log('Create old instance ');
                return Database.database;
            }
            console.log('Create new instance ');
            Database.database = new Database(host, user, password);
            return Database.database;
        }
}


const db = Database.getDatabase('localhost', 'tiohs', 'morena');
const db1 = Database.getDatabase('localhost', 'pedro', 'jessica');
const db2 = Database.getDatabase('localhost', 'pedro', 'jessica');

console.log(db === db1)






