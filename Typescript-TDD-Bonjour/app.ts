import { PoliteHello } from './modules/politeHello';

const reader = require('readline-sync');
const nameInput: string = reader.question('Quel est votre nom ?');
const helloDisplayer = new PoliteHello(nameInput);

const currentDate = new Date();

console.log(helloDisplayer.sayHello(currentDate.getHours()));
