export const jsQuestions = [
    {
        "question": "What is the significance of let and const in ES6?",
        "answer": "let and const are block-scoped variables introduced in ES6. 'let' allows variable reassignment within the block scope, while 'const' is used for constants and variables with values that should not be reassigned."
    },
    {
        "question": "Explain the arrow function syntax in ES6.",
        "answer": "Arrow functions provide a concise syntax for writing functions. They use the '=>', and if there's only one parameter, parentheses can be omitted. Arrow functions do not have their own 'this' and 'arguments' binding, making them especially useful for callbacks and short anonymous functions."
    },
    {
        "question": "What is template literals syntax in ES6?",
        "answer": "Template literals, denoted by backticks (`), allow embedding expressions inside string literals. They support multi-line strings, string interpolation using ${}, and can be used for more readable and flexible string formatting."
    },
    {
        "question": "Describe the destructuring assignment in ES6.",
        "answer": "Destructuring assignment allows unpacking values from arrays or properties from objects into distinct variables. It provides a more concise way to extract values, making the code cleaner and more readable."
    },
    {
        "question": "What are the advantages of using the 'class' syntax in ES6?",
        "answer": "The 'class' syntax in ES6 provides a cleaner and more concise way to create constructor functions and prototypes for object-oriented programming. It encapsulates data and behavior within a single entity, improving code organization and readability."
    },
    {
        "question": "Explain the purpose of the 'spread' operator in ES6.",
        "answer": "The 'spread' operator (...) is used for expanding elements from arrays, properties from objects, or characters from strings. It simplifies code by providing a concise way to copy, merge, or pass elements individually rather than as a whole array or object."
    },
    {
        "question": "What is the 'Promise' object in ES6, and how does it work?",
        "answer": "Promises are a feature introduced in ES6 for handling asynchronous operations. A Promise represents the eventual completion or failure of an asynchronous task and provides a cleaner way to handle callbacks, error propagation, and chaining asynchronous operations."
    },
    {
        "question": "Explain the 'async/await' syntax in ES6.",
        "answer": "The 'async/await' syntax is a feature introduced in ES6 to simplify working with Promises. The 'async' keyword is used to define asynchronous functions, and 'await' is used to pause execution until a Promise is resolved or rejected. This makes asynchronous code look more like synchronous code, enhancing readability."
    },
    {
        "question": "What is the difference between `let`, `const`, and `var` in JavaScript?",
        "answer": "`let` and `const` provide block-scoping, while `var` has function-scoping. `const` is for constants, and `let` allows reassignment."
    },
    {
        "question": "Explain the concept of closures in JavaScript.",
        "answer": "Closures are functions with access to variables from their outer scope, even after the outer function finishes executing."
    },
    {
        "question": "What is event delegation in JavaScript?",
        "answer": "Event delegation involves assigning a single event listener to a common ancestor, handling events for multiple child elements."
    },
    {
        "question": "How does asynchronous JavaScript work, and what is the event loop?",
        "answer": "Asynchronous JavaScript allows non-blocking code execution. The event loop continuously checks the message queue and processes events."
    },
    {
        "question": "Explain the difference between `null` and `undefined` in JavaScript.",
        "answer": "`null` represents intentional absence of an object value, while `undefined` indicates a declared but unassigned variable."
    },
    {
        "question": "What is the purpose of the `this` keyword in JavaScript?",
        "answer": "`this` refers to the current execution context, with its value determined by how a function is invoked."
    },
    {
        "question": "How does prototypal inheritance work in JavaScript?",
        "answer": "JavaScript uses prototypal inheritance, allowing objects to inherit properties and methods by traversing their prototype chain."
    },
    {
        "question": "Explain the difference between `==` and `===` in JavaScript.",
        "answer": "`==` is a loose equality operator with type coercion, while `===` is a strict equality operator comparing both value and type."
    },
    {
        "question": "What is the purpose of the `apply`, `call`, and `bind` methods in JavaScript?",
        "answer": "`apply` and `call` set the value of `this` in a function and immediately invoke it. `bind` returns a new function with the specified `this` value."
    },
    {
        "question": "How does the `Promise` object work in JavaScript, and what are its states?",
        "answer": "A `Promise` represents the completion or failure of an asynchronous operation with states: pending, fulfilled, or rejected."
    },
    {
        "question": "What is the Event Loop in JavaScript, and how does it work?",
        "answer": "The Event Loop is a core concept in JavaScript that continuously checks the message queue for events and executes them in a loop. It ensures non-blocking asynchronous code execution."
    },
    {
        "question": "Explain the concept of hoisting in JavaScript.",
        "answer": "Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase. However, only the declarations are hoisted, not the initializations."
    },
    {
        "question": "What is the purpose of the `bind` method in JavaScript?",
        "answer": "The `bind` method is used to create a new function with a specified `this` value, allowing you to permanently bind a function to a particular object. It returns a new function without invoking it immediately."
    },
    {
        "question": "Describe the differences between arrow functions and regular functions in JavaScript.",
        "answer": "Arrow functions have a shorter syntax, do not have their own `this`, and do not have the `arguments` object. They are especially useful for concise one-liner functions."
    },
    {
        "question": "What is the purpose of the `async` and `await` keywords in JavaScript?",
        "answer": "The `async` keyword is used to declare an asynchronous function, and `await` is used within an `async` function to pause execution until the awaited promise settles, either resolving or rejecting."
    },
    {
        "question": "How does the `map` function work in JavaScript, and how is it different from `forEach`?",
        "answer": "The `map` function creates a new array by applying a provided function to each element of an existing array. Unlike `forEach`, `map` returns a new array and does not mutate the original array."
    },
    {
        "question": "Explain the concept of promises in JavaScript and their states.",
        "answer": "Promises represent the eventual completion or failure of an asynchronous operation. They have three states: pending, fulfilled, or rejected. Promises provide a cleaner way to handle asynchronous code compared to callbacks."
    },
    {
        "question": "What is the purpose of the `localStorage` and `sessionStorage` objects in JavaScript?",
        "answer": "Both `localStorage` and `sessionStorage` are used to store key-value pairs in a user's browser. `localStorage` persists data across browser sessions, while `sessionStorage` only persists data for the duration of a page session."
    },
    {
        "question": "Differentiate between `null` and `undefined` in JavaScript.",
        "answer": "`null` represents an intentional absence of any object value, while `undefined` indicates a variable that has been declared but has not been assigned a value."
    },
    {
        "question": "What is the purpose of the `try`, `catch`, and `finally` blocks in JavaScript?",
        "answer": "These blocks are used for exception handling. Code within the `try` block is executed, and if an error occurs, it is caught in the `catch` block. The `finally` block is executed regardless of whether an error occurred or not, providing a place for cleanup code."
    },
    {
        "question": "What is the purpose of the 'rest' parameter in JavaScript?",
        "answer": "The 'rest' parameter allows a function to accept an indefinite number of arguments as an array, making it versatile for handling variable argument lists."
    },
    {
        "question": "Explain the concept of the 'spread' operator in JavaScript.",
        "answer": "The 'spread' operator is used to expand elements from an array or properties from an object into another array or object, facilitating concise and efficient code."
    },
    {
        "question": "How does the 'Event Delegation' pattern work in JavaScript?",
        "answer": "Event Delegation involves assigning a single event listener to a common ancestor of multiple elements. This optimizes performance by handling events on child elements through the parent, reducing the number of event listeners."
    },
    {
        "question": "What is the purpose of the 'localStorage' and 'sessionStorage' objects in JavaScript?",
        "answer": "'localStorage' and 'sessionStorage' are used to store key-value pairs in a user's browser. 'localStorage' persists data across browser sessions, while 'sessionStorage' only persists data for the duration of a page session."
    },
    {
        "question": "Explain the concept of callback functions and provide an example.",
        "answer": "Callback functions are functions passed as arguments to other functions and are executed after a specific event or operation. Example: setTimeout(function(){ console.log('Callback executed!'); }, 1000);"
    },
    {
        "question": "What is the 'prototype' chain in JavaScript?",
        "answer": "The 'prototype' chain is the mechanism by which objects in JavaScript inherit properties and methods from other objects. Each object has a prototype object, forming a chain until an object with a 'null' prototype is reached."
    },
    {
        "question": "How can you handle asynchronous operations in JavaScript?",
        "answer": "Asynchronous operations can be handled using callbacks, promises, and the 'async/await' syntax. Callbacks are functions passed as arguments, promises represent the outcome of an asynchronous operation, and 'async/await' provides a syntax for handling promises more concisely."
    },
    {
        "question": "Differentiate between 'null' and 'undefined' in JavaScript.",
        "answer": "'null' represents an intentional absence of any object value, while 'undefined' indicates a variable that has been declared but has not been assigned a value."
    },
    {
        "question": "What are the advantages of using the 'let' and 'const' keywords in JavaScript?",
        "answer": "'let' and 'const' provide block-scoping in contrast to 'var', making the code more predictable. 'const' is used for constant values, ensuring immutability, while 'let' allows for variable reassignment within the block."
    },
    {
        "question": "Explain the concept of hoisting in JavaScript.",
        "answer": "Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase. However, only the declarations are hoisted, not the initializations."
    },
]

