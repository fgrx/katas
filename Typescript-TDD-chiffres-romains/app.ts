import { Translator } from './modules/translator';
import { UI } from './modules/ui';

const ui = new UI();
const numberInput = ui.getNumber();
const translator = new Translator(numberInput);
console.log(`${numberInput} -> ${translator.translate()}`);
