"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var translator_1 = require("../../modules/translator");
describe('modules/translator', function () {
    it('should return the number of digits', function () {
        var translator = new translator_1.Translator(12345);
        expect(translator.getNumberOfDigits()).toBe(5);
    });
    it('should return last digit : 4', function () {
        var translator = new translator_1.Translator(1234);
        expect(translator.getNumberByPosition(1)).toBe(4);
    });
    it('should return second digit : 3', function () {
        var translator = new translator_1.Translator(10);
        expect(translator.getNumberByPosition(2)).toBe(1);
    });
    it('should return I', function () {
        var translator = new translator_1.Translator(1);
        expect(translator.translate()).toBe('I');
    });
    it('should return III', function () {
        var translator = new translator_1.Translator(3);
        expect(translator.translate()).toBe('III');
    });
    it('should return IV', function () {
        var translator = new translator_1.Translator(4);
        expect(translator.translate()).toBe('IV');
    });
    it('should return V', function () {
        var translator = new translator_1.Translator(5);
        expect(translator.translate()).toBe('V');
    });
    it('should return VI', function () {
        var translator = new translator_1.Translator(6);
        expect(translator.translate()).toBe('VI');
    });
    it('should return IX', function () {
        var translator = new translator_1.Translator(9);
        expect(translator.translate()).toBe('IX');
    });
    it('should return X', function () {
        var translator = new translator_1.Translator(10);
        expect(translator.translate()).toBe('X');
    });
    it('should return XII', function () {
        var translator = new translator_1.Translator(12);
        expect(translator.translate()).toBe('XII');
    });
    it('should return XV', function () {
        var translator = new translator_1.Translator(15);
        expect(translator.translate()).toBe('XV');
    });
    it('should return XVI', function () {
        var translator = new translator_1.Translator(16);
        expect(translator.translate()).toBe('XVI');
    });
    it('should return XIX', function () {
        var translator = new translator_1.Translator(19);
        expect(translator.translate()).toBe('XIX');
    });
    it('should return XX', function () {
        var translator = new translator_1.Translator(22);
        expect(translator.translate()).toBe('XXII');
    });
    it('should return CLIV', function () {
        var translator = new translator_1.Translator(154);
        expect(translator.translate()).toBe('CLIV');
    });
    it('should return MCDLIX', function () {
        var translator = new translator_1.Translator(1459);
        expect(translator.translate()).toBe('MCDLIX');
    });
});
