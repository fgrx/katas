import { IBook } from './IBook';

export interface ICart {
	books: Array<IBook>;
	addBook(title: string): void;
	getBooks(): Array<IBook>;
	getPrice(): number;
}
