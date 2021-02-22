import { Translator } from '../../modules/translator';

describe('modules/translator', () => {
	it('should return the number of digits', () => {
		const translator = new Translator(12345);
		expect(translator.getNumberOfDigits()).toBe(5);
	});

	it('should return last digit : 4', () => {
		const translator = new Translator(1234);
		expect(translator.getNumberByPosition(1)).toBe(4);
	});

	it('should return second digit : 3', () => {
		const translator = new Translator(10);
		expect(translator.getNumberByPosition(2)).toBe(1);
	});

	it('should return I', () => {
		const translator = new Translator(1);
		expect(translator.translate()).toBe('I');
	});

	it('should return III', () => {
		const translator = new Translator(3);
		expect(translator.translate()).toBe('III');
	});

	it('should return IV', () => {
		const translator = new Translator(4);
		expect(translator.translate()).toBe('IV');
	});

	it('should return V', () => {
		const translator = new Translator(5);
		expect(translator.translate()).toBe('V');
	});

	it('should return VI', () => {
		const translator = new Translator(6);
		expect(translator.translate()).toBe('VI');
	});

	it('should return IX', () => {
		const translator = new Translator(9);
		expect(translator.translate()).toBe('IX');
	});

	it('should return X', () => {
		const translator = new Translator(10);
		expect(translator.translate()).toBe('X');
	});

	it('should return XII', () => {
		const translator = new Translator(12);
		expect(translator.translate()).toBe('XII');
	});

	it('should return XV', () => {
		const translator = new Translator(15);
		expect(translator.translate()).toBe('XV');
	});

	it('should return XVI', () => {
		const translator = new Translator(16);
		expect(translator.translate()).toBe('XVI');
	});

	it('should return XIX', () => {
		const translator = new Translator(19);
		expect(translator.translate()).toBe('XIX');
	});

	it('should return XX', () => {
		const translator = new Translator(22);
		expect(translator.translate()).toBe('XXII');
	});

	it('should return CLIV', () => {
		const translator = new Translator(154);
		expect(translator.translate()).toBe('CLIV');
	});

	it('should return MCDLIX', () => {
		const translator = new Translator(1459);
		expect(translator.translate()).toBe('MCDLIX');
	});
});
