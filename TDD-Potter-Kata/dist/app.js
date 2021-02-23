"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cart_1 = require("./modules/cart");
var cart = new cart_1.Cart();
cart.addBook("Le Prisonnier d'Azkaban");
cart.addBook('Les Reliques de la Mort');
console.log('Livres dans le panier :');
console.log(cart.getBooks());
console.log("Total : " + cart.getPrice());
