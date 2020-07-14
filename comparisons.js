alert( null > 0 );  // false
alert( null == 0 ); // false, == for undefined and null is defined such that, without any conversions
alert( null >= 0 ); // true

alert( '2' > 1 ); // true, string '2' becomes a number 2
alert( '01' == 1 ); // true, string '01' becomes a number 1

alert( true == 1 ); // true
alert( false == 0 ); // true

alert( 0 === false ); // false, because the types are different
alert( null === undefined ); // false

// undefined gets converted to NaN which returns false
alert( null == undefined ); // true
alert( 0 == undefined ); // false
