export const answers = [
  {
    "index": 0,
    "answers": [
      "When a webpage loads, the browser constructs a DOM tree, representing the structure of your HTML. JavaScript manipulates this tree, enabling dynamic changes. The browser's rendering engine then converts the DOM into a visual layout, rendering the webpage accordingly.",

      "DO--",

      "false",

      "yes",

      "typeof Array : function, typeof null: object, typeof undefined: undefined",

      "In JavaScript: - **Primitive Data Types:** These are immutable and directly stored in memory. Examples include `number`, `string`, `boolean`, `null`, `undefined`, and `symbol`. They have a fixed size and are copied by value when assigned. - **Non-primitive (Reference) Data Types:** These are mutable and reference-based. Examples include `object`, `array`, and `function`. They are assigned and passed by reference, pointing to the same memory location.",

      "In JavaScript: Undefined: A variable is undefined when it is declared but not assigned a value. It also represents the default value of function parameters not provided during a function call. Null: It is explicitly assigned to a variable, indicating the absence of a value or an intentional non-value. It's often used to reset or clear a variable. In summary, undefined typically denotes an uninitialized variable, while null is a deliberate absence of any object value.",

      "function currying is a process of transforming a function with multiple arguments into a series of functions each taking a single argument. Benefits: Modularity: Break down complex functions into smaller, reusable ones. Lazy evaluation: Delay calculations until all arguments are provided.",

      `function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}`,

      `In React, components have a well-defined life cycle managed through lifecycle methods. These methods allow you to control a component's behavior at different stages:
1. Mounting:
constructor: (class components only) Invoked before rendering, often used for initialization logic.
componentDidMount: Called after the component is inserted into the DOM, good for data fetching or setting up subscriptions.
2. Updating:
shouldComponentUpdate: (optional) Receives new props and state, returns true/false to control whether to re-render.
getDerivedStateFromProps: (static method) Receives new props and current state, returns an object to update state based on props changes.
componentDidUpdate: (optional) Called after the component re-renders, useful for side effects after updates.
3. Unmounting:
componentWillUnmount: Called before the component is removed from the DOM, used for cleanup like removing subscriptions or timers.`,

      "A pure component in React is a component that guarantees its rendered output will always be the same for the same input (props and state). This means that if you re-render a pure component with the exact same props and state, it will not trigger an actual re-render in the browser. This can significantly improve performance by avoiding unnecessary updates and DOM manipulations.",
      "Pure components can be implemented using the useMemo hook in functional components.",

      `Here are brief explanations of a few commonly used React hooks:

1. useState:

Manages state within functional components.
Used for simple values like booleans, numbers, strings, or objects.
Triggers a re-render whenever it changes.
2. useEffect:

Performs side effects like subscriptions, data fetching, or DOM manipulation.
The function runs after every render by default, or only when dependencies change.
3. useContext:

Shares data between components without passing props through multiple levels.
Provides a way to access context objects created with React.createContext.
4. useMemo:

Memoizes the result of a function based on its dependencies.
Avoids unnecessary re-calculations of expensive operations.
Useful for expensive computations or derived data based on props or state.
5. useRef:

Creates a mutable ref object that persists through re-renders.
Used to store values that don't trigger re-renders, like DOM elements or timers.
Avoids directly modifying DOM elements within functional components.`,

      "Unmounting a component is necessary when it's no longer needed in the application, preventing memory leaks and optimizing performance. Use componentWillUnmount lifecycle method for cleanup activities, such as canceling network requests or clearing intervals, ensuring a smooth removal of the component from the DOM.",

      "Redux is a state management library for JavaScript applications. It works by maintaining the entire state of the application in a single store, accessible by components. Actions trigger state changes, and Reducers handle these actions, updating the state. Components subscribe to the store, automatically re-rendering when the state changes. This ensures a predictable, centralized state management flow.",

      "Redux Thunk is a middleware for Redux that allows action creators to return functions instead of plain action objects. This enables handling asynchronous operations within action creators, like making API calls. Thunks delay the dispatch of an action until the asynchronous operation is complete, offering more flexibility in managing side effects in Redux applications.",
    ]
  },

  {

    "index": 1,
    "answers": [
      `The Temporal Dead Zone (TDZ) in JavaScript refers to a specific period in the execution of your code where variables declared using let and const are inaccessible even though they are technically "in scope.
1. When does the TDZ occur?

The TDZ exists from the beginning of the block (usually curly braces {}) where the variable is declared until the line where it is actually initialized with a value.
2. What actions are restricted in the TDZ?

You cannot read the value of a let or const variable within the TDZ.
You cannot re-declare a let or const variable with the same name within the TDZ.
`,

      "Browsers don't inherently understand JSX (JavaScript XML). JSX is a syntax extension used with React to describe UI components. It needs to be transpiled into regular JavaScript using tools like Babel before being sent to the browser. The transpiler converts JSX into React.createElement calls, which the browser interprets as regular JavaScript objects representing the virtual DOM.",

      `
function maxRepeatingCharacter(str) {
  const charCount = {};

  // Count occurrences of each character
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find the character with the maximum count
  let maxChar = '', maxCount = 0;
  for (const char in charCount) {
    if (charCount[char] > maxCount) {
      maxChar = char;
      maxCount = charCount[char];
    }
  }

  return { character: maxChar, count: maxCount };
}

const inputString = "Hello world!";
const result = maxRepeatingCharacter(inputString);
conso
`,
      "DO--",
      `Promises in JavaScript: A Deep Dive
Promises are powerful tools in JavaScript that enable asynchronous programming. They manage the results of potentially asynchronous operations, providing a cleaner and more readable way to handle them compared to traditional callbacks.

Key Concepts:

States: A promise can be in one of three states:

Pending: Initial state, operation hasn't finished yet.
Fulfilled: Operation completed successfully, value available.
Rejected: Operation failed, reason provided.
Chaining: You can chain .then and .catch methods to handle the promise's value or error and create complex asynchronous flows.

Callbacks: Used within .then and .catch to specify what to do with the resolved value or rejection reason.

How it Works:

Promise Creation: You create a promise using the Promise constructor function, passing an executor function as an argument.
Executor Function: This function takes two arguments, resolve and reject:
resolve: Used to signal successful completion with a value.
reject: Used to signal failure with a reason (often an error).
Async Operation: Inside the executor, you perform the asynchronous operation (e.g., fetching data, setting a timer).
Result Handling: Based on the operation's outcome:
Success: Call resolve with the result value, moving the promise to the "fulfilled" state.
Failure: Call reject with the reason for failure, moving the promise to the "rejected" state.`,

      "Pure functions are functions that, given the same input, always return the same output and have no side effects. They don't modify external state or rely on external state changes. Pure functions are predictable, easy to test, and promote maintainable and scalable code in functional programming paradigms.",

      `A polyfill is a piece of code (usually JavaScript) that provides functionality that is not natively supported by a web browser. It allows developers to use new features of the language or APIs in environments that lack native support. Polyfills fill the gaps, ensuring consistent behavior across different browsers.
DO--
`,
      "what do you mean by synchronous and asynchronous",
      "ES6/ES7 things you have used",
      "Why do we need arrow functions?",
      "What does Object.freeze does",
      "What is event bubbling and how to prevent it",
      "What is Semantic HTML? name some HTML tags",
      "Difference between ID and Class in HTML tags",
      "What do you mean by CSS box modal",
      "Explain CSS specificity",
      "Different CSS positioning elements",
      "Make a automated Time using ReactJS",
      "Explain Different lifecycle methods",
      "Difference between Pure component and Normal component",
      "What is Content API",
      "What is HOC",
      "Controlled and uncontrolled components",
      "What do you mean by CSS box modal",
      "How do we write a functional setstate and what is the use of it"
    ]
  },

  {

    "index": 2,
    "answers": [

    ]
  },

  {

    "index": 3,
    "company": "IBM",
    "interviewType": "Technical",
    "questions": [
      "What is IIFE? One usecase of IIFE",
      "What is function expression vs function statement",
      "How JS Event Loop works",
      "How does Browsers reads code?",
      "When should we use Call, apply and bind",
      "Difference between Arrow func vs normal func",
      "What is function currying? one usecase",
      "What is usestrict in js?",
      "Advantages of closure in js?",
      "Javascript, what will be the output:  '3'-1",
      "Javascript, what will be the output: 8>3>2",
      "What is Coercion in JavaScript?",
      "What is hoisting in Js?",
      "Difference between Promises vs Async await",
      "What are generators in js?",
      "Why we need event.preventDefault() in forms?",
      "What is the use of render() in react?",
      "What happens if we update state directly?",
      "Drawbacks of using ReactJs?",
      "Difference between class component/functional component",
      "Difference between props vs state",
      "Lifecycle methods",
      "What is reducers in redux? middlewares",
      "Can we have multiple stores in redux?"
    ]
  },

  {

    "index": 4,
    "company": "Larsen and Turbo Round 2",
    "interviewType": "TECHNO MANAGERIAL",
    "questions": [
      "Tell me about your project that you currently working",
      "How you fit within the team according to roles",
      "Explain to me how ReactJS makes your current application better",
      "How to decide which State management system to use in your app",
      "Are you familiar with HTML5? Name some most used Tags",
      "Are you aware of CSS modules/Saas",
      "How does you folder structure looks like -> Show",
      "How do you handle pressure when working with multiple projects",
      "9. How you do error-handling on your project",
      "Do you know unit-testing of components/Typescript",
      "How much do you rate yourself in JS",
      "Can you tell me about pure function",
      "Explain Map, filter, filter, reduce",
      "What is callback hell?",
      "Why do you want to work with LTI even though you have good offers"
    ]
  },

  {

    "index": 5,
    "company": "Larsen and Turbo Round 1",
    "interviewType": "Technical",
    "questions": [
      "What are sementic tags in Html? tell some html5 tags",
      "What is the difference between async / defer in scripts",
      "Why do we need meta tags in an website?",
      "Http request life cycle",
      "Explain CSS box modal? css specifictity? CSS sprite ? Flexbox",
      "Explain hoisting wrt let, const and var",
      "Difference between function expression and function declaration?",
      "Explain the this keyword with arrow function and normal function.",
      "Input: searchBoxKey output: search_Box_Key",
      "Remove duplicates from an array and count the number of duplicates",
      "What is event bubbling? How can we prevent it?",
      "What is DOM?",
      "Debouncing -> code",
      "What is JSX and how browser understands JSX?",
      "What is the use of dangerouslySetInnerHTML?",
      "What is virtual DOM and how it increases performance?",
      "What are pure components",
      "Why do we need keys in react?",
      "If we render a parent node does all of its child re-render?",
      "Can you tell me how you plan the design architecture.",
      "Uses of Hooks and refs",
      "What is the difference between NextJS/ ReactJS?",
      "Different types of rendering in NextJS",
      "what is HOC?"
    ]
  },

  {

    "index": 6,
    "company": "MindTree",
    "interviewType": "Technical",
    "questions": [
      "What is BOM? explain hierarchy",
      "What is Hosting? explain",
      "Difference between null and undefined",
      "Evaluate typeof null == undefined / null === undefined",
      "What is deep copy and shallow copy.",
      "Difference between regular function vs arrow function?",
      "What is currying? Explain with example",
      "Difference between Async-await / promises",
      "What is event delegation?",
      "ES6 Features ... explain some of them",
      " Difference between functional and class based components",
      "Explain different Lifecycle methods in order",
      "What are the important concepts in react hooks?",
      "What happens if set state is used inside render method",
      "Explain UseEffect()",
      "What are Refs in react and show an example (code )",
      "What is the use of dangerouslySetInnerHTML?",
      "Why we shouldnt update state directly ?",
      "Explain Redux workflow?"
    ]
  },

  {

    "index": 7,
    "company": "Publicis Sapient",
    "interviewType": "Technical",
    "questions": [
      "What are semantic elements and how it is useful?",
      "hat do mean by request life cycle?",
      "ow does browser understand your JS code?",
      "hat is async and defer in script tags?",
      "hat is the use of preconnect in css?",
      "hat is CSS specificity?",
      "hat are CSS Selectors and CSS rules?",
      "hat are mixins? How are JS in CSS helpful?",
      "What is scopechain in js? How js engine reads scopechain",
      "What is hoisting? Difference between variable and function hoisting",
      "Basic difference between for Each and map?",
      "Explain the this keyword?",
      "Call / Apply / bind with an example for each",
      "Major difference between ES5 and ES6 javascripts",
      "Gave me a task on Even handling and Dom manipulation - Increment/ decrement using vanilla js",
      "Explain Encapsulation in Javascipt? How closures are useful in JS",
      "write a curry function like sum(2)(3)(4)(5)(6)(n)",
      "What are promises how promises are different from async-await",
      "How do you do error handling?",
      "Difference between promise.all/promise.race",
      "Write a JS code to check an entered email is Valid or not",
      " What are prototypes in JS",
      " What are function compositions / HOF",
      " DRY/SOLID principles",
      " What do you mean by Web Accessibility? Explain",
      "What is caching mechanism & service workers?",
      " How do you optimise your website for better load times",
      " Webpack /Babel / code splitting",
      " What is minification/git commands / eslint"
    ]
  },

  {

    "index": 8,
    "company": "PWC Associate Interview",
    "interviewType": "Technical",
    "questions": [
      "Explain me your current project and its architecture",
      "How much will you rate yourself in JS",
      "Can you explain when you decide where to use Class component/ Functional compoenent",
      "What are the advantages of using ReactJS over traditional JS websites",
      "Explain local storage, session storage and cookie + lifecycle",
      "Have you used JWT? Advantages of it",
      "How you use JWT in your application? Explain",
      "What are the security measures you take while builing an application",
      "What is BOM? Hierarchy of BOM",
      " Different between BOM/DOM",
      " What is the difference between promise /async -await",
      " Uses of promise.all, promise.any",
      " Center an div on a screen (codesandbox)",
      " Few guess the console.log code statements"
    ]
  },

  {

    "index": 9,
    "company": "TCS",
    "interviewType": "Technical",
    "questions": [
      "Tell me what ES6 features you have used?",
      "Difference between map and foreach?",
      "What is shallow copy and deep copy?",
      "Can you tell me difference between let, const and var?",
      "Have you worked with promises? what is promises?",
      "What is the difference between promises and async await?",
      "What is call, apply and bind? explain with example.",
      "What is Rest and Spread operator? show with example.",
      "what is the slice and splice method in javascript?",
      "What is strict mode in javascript?",
      "what is JSX? can browser understands JSX?",
      "Make a small form component with name/password -> with Validation",
      "Where you will perform an API call if you need to get data before component DidMount?",
      "React Hooks Explanations used for lifecycle methods",
      "useMemo / React.memo difference",
      "what is redux? when to use redux",
      "Advantages/Disadvantages of ReactJS",
      "What is the entry point of a React Application",
      "What is HOC? Where you have used / written in your project",
      "What is React Context API and when to use",
      "How do you handle API calls on your React App? Axios..",
      "How will you chain multiple API calls that is depending on the previous request?",
      "How will you optimize a React Application?",
      "What is pure component? How will you implement same on Functional components?",
      "Explain controlled and uncontrolled components",
      "Redux questions on reducers, actions and state...",
      "How to avoid mutating an array when performing an operation",
      "Explain this keyword with arrowfunction and normal",
      "Event bubbling",
      "ES6 features you have used",
      "Difference between map, filter and foreach",
      "Deep copy vs Shallow copy"
    ]
  },

  {

    "index": 10,
    "company": "TCS",
    "interviewType": "TECHNO MANAGERIAL",
    "questions": [
      "Explain your Role in your current project",
      "Did you ever worked directly with a client?",
      "Can you tell me how you plan the design architecture.",
      "Do you follow the Agile/Scrum method?",
      "How the total workflow of your application works right from pushing the code to repository.",
      "Do you know component level testing?",
      "Do you have any idea about CI/CD?"
    ]
  }
]




















