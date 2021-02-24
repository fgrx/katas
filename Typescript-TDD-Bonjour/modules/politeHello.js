"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoliteHello = void 0;
var PoliteHello = /** @class */ (function () {
    function PoliteHello(nameInput) {
        this.name = nameInput;
    }
    PoliteHello.prototype.sayHello = function (currentHour) {
        //format name
        var politeName = this.formatNameFirstLetter(this.name);
        var helloTitle = this.getHelloTitle(currentHour);
        var helloGreeting = helloTitle + " " + politeName;
        return helloGreeting;
    };
    PoliteHello.prototype.getHelloTitle = function (currentHour) {
        if (currentHour >= 6 && currentHour <= 18)
            return 'Bonjour';
        if (currentHour > 18 && currentHour <= 23)
            return 'Bonsoir';
        if ((currentHour > 23 && currentHour <= 24) || (currentHour >= 0 && currentHour < 6))
            return 'Bonne nuit';
    };
    PoliteHello.prototype.formatNameFirstLetter = function (formatUppercaseFirstLetter) {
        formatUppercaseFirstLetter = '';
        for (var i = 0; i < this.name.length; i++) {
            if (i === 0) {
                formatUppercaseFirstLetter += this.name.charAt(i).toUpperCase();
            }
            else if (this.name.charAt(i) !== ' ' && this.name.charAt(i - 1) === ' ') {
                formatUppercaseFirstLetter += this.name.charAt(i).toUpperCase();
            }
            else {
                formatUppercaseFirstLetter += this.name.charAt(i);
            }
        }
        return formatUppercaseFirstLetter;
    };
    return PoliteHello;
}());
exports.PoliteHello = PoliteHello;
