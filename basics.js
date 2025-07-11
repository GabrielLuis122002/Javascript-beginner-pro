// let status = "new";
// let scared = true;

// if (status === "new") {
//  console.log("Welcome to JavaScript!");
//  if (scared) {
//  console.log("Don't worry you will be fine!");
//  } else {
//  console.log("You're brave! You are going to do great!");
//  }
// } else {
//  console.log("Welcome back, I knew you'd like it!");
// }




console.log(Math.random() * 100);
console.log(Math.floor(Math.random() * 100));


let nr1 = 12;
var nr2 = 8;
const PI = 3.14159;


console.log(nr1);
console.log(nr2);
console.log(PI);


let language = "Javascript";
let message = `Let's learn ${language}`

console.log(message);


// Symbol

let sym1 = Symbol("Javascript is fun!");
let sym2 = Symbol("Javascript is fun!");
console.log("These two symbols are the same:", sym1 === sym2);

// TypeOf
testVariable = 1;
testVariable2 = "Hello World"
variableTypeTest1 = typeof testVariable;
variableTypeTest2 = typeof(testVariable2);
console.log(variableTypeTest1);
console.log(variableTypeTest2);



//Converting data types
// Conversion methods: String(), Number(), Boolean


let x = "6";
let y = 8;
console.log( Number(x) + y);


let str1 = 'Laurence';
let str2 = "Svekis";
let val1 = undefined;
let val2 = null;
let myNum = 1000;


variabletypetest1 = typeof str1;
variabletypetest2 = typeof str2;
variabletypetest3 = typeof val1;
variabletypetest4 = typeof val2;
variabletypetest5 = typeof myNum;


// console.log("str1 is a: ", variabletypetest1);
// console.log("str2 is a: ", variabletypetest2);
// console.log("val1 is a: ", variabletypetest3);
// console.log("val2 is a: ", variabletypetest4);
// console.log("myNum is a: ", variabletypetest5);



let name = "Gabriel";
let age = 22;
let code = true;

if (code === true) {
    console.log(`Hello, my name is ${name} and my age is ${age} and I can code Javascript`)
} else {
     console.log(`Hello, my name is ${name} and my age is ${age} and I cannot code Javascript`)
}


let a = 
prompt("Input number 1");;
let b = prompt("Input number 2");
let squareda = (a ** 2);
let squaredb = (b ** 2);
let result = Math.floor(Math.sqrt(squareda + squaredb));

console.log(result);