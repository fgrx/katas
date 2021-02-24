"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cart_1 = require("../../modules/cart");
describe('>>> Cart class', function () {
    var cart;
    beforeEach(function () {
        cart = new cart_1.Cart();
    });
    it('should return an empty list of books', function () {
        var books = cart.getBooks();
        expect(books.length).toBe(0);
    });
    it('should add a book', function () {
        cart.addBook('À l’école des sorciers');
        var BooksInCart = cart.getBooks();
        expect(BooksInCart.length).toBe(1);
    });
    it('should refuse to add a non H.Potter book', function () {
        cart.addBook('Le rouge et le noir');
        var BooksInCart = cart.getBooks();
        expect(BooksInCart.length).toBe(0);
    });
    it('should calculate a price', function () {
        expect(cart.getPrice()).toBe(0);
        cart.addBook('À l’école des sorciers');
        expect(cart.getPrice()).toBe(8);
        cart.addBook('La Chambre des secrets');
        expect(cart.getPrice()).toBe(15.2);
        cart.addBook('La Chambre des secrets');
        expect(cart.getPrice()).toBe(22.8);
        cart.addBook("Le Prisonnier d'Azkaban");
        expect(cart.getPrice()).toBe(28.8);
    });
});
