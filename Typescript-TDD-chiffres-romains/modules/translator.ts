interface ITranslator {
	userInput: number;
	translate(): string;
	getNumberOfDigits(): number;
}

interface IRomanCodes {
	unit: string;
	fiveUnit: string;
	tenUnit: string;
}

export class Translator implements ITranslator {
	userInput;
	romanCharacters = [
		{ unit: 'I', fiveUnit: 'V', tenUnit: 'X' },
		{ unit: 'X', fiveUnit: 'L', tenUnit: 'C' },
		{ unit: 'C', fiveUnit: 'D', tenUnit: 'M' },
		{ unit: 'M', fiveUnit: '...', tenUnit: '...' }
	];

	constructor(input: number) {
		if (isNaN(input)) throw 'A number is needed';
		this.userInput = input;
	}

	translate(): string {
		let result = '';

		const numberOfDigits = this.getNumberOfDigits();

		for (let position = numberOfDigits; position >= 0; position--) {
			const numberToEncode = this.getNumberByPosition(position);
			result += this.encodeNumber(numberToEncode, this.romanCharacters[position - 1]);
		}

		return result;
	}

	getNumberOfDigits() {
		const inputInString = this.userInput.toString();
		return inputInString.length;
	}

	private encodeNumber(numberToEncode: number, romanCodes: IRomanCodes) {
		let result = '';
		if (numberToEncode < 4) {
			for (let number = 0; number < numberToEncode; number++) {
				result += romanCodes.unit;
			}
		}

		if (numberToEncode === 4) result = `${romanCodes.unit}${romanCodes.fiveUnit}`;

		if (numberToEncode >= 5 && numberToEncode < 9) {
			result = romanCodes.fiveUnit;
			for (let number = 5; number < numberToEncode; number++) {
				result += romanCodes.unit;
			}
		}

		if (numberToEncode === 9) result = `${romanCodes.unit}${romanCodes.tenUnit}`;

		return result;
	}

	getNumberByPosition(position: number): number {
		const inputToString = this.userInput.toString();
		const lastNumber = inputToString.charAt(inputToString.length - position);
		return +lastNumber;
	}
}
