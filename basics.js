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


// // let a = 
// // prompt("Input number 1");;
// // let b = prompt("Input number 2");
// // let squareda = (a ** 2);
// // let squaredb = (b ** 2);
// // let result = Math.floor(Math.sqrt(squareda + squaredb));

// console.log(result);

//--------------------------------------------------------------
// Assignment operators
// let a = 2;
// let b = 3;
// let c = 4;

// let add = a+= b;
// let divide = a/= c;
// let modulo = c%= b;


// console.log(add)
// console.log(divide)
// console.log(modulo)


// ------------------------------------------------
// Comparison operators

// Equal
// let value1 = 5;
// let value2 = "5";
// console.log(value1 == value2);
// console.log(value1 === value2);


// // Not Equal
// let value3 = 5;
// let value4 = "5";
// console.log(value3 != value4);


// // Logical Operators

let value1 = 1;
let value2 = 2;
let value3 = 3;

// AND
console.log(value1 < value2 && value2 < value3);
console.log(value1 > value2 && value2 < value3);


// OR
console.log( value1 > value2 || value2 < value3);



// NOT
console.log(!(value1 < value2));


//Miles-to-kilometers 
// let km = 1.60934
// let convert = prompt ("Convert Killometers to Meters")
// let miles = (km * convert)

// console.log(`The distanace of ${convert}kms is equal to ${miles}`)

// BMI CALCULATOR

// let centimeters = prompt("Enter your height in cm")
// let weight = prompt("Enter your weight in Kilos")
// let height = centimeters * 0.01
// let BMI = (weight / (height ** 2));

// console.log(BMI)


// Arrays

arr2 = ["black", "orange", "pink"];
console.log(arr2)

arr3 = new Array(10);
arr4 = [10];

console.log(arr3);
console.log(arr4);


let arr = ["hi there", 5 , true];
console.log(typeof arr[0]);
console.log(typeof arr[1]);
console.log(typeof arr[2]);

cars = ["Toyota", "Renault", "Volswagen"];


console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);

// Built-in length property

// colors = ["black", "orange", "pink"]
// booleans = [true, false, false, true]
// emptyArray = [];
// lastElement = colors[colors.length - 1];



// console.log("Length of colors:", colors.length);
// console.log("Length of booleans:", booleans.length);
// console.log("Length of colors:", emptyArray.length);
// console.log(lastElement);


// numbers = [12, 48, 36];
// numbers [5] = 48;
// console.log(numbers.length);

// console.log("numbers", numbers);


// shoppinglist = ["Milk", "Bread", "Apples"]
// shoppinglist [1] = "Bananas"
// console.log(shoppinglist)


//Push method

favoriteFruits = ["grapefruit", "orange", "lemon"];
favoriteFruits.push("tangerine");
let lengthOfFavoriteFruits = favoriteFruits.push("lime");
console.log(favoriteFruits);

// Splice method

let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"]
arrOfShapes.splice(2, 1, "square", "trapezoid");
console.log(arrOfShapes);


// Concat method

let arr5 = [1, 2, 3];
let arr6 = [4, 5, 6];
let arr7 = arr5.concat(arr6);
let arr8 = arr7.concat(7, 8, 9);




// Deleting methods

arr8.pop();
arr8.shift();
arr8.splice(1, 3);
delete arr8[0];

console.log(arr8);


// Finding Methods


// find()
arr8 = [2, 6, 7, 8,];
let findIndex = arr8.indexOf(6);
let fintIndex2 = arr8.indexOf(10);
let findIndex3 = arr8.indexOf(6, 2);
let findValue = arr8.find(function(e) {return e === 6});
let findValue2 = arr8.find( e => e === 10);
let animals = ["dog", "horse", "cat", "platypus", "dog"]
let lastDog = animals.lastIndexOf("dog");

console.log(findValue, findValue2);
console.log(findIndex, fintIndex2);
console.log(findIndex3);
console.log(lastDog);


// sort
let names = ["James", "Alicia", "Fatiha", "James", "Maria"]
let ages = [18, 72, 33, 56, 40]
ages.sort();
names.sort();
console.log(names)
console.log(ages)

// Reversing
let names2 = ["Alicia", "Bert", "Fatiha", "James", "Maria"]
names2.reverse()
console.log(names2)



let shoppinglist = ["Milk", "Bread", "Apples"]
shoppinglist [1] = "Bananas"
shoppinglist.splice(2, 0, "Eggs")
shoppinglist.pop();
shoppinglist.sort()


let findMilk = shoppinglist.indexOf("Milk")
shoppinglist.splice(1, 0, "Carrots")
shoppinglist.splice(2, 0, "Lettuce")
console.log(shoppinglist)

let drinks = ["Juice", "Pop"]
let newlist = shoppinglist.concat(drinks)
let newlists = shoppinglist.concat("Juice", "Pop")
let pop = shoppinglist.lastIndexOf("pop")
console.log(newlists)


// Multi Dimensional Arrays

let someValues1 = [1, 2, 3];
let someValues2 = [4, 5, 6];
let someValues3 = [7, 8, 9];
let arrOfArrays = [someValues1, someValues2, someValues3];
let arrOfArrays2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let value5 = arrOfArrays [0] [1];
let value6 = arrOfArrays [2] [2];


arrOfArraysOfArrays = [arrOfArrays, arrOfArrays, arrOfArrays]


console.log(arrOfArrays);
console.log(value5);
console.log(value6);
console.log(arrOfArraysOfArrays)

let middleValue = arrOfArraysOfArrays[1][1][1];
console.log(middleValue);


let num = [1, 2, 3]
let numnest = [num, num]
let nummiddle = numnest [0] [1]

console.log(nummiddle);


// Objects
let dog = { dogName: "JavaScript",
            weight: 2.4,
            color: "brown",
            breed: "chihuahua",
            age: 3,
            burglarBiter: true,
        
};


dog["color"] = "blue";
dog.weight = 2.3;
dog["age"] = "three";

let variable = "age";
console.log(dog[variable]);


let myCar = {
            brand: "Mitshubishi",
            model: "L-300",
            color: "white",
            make: 1992,
            forSale: "Available",
}

myCar["color"] = "black";



console.log(myCar)
console.log(myCar["make"])
console.log(myCar["model"])
console.log(myCar["forSale"])