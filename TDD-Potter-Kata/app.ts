import { Cart } from './modules/cart';

const cart = new Cart();
cart.addBook("Le Prisonnier d'Azkaban");
cart.addBook('Les Reliques de la Mort');

console.log('Livres dans le panier :');
console.log(cart.getBooks());

console.log(`Total : ${cart.getPrice()}`);
