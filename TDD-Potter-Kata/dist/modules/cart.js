"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
var bookList_1 = require("../data/bookList");
var Cart = /** @class */ (function () {
    function Cart() {
        this.books = [];
    }
    Cart.prototype.getBooks = function () {
        return this.books;
    };
    Cart.prototype.addBook = function (title) {
        if (!bookList_1.booksInStore.includes(title))
            return false;
        var book = { title: title };
        this.books.push(book);
    };
    Cart.prototype.getPrice = function () {
        var totalWithoutReduction = 8 * this.books.length;
        var reduction = this.getReduction();
        var totalWithReduction = totalWithoutReduction * reduction;
        return Math.round(totalWithReduction * 100) / 100;
    };
    Cart.prototype.getReduction = function () {
        var reduction = 1;
        var reductionList = [1, 0.95, 0.9, 0.85, 0.8, 0.75, 0.7];
        var uniqueBooks = this.getUniqueBooks();
        if (uniqueBooks.length - 1 >= 7) {
            reduction = reductionList[6];
        }
        else if (uniqueBooks.length - 1 < 0) {
            reduction = reductionList[0];
        }
        else {
            reduction = reductionList[uniqueBooks.length - 1];
        }
        return reduction;
    };
    Cart.prototype.getUniqueBooks = function () {
        var uniqueBooks = [];
        this.books.forEach(function (bookToInsert) {
            var isPresent = uniqueBooks.filter(function (book) { return book.title === bookToInsert.title; });
            if (!isPresent.length)
                uniqueBooks.push(bookToInsert);
        });
        return uniqueBooks;
    };
    return Cart;
}());
exports.Cart = Cart;
