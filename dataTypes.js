// no error
let message = "hello";
message = 123456;

// NaN represents a computational error
alert( "not a number" / 2 );

// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;

let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;

let booleatTypeTrue = true;
let booleaTypeFalse = false;

let isGreater = 4 > 1;
alert( isGreater ); // true (the comparison result is "yes")

// special value which represents “nothing”, “empty” or “value unknown”
let age = null;

// variable is declared, but not assigned, then its value is undefined
let age;
alert(age); // "undefined"
age = undefined;
alert(age); // "undefined"

typeof undefined // "undefined"
typeof 0 // "number"
typeof 10n // "bigint"
typeof true // "boolean"
typeof "foo" // "string"
typeof Symbol("id") // "symbol"
typeof Math // "object"
typeof null // "object"
typeof alert // "function"