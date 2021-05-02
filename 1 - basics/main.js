/**
 * VARIABLES
 * - variables are containers which holds a value in memory for future use
 * - to declare a variable, you can use 'var' or 'let'. ES6 (ECMASCRIPT 2015) states that you should use 'let'
 * - usage of single quotes to declare strings in javascript are preferred
 * - naming =>
 *      - cannot use reserved keywords
 *      - should be meaningful or descriptive
 *      - cannot start with a number
 *      - cannot contain spaces or hyphens
 *      - case sensitive
 */

let noice = 69;
let name = "chad";
console.log(name + " is " + noice);

/**
 * CONSTANTS
 * - use the 'constant' keyword to restrict additional assignments
 * - should be declared and initialized at the same time
 */

const PI = 3.14;
console.log(PI);
/**
 * PRIMITIVE TYPES
 * - there are 2 cateogories of types (Primitive Types - Value Types) and (Non Premitive Types - Reference Types)
 * - Value Types
 *      - String
 *      - Number
 *      - Boolean
 *      - undefined
 *      - null
 *      - symbol (ES6)
 */

let firstName = "john"; // String literal
let age = 69; // Number literal
let isAlive = true; // Boolean literal
let whoIsThis = undefined;
let myMoney = null; //explicitely defining that the variable myMoney points to nothing

/**
 * DYNAMICS TYPING
 * - there are two types of programming languages (Static) and (Dynamic)
 * - Static
 *      - have to define the data type for the variable when declaring
 *      - the defined data type cannot change for the variable in the future
 * - Dynamic
 *      - the data type of the variable can change during runtime
 * - use the 'typeof' keyword to check the data type of the variable during runtime
 */

let greeting = "Hello!";
console.log(typeof greeting);
greeting = 420;
console.log(typeof greeting);
