// Single Threaded Nature of JS  => In Last,  Call Stack, Web Apis, Callback Queue, Event Loop 
// CallBack Functions, Event Loop
// Callback Hell And Event Loop
// Promises
// Async Await Syntax
// Hoisting
// Hosting
// What is an array, and how to access its elements?
// Difference between == and ===
// Purpose of the isNaN function
// What is null and undefined ?
// Purpose of map methood in JS
// Event Bubbling and event capturing
// What are higher-order function with examples ?
// What is an IIFE (Immediately Invoked Function Expression)?
// Explain closures in JavaScript.
// How do setTimeout and setInterval work?
// Describe promises in Javascript.
// Difference between call, apply, and bind.
// What is event delegation?

// Write a program that prints all the even numbers in an array in js

function printNumbers(arr) {
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] % 2 == 0) { 
    //         console.log(arr[i]);
    //     } 
    // }
    arr.foreach(number => {
        if (number % 2 == 0) {
            console.log(number);
        }
    });
}

const numbers = [1, 2, 3, 4, 5];
printNumbers(numbers);


// Complex Object Declaration
const complexObject = {
    company: "Tech Innovations",
    employees: [
        {
            id: 101,
            firstName: "Alice",
            LastName: "Smith",
            Gender: "Female",
            details: {
                age: 30,
                city: "New York"
            }
        },
        {
            id: 102,
            firstName: "Bob",
            LastName: "Johnsn",
            Gender: "Male",
            details: {
                age: 35,
                city: "Los Angeles"
            }
        },
        {
            id: 103,
            firstName: "Charlie",
            LastName: "Brown",
            Gender: "Male",
            hobbies: ["reading", "hiking"],
            contact: {
                email: "charlie@example.com"
            }
        }
    ],
    
}



function printMaleFirstNames(data) {
    if (typeof data !== 'object' || data === null) {
      console.log("Input is not a valid object.");
      return;
    }
  
    function recursivelyFindMales(obj) {
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          const value = obj[key];
  
          if (typeof value === 'object' && value !== null) {
            if (value.gender === 'male' && typeof value.firstName === 'string') {
              console.log(value.firstName);
            }
            recursivelyFindMales(value); // Keep searching nested objects
          } else if (Array.isArray(value)) {
            value.forEach(item => {
              if (typeof item === 'object' && item !== null) {
                if (item.gender === 'male' && typeof item.firstName === 'string') {
                  console.log(item.firstName);
                }
                recursivelyFindMales(item); // Search objects within arrays
              }
            });
          }
        }
      }
    }
  
    recursivelyFindMales(data);
  }
  
  // Example complex object:
  const complexObject = {
    company: "Tech Innovations",
    employees: [
      {
        id: 101,
        firstName: "Alice",
        lastName: "Smith",
        gender: "female",
        details: {
          age: 30,
          city: "New York"
        }
      },
      {
        id: 102,
        firstName: "Bob",
        lastName: "Johnson",
        gender: "male",
        details: {
          age: 35,
          city: "Los Angeles"
        }
      },
      {
        id: 103,
        firstName: "Charlie",
        lastName: "Brown",
        gender: "male",
        hobbies: ["reading", "hiking"],
        contact: {
          email: "charlie@example.com"
        }
      }
    ],
    departments: {
      engineering: [
        {
          name: "David",
          title: "Senior Engineer",
          gender: "male"
        },
        {
          name: "Eve",
          title: "Software Engineer",
          gender: "female"
        }
      ],
      marketing: {
        manager: {
          firstName: "Frank",
          lastName: "Miller",
          gender: "male"
        },
        team: [
          {
            firstName: "Grace",
            lastName: "Davis",
            gender: "female"
          }
        ]
      }
    },
    person: {
      firstName: "Henry",
      lastName: "Wilson",
      gender: "male"
    }
  };
  
  printMaleFirstNames(complexObject);
  // Expected Output:
  // Bob
  // Charlie
  // David
  // Frank
  // Henry