"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var translator_1 = require("./modules/translator");
var numberInput = 1156;
var translator = new translator_1.Translator(numberInput);
console.log(numberInput + " -> " + translator.translate());
