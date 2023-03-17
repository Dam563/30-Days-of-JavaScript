
// Variables can be declared locally or globally.
// A globally declared variable can be accessed every where in the same file.
// A variable declared as local can be accessed only in certain block code.
// A variable declared with var only scoped to function but variable declared with let or const is
//  block scope(function block, if block, loop block, etc). Block in JavaScript is a code in between two curly brackets ({}).

// The scope let and const are the same. The difference is only reassigning. We can not change or reassign the 
// value of the const variable. I would strongly suggest you to use let and const, by using let and const you will
//  write clean code and avoid hard to debug mistakes. As a rule of thumb, you can use let for any value which change,
//  const for any constant value, and for an array, object, arrow function and function expression.