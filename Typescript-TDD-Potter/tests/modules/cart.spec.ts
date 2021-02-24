import { ICart } from './../../interfaces/ICart';
import { Cart } from '../../modules/cart';

describe('>>> Cart class', () => {
	let cart: ICart;

	beforeEach(() => {
		cart = new Cart();
	});

	it('should return an empty list of books', () => {
		const books = cart.getBooks();
		expect(books.length).toBe(0);
	});

	it('should add a book', () => {
		cart.addBook('À l’école des sorciers');
		const BooksInCart = cart.getBooks();
		expect(BooksInCart.length).toBe(1);
	});

	it('should refuse to add a non H.Potter book', () => {
		cart.addBook('Le rouge et le noir');
		const BooksInCart = cart.getBooks();
		expect(BooksInCart.length).toBe(0);
	});

	it('should calculate a price', () => {
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
