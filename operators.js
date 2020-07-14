alert( 5 % 2 ); // 1, a remainder of 5 divided by 2
alert( 2 ** 3 ); // 8  (2 * 2 * 2, 3 times)
alert( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root)
let s = "my" + "string";
//  if any of the operands is a string, then the other one is converted to a string too
alert(2 + 2 + '1' ); // "41"
alert( 6 - '2' ); // 4, converts '2' to a number
alert( '6' / '2' ); // 3, converts both operands to numbers

let apples = "2";
let oranges = "3";
alert( apples + oranges ); // "23"
alert( +apples + +oranges ); // 5, alert( Number(apples) + Number(oranges) );

n += 5; // now n = 7 (same as n = n + 5)

// can only be applied to variables
let counter = 2;
counter++;
// value like 5++ will give an error

// if we’d like to increase a value and immediately use the result of the operator, we need the prefix form:
let counter = 0;
alert( ++counter ); // 1
// if we’d like to increment a value but use its previous value, we need the postfix form:
let counter = 0;
alert( counter++ ); // 0

/*
"" + 1 + 0 = "10"
"" - 1 + 0 = -1
true + false = 1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN
7 / 0 = Infinity
"  -9  " + 5 = "  -9  5"
"  -9  " - 5 = -14
null + 1 = 1 // (5)
undefined + 1 = NaN
" \t \n" - 2 = -2s
*/