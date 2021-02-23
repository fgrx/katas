"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UI = void 0;
var UI = /** @class */ (function () {
    function UI() {
        this.numberInput = 0;
    }
    UI.prototype.getNumber = function () {
        var reader = require('readline-sync');
        var numberToEncode = reader.question('Entrez un nombre inférieur à 10 000 ?');
        return numberToEncode;
    };
    return UI;
}());
exports.UI = UI;
