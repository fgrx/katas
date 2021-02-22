import { Translator } from './modules/translator';
const numberInput = 1156;
const translator = new Translator(numberInput);
console.log(`${numberInput} -> ${translator.translate()}`);
