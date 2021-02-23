interface IUI {
	numberInput: number;
	getNumber(): any;
}

export class UI implements IUI {
	numberInput = 0;
	constructor() {}

	getNumber() {
		const reader = require('readline-sync');
		const numberToEncode = reader.question('Entrez un nombre inférieur à 10 000 ?');
		return numberToEncode;
	}
}
