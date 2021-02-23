"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var translator_1 = require("./modules/translator");
var ui_1 = require("./modules/ui");
var ui = new ui_1.UI();
var numberInput = ui.getNumber();
var translator = new translator_1.Translator(numberInput);
console.log(numberInput + " -> " + translator.translate());
