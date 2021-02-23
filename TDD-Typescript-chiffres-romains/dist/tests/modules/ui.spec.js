"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ui_1 = require("../../modules/ui");
describe('>> ui module', function () {
    it('should return 123', function () {
        var ui = new ui_1.UI();
        var numberToEncode = ui.getNumber();
        expect(numberToEncode).toBe(123);
    });
    it('should return the number to translate', function () {
        var ui = new ui_1.UI();
        var numberToEncode = ui.getNumber();
        expect(numberToEncode).toBe(456);
    });
});
