"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Translator = void 0;
var Translator = /** @class */ (function () {
    function Translator(input) {
        this.romanCharacters = [
            { unit: 'I', fiveUnit: 'V', tenUnit: 'X' },
            { unit: 'X', fiveUnit: 'L', tenUnit: 'C' },
            { unit: 'C', fiveUnit: 'D', tenUnit: 'M' },
            { unit: 'M', fiveUnit: '...', tenUnit: '...' }
        ];
        if (isNaN(input))
            throw 'A number is needed';
        this.userInput = input;
    }
    Translator.prototype.translate = function () {
        var result = '';
        var numberOfDigits = this.getNumberOfDigits();
        for (var position = numberOfDigits; position >= 0; position--) {
            var numberToEncode = this.getNumberByPosition(position);
            result += this.encodeNumber(numberToEncode, this.romanCharacters[position - 1]);
        }
        return result;
    };
    Translator.prototype.getNumberOfDigits = function () {
        var inputInString = this.userInput.toString();
        return inputInString.length;
    };
    Translator.prototype.encodeNumber = function (numberToEncode, romanCodes) {
        var result = '';
        if (numberToEncode < 4) {
            for (var number = 0; number < numberToEncode; number++) {
                result += romanCodes.unit;
            }
        }
        if (numberToEncode === 4)
            result = "" + romanCodes.unit + romanCodes.fiveUnit;
        if (numberToEncode >= 5 && numberToEncode < 9) {
            result = romanCodes.fiveUnit;
            for (var number = 5; number < numberToEncode; number++) {
                result += romanCodes.unit;
            }
        }
        if (numberToEncode === 9)
            result = "" + romanCodes.unit + romanCodes.tenUnit;
        return result;
    };
    Translator.prototype.getNumberByPosition = function (position) {
        var inputToString = this.userInput.toString();
        var lastNumber = inputToString.charAt(inputToString.length - position);
        return +lastNumber;
    };
    return Translator;
}());
exports.Translator = Translator;
