// Type Annotation [Developer tells TypeScript the type]
let x: number = 10;
console.log(typeof x)


// Type Inferencia [TypeScript guesses the type]
let y = 29;
console.log(typeof y)


// Tipose básicos
let firstName: string = "Renan"
let age: number = 10
let isAdmin: boolean = true

console.log(`firstName typeof: ${typeof firstName}`);
firstName = "Rodrigo"
console.log(`firstName: ${firstName}`)


// Object
const myNumber: number[] = [1, 2, 3]

console.log(`myNumber length: ${myNumber.length}`)
myNumber.push(5)
console.log(`myNumber: ${myNumber}`)


// Tuplas > tuple
let myTuplas: [string, number, string[]]

myTuplas = ["renan", 29, ["Fulano", "sicrano"]]
console.log(`myTuplas: ${myTuplas}`)


// object literals -> {prop: value}
const otherTuple: [number, string, string] = [24, "Rodrigo", "Renan"]
console.log(`otherTuple: ${otherTuple}`)


// any
let a: any = 0

a = true
a = []
a = "teste"

console.log(`Any variable: ${a}`)


// union types
let id: string | number = 10
id = 200


// type alias
type myIdType = number | string

const userId: myIdType = 10
const productId: myIdType = "0001"
const bankId: myIdType = 15


// enum
// tamanho de roupas (size: Médio, size: Pequeno)
enum Size {
    P = "Pequeno",
    M = "Médio",
    G = "Grande"
}

const camisa = {
    name: "Camisa gola V",
    size: Size.G
}

console.log(camisa)


// literal types
let teste: "autenticado" | null
teste = "autenticado";
teste = null;


// funcoes
function sum(a: number, b: number) {
    return a + b;
}

console.log(`Result: ${sum(10, 10)}`)
// console.log(`Result: ${sum(10, true)}`) - ERROR
