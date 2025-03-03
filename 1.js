// 1. Printing the data
// cout << "Data" << endl;
// console.log("Data");


// Let - Var - Const
// Var => Old Fashion, global based, re-declarable, re-assignalbe
// Let => New Fashion, blocked based, no-declarable, re-assignable
// Const => New Fashion, Blocked Based, no-declarable, no-reassinable

// for (let i = 0; i <= 5; i++) {
//     if (1) {
//         console.log(b);
//     }
// }

// number, string, undefined, null, boolean 

let a = 1;   // Value is for number (numerical).
let b = 'Rushil';  // Value is for string.
let c = undefined;  // Value is not specified yet.
let d = null;   // Value is specified for null(0) value;
let e = true;   // Value is for true/false.

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

// Single quote inside double quotes:
// let answer1 = "It's alright";
// console.log(answer1);
// Single quotes inside double quotes:
// let answer2 = "He is called 'Johnny'";
// console.log(answer2);
// Double quotes inside single quotes:
// let answer3 = 'He is called "Johnny"';
// console.log(answer3);

// Arrays Declaration
const cars = ["Mustang Ford 1968", "Posrche 911", "Range Rover", "Defender"];

// Objects Declaration
const person = {
    firstName: 'Tanishq',
    LastName: 'Bansal',
    EyeColor: 'Blue',
};





//Object creation methood
// let user1 = new Object();   // Object Constructor Methood
// let user2 = {};  // Object Literal Methood
// console.log(person.firstName);
// console.log(person.LastName);
// console.log(person.EyeColor);


//For multiword property we have to use double quotation,
// let user = {
//     name: "John",
//     age: 30,
//     "likes birds": true  // multiword property name must be quoted
// };
  
//   let key = prompt("What do you want to know about the user?", "name");
  
  // access by variable
// alert(user[key]); // John (if enter "name")  or alert(user.key)



// Task 1 => Write the code, one line for each action:

// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.

//Solution - 
let user = {    
};

user.name = "John";
user.surname = "Smith";

console.log(user);

user.name = 'Pete';
console.log(user);

delete user.name;
console.log(user);


//Task 2 => Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.


let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert(isEmpty(schedule)); // false


function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

//Task3 => We have an object storing salaries of our team:
// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
// If salaries is empty, then the result must be 0.

let salaries = {
    John: 120,
    Ann: 160,
    Pete: 130
}

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}

alert(sum);


//Task4 => Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.
// Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.
// P.S. Use typeof to check for a number here.

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

console.log(menu);
multiplynumericby2(menu);
console.log(menu);
function multiplynumericby2(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}