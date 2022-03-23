"use strict";
// Type Annotation [Developer tells TypeScript the type]
let x = 10;
console.log(typeof x);
// Type Inferencia [TypeScript guesses the type]
let y = 29;
console.log(typeof y);
// Tipose básicos
let firstName = "Renan";
let age = 10;
let isAdmin = true;
console.log(`firstName typeof: ${typeof firstName}`);
firstName = "Rodrigo";
console.log(`firstName: ${firstName}`);
// Object
const myNumber = [1, 2, 3];
console.log(`myNumber length: ${myNumber.length}`);
myNumber.push(5);
console.log(`myNumber: ${myNumber}`);
// Tuplas > tuple
let myTuplas;
myTuplas = ["renan", 29, ["Fulano", "sicrano"]];
console.log(`myTuplas: ${myTuplas}`);
// object literals -> {prop: value}
const otherTuple = [24, "Rodrigo", "Renan"];
console.log(`otherTuple: ${otherTuple}`);
// any
let a = 0;
a = true;
a = [];
a = "teste";
console.log(`Any variable: ${a}`);
// union types
let id = 10;
id = 200;
const userId = 10;
const productId = "0001";
const bankId = 15;
// enum
// tamanho de roupas (size: Médio, size: Pequeno)
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa gola V",
    size: Size.G
};
console.log(camisa);
// literal types
let teste;
teste = "autenticado";
teste = null;
// funcoes
function sum(a, b) {
    return a + b;
}
console.log(`Result: ${sum(10, 10)}`);
// console.log(`Result: ${sum(10, true)}`) - ERROR
