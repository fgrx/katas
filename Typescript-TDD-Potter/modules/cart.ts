import { ICart } from './../interfaces/ICart';
import { IBook } from './../interfaces/IBook';
import { booksInStore } from '../data/bookList';

export class Cart implements ICart {
	books: Array<IBook> = [];

	getBooks() {
		return this.books;
	}

	addBook(title: string) {
		if (!booksInStore.includes(title)) return false;
		const book: IBook = { title };
		this.books.push(book);
	}

	getPrice(): number {
		const totalWithoutReduction = 8 * this.books.length;
		let reduction = this.getReduction();
		const totalWithReduction = totalWithoutReduction * reduction;
		return Math.round(totalWithReduction * 100) / 100;
	}

	private getReduction() {
		let reduction = 1;
		const reductionList = [ 1, 0.95, 0.9, 0.85, 0.8, 0.75, 0.7 ];

		const uniqueBooks: Array<IBook> = this.getUniqueBooks();

		if (uniqueBooks.length - 1 >= 7) {
			reduction = reductionList[6];
		} else if (uniqueBooks.length - 1 < 0) {
			reduction = reductionList[0];
		} else {
			reduction = reductionList[uniqueBooks.length - 1];
		}

		return reduction;
	}

	private getUniqueBooks() {
		const uniqueBooks: Array<IBook> = [];
		this.books.forEach((bookToInsert) => {
			const isPresent = uniqueBooks.filter((book) => book.title === bookToInsert.title);
			if (!isPresent.length) uniqueBooks.push(bookToInsert);
		});

		return uniqueBooks;
	}
}
