// Medo de agregação é onde os objectos podem existir sem precisar um do outro
// Mais não exercem as suas funções sem a existencia de um
// Por exemplo um carro e as rodas
// o carro pode existir sem rodas mais precisa agregar as rodas para andar
// ou fazer o seu metodo inicial começar

export class Card {
    private readonly products : Product[] = [];
    insertProducts(...products: Product[]): void{
        for(const product of products) {
            this.products.push(product);
        }
    }
    qtdProducts(): number {
        return this.products.length;
    }
    totalPrice(): number {
        return this.products.reduce((soma, product) => soma + product.price , 0);
    }
}
export class Product {
    constructor(public name: String, public price: number) {}
}

const product_1 : Product = new Product('Arroz', 19000);
const card_1: Card = new Card();

card_1.insertProducts(product_1);

console.log(card_1);
