"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var politeHello_1 = require("../../modules/politeHello");
describe('>>> politeHello', function () {
    it('should contain name string', function () {
        var politeHello = new politeHello_1.PoliteHello('Fabien');
        expect(politeHello.sayHello(10)).toContain('Fabien');
    });
    it('should have a name with upper string', function () {
        var politeHello = new politeHello_1.PoliteHello('jean michel');
        expect(politeHello.sayHello(10)).toContain('Jean Michel');
    });
    it('should contain Bonjour Fabien', function () {
        var politeHello = new politeHello_1.PoliteHello('fabien');
        expect(politeHello.sayHello(10)).toBe('Bonjour Fabien');
    });
    it('should contain Bonsoir Fabien', function () {
        var politeHello = new politeHello_1.PoliteHello('fabien');
        expect(politeHello.sayHello(19)).toBe('Bonsoir Fabien');
    });
    it('should contain Bonne nuit Fabien', function () {
        var politeHello = new politeHello_1.PoliteHello('fabien');
        expect(politeHello.sayHello(1)).toBe('Bonne nuit Fabien');
    });
});
