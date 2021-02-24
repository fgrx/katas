import { PoliteHello } from '../../modules/politeHello';

describe('>>> politeHello', () => {
	it('should contain name string', () => {
		const politeHello = new PoliteHello('Fabien');
		expect(politeHello.sayHello(10)).toContain('Fabien');
	});

	it('should have a name with upper string', () => {
		const politeHello = new PoliteHello('jean michel');
		expect(politeHello.sayHello(10)).toContain('Jean Michel');
	});

	it('should contain Bonjour Fabien', () => {
		const politeHello = new PoliteHello('fabien');
		expect(politeHello.sayHello(10)).toBe('Bonjour Fabien');
	});

	it('should contain Bonsoir Fabien', () => {
		const politeHello = new PoliteHello('fabien');
		expect(politeHello.sayHello(19)).toBe('Bonsoir Fabien');
	});

	it('should contain Bonne nuit Fabien', () => {
		const politeHello = new PoliteHello('fabien');
		expect(politeHello.sayHello(1)).toBe('Bonne nuit Fabien');
	});
});
