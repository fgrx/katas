interface IPoliteHello {
	name: string;
	sayHello(currentHour: number): string;
}

export class PoliteHello implements IPoliteHello {
	name: string;
	constructor(nameInput: string) {
		this.name = nameInput;
	}

	sayHello(currentHour: number) {
		//format name
		const politeName = this.formatNameFirstLetter(this.name);
		const helloTitle = this.getHelloTitle(currentHour);
		const helloGreeting = `${helloTitle} ${politeName}`;
		return helloGreeting;
	}

	private getHelloTitle(currentHour: number) {
		if (currentHour >= 6 && currentHour <= 18) return 'Bonjour';
		if (currentHour > 18 && currentHour <= 23) return 'Bonsoir';
		if ((currentHour > 23 && currentHour <= 24) || (currentHour >= 0 && currentHour < 6)) return 'Bonne nuit';
	}

	private formatNameFirstLetter(formatUppercaseFirstLetter: string) {
		formatUppercaseFirstLetter = '';
		for (let i = 0; i < this.name.length; i++) {
			if (i === 0) {
				formatUppercaseFirstLetter += this.name.charAt(i).toUpperCase();
			} else if (this.name.charAt(i) !== ' ' && this.name.charAt(i - 1) === ' ') {
				formatUppercaseFirstLetter += this.name.charAt(i).toUpperCase();
			} else {
				formatUppercaseFirstLetter += this.name.charAt(i);
			}
		}
		return formatUppercaseFirstLetter;
	}
}
