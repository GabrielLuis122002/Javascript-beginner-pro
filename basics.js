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


// let nr1 = 12;
// var nr2 = 8;
// const PI = 3.14159;


// 2


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



// let name = "Gabriel";
// let age = 22;
// let code = true;

// if (code === true) {
//     console.log(`Hello, my name is ${name} and my age is ${age} and I can code Javascript`)
// } else {
//      console.log(`Hello, my name is ${name} and my age is ${age} and I cannot code Javascript`)
// }


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

let  company = { companyName: "Healthy Candy",
 activities: [ "food manufacturing",
"improving kids' health",
"manufacturing toys"],
 address: [{
 street: "2nd street",
 number: "123",
 zipcode: "33116",
 city: "Miami",
 state: "Florida"
 },
 {
 street: "1st West avenue",
 number: "5",
 zipcode: "75001",
 city: "Addison",
 state: "Texas"
 }],
 yearOfEstablishment: 2021
 };


 
company.address.zipcode = "33117";
company["address"]["number"] = "100";


let activity = company.activities[1];


console.log(company);
console.log(activity);

let adresses = [
    {
        street: "2nd street",
        number: "123",
        zipcode: "33116",
        city: "Miami",
        state: "Florida"
    },
    {
        street: "1st West avenue",
        number: "5",
        zipcode: "75001",
        city: "Addison",
        state: "Texas"
    }];

    let streetName = company.address[0].street
    console.log(streetName)

    // 1. Create an object named people with an empty array called friends
let people = {
    friends: []
};

// 2. Create three variables with friend objects
let friend1 = {
    firstName: "Alice",
    lastName: "Smith",
    id: 1
};

let friend2 = {
    firstName: "Bob",
    lastName: "Johnson",
    id: 2
};

let friend3 = {
    firstName: "Charlie",
    lastName: "Brown",
    id: 3
};

// 3. Add the three friends to the friends array
people.friends.push(friend1, friend2, friend3);

// 4. Output the result to the console
console.log(people);



const theList = [];

// 2. Create three item objects with name, model, cost, and quantity
const item1 = {
    name: "Laptop",
    model: "Dell XPS 13",
    cost: 1200,
    quantity: 5
};

const item2 = {
    name: "Smartphone",
    model: "iPhone 14",
    cost: 999,
    quantity: 10
};

const item3 = {
    name: "Headphones",
    model: "Sony WH-1000XM5",
    cost: 350,
    quantity: 7
};

// 3. Add all three objects to the main array using an array method
theList.push(item1, item2, item3);

console.log(theList);


// Logic Statements


// if and if else statements

let rain = true;

if(rain) {
    console.log("It is raining today");
} if(!rain) {
     console.log("It is not raining today");
}



// else if statements

// let agess = 18;
// let cost = 0;
// let messages;
// if (agess < 3) {
//     cost = 0;
//     message = "Access is free under three";
// } else if (agess >= 3 && agess < 12) {
//     cost = 5;
//     message = "With the child discount, the fee is 5 dollars"
// } else if (agess >= 12 && agess < 65) {
//     cost = 10;
//     message = "A regular ticket costs 10 dollars";
// } else {
//   cost = 7;
//   message = "A ticket is 7 dollars";
// }

// console.log(message);
// console.log("Your Total costs is " + cost)


// let agess = prompt("What is your age?")
// let messages;
// agess = Number(agess);

// if (agess >= 21) {
//     messages = "Confirm entry to a venue and the ability to purchase alcohol";
// } else if(agess >= 19) {
//   messages = "Confirm entry to the venue but deny the purchase of alcohol"
// } else {
//     messages = "Deny Entry you are underage"
// }


let age = 18;


let access = age < 18 ? console.log("denied") : console.log("allowed");

let id = 1123;
let ids = Number(id) 

let entry = ids === 1123 ? console.log("confirm entry") : console.log("deny entry");


// Switch statements

let activities = "Get up";

switch(activities) {
    case "Get up":
        console.log("It is 6:30AM");
        break;
    case "Breakfast":
        console.log("It is 7:00AM");
         break;
    case "Drive to work":
        console.log("It is 8:00AM");
        break;
    case "Lunch":
        console.log("It is 12:00PM ");
        break;
    case "Drive home":
        console.log("It is 5:00PM");
        break;
    case "Dinner":
        console.log("It is 6:30PM");
        break;
    default: 
         console.log("Go to Sleep");
         break;
}



// let randomNumber = Math.random();
// randomNumber = randomNumber * 6;
// RandomNumber = Math.floor(randomNumber );
// console.log(RandomNumber)


// let guess = prompt("Guess a number from 1-6");
// let answer = Number(guess);

// // Use switch on the random number
// switch(RandomNumber) {
//     case 1:
//         if (answer === 1) {
//             alert("You're right! The number is 1");
//         } else {
//             alert("Wrong! The number was 1");
//         }
//         break;
//     case 2:
//         if (answer === 2) {
//             alert("You're right! The number is 2");
//         } else {
//             alert("Wrong! The number was 2");
//         }
//         break;
//     case 3:
//         if (answer === 3) {
//             alert("You're right! The number is 3");
//         } else {
//             alert("Wrong! The number was 3");
//         }
//         break;
//     case 4:
//         if (answer === 4) {
//             alert("You're right! The number is 4");
//         } else {
//             alert("Wrong! The number was 4");
//         }
//         break;
//     case 5:
//         if (answer === 5) {
//             alert("You're right! The number is 5");
//         } else {
//             alert("Wrong! The number was 5");
//         }
//         break;
//     case 6:
//         if (answer === 6) {
//             alert("You're right! The number is 6");
//         } else {
//             alert("Wrong! The number was 6");
//         }
//         break;
//     default:
//         alert("Something went wrong!");
// }



let grade = "A"

if(grade === "F" || grade === "D") {
 console.log("You've failed!");
} else if(grade === "C" || grade === "B") {
 console.log("You've passed!");
} else if(grade === "A") {
 console.log("Nice!");
} else {
 console.log("I don't know this grade.");
}


// let game = ["Rock", "Paper", "Scissors"];

// let playerInput = prompt("Choose Rock = 1, Paper = 2, or Scissors = 3");
// let playerIndex = Number(playerInput) - 1; // use playerInput here, not playerChoice

// if (playerIndex < 0 || playerIndex > 2 || isNaN(playerIndex)) {
//     alert("Invalid input. Please refresh and enter 1, 2, or 3.");
// } else {
//     let playerChoice = game[playerIndex];

//     let computerIndex = Math.floor(Math.random() * 3);
//     let computerChoice = game[computerIndex];

//     if (playerChoice === computerChoice) {
//         alert(`Player chooses ${playerChoice}, Computer chooses ${computerChoice}. It's a tie!`);
//     } else if (
//         (playerChoice === "Rock" && computerChoice === "Scissors") ||
//         (playerChoice === "Paper" && computerChoice === "Rock") ||
//         (playerChoice === "Scissors" && computerChoice === "Paper")
//     ) {
//         alert(`Player chooses ${playerChoice}, Computer chooses ${computerChoice}. Player wins!!!`);
//     } else {
//         alert(`Player chooses ${playerChoice}, Computer chooses ${computerChoice}. Computer wins!!!`);
//     }
// }


// Loops

let someArray = ["Mike", "Antal", "Marc", "Emir", "Louiza", "Jack"]
let notFound = true;
while (notFound && someArray.length > 0) {
    if (someArray[1] === "Louiza") {
        console.log("Found her!");
        notFound = false;
    } else {
        someArray.shift();
    }
}


// let randomNumber = Math.floor(Math.random() * 5) + 1; 
// let guess = Number(prompt("Guess a number between 1-5"));

// while (guess !== randomNumber) {
//   alert("Wrong guess, try again!");
//   guess = Number(prompt("Guess a number between 1-5"));
// }

// alert("You've guessed the right number!");


// let number;
// do {
//     number = prompt("Please enter a number between 0 and 100: ");
// } while (!(number >= 0 && number < 100));


// Do while loop
// let counter = 0;

// do {
//     counter++
//     console.log(counter)
// } while (counter < 100)


// for loop

let myWork = [];


for (let i =1; i<=10; i++) {

        let status = (i % 2 === 0) ? false : true;

        let lesson = {
            name: `Lesson ${i}`,
            status: status
        };


        myWork.push(lesson);

}

console.log(myWork);


// loops and arrays

let name = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
for (let i = 0; i < name.length; i++){
    name[i] = "hello " + name[i];
}

console.log(name)


