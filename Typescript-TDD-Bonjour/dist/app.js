"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var politeHello_1 = require("./modules/politeHello");
var reader = require('readline-sync');
var nameInput = reader.question('Quel est votre nom ?');
var helloDisplayer = new politeHello_1.PoliteHello(nameInput);
var currentDate = new Date();
console.log(helloDisplayer.sayHello(currentDate.getHours()));
