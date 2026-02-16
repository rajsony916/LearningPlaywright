// var, let, and const are used to declare variables in JavaScript.
// var is the older way of declaring variables and has function scope.
// let and const are newer ways of declaring variables and have block scope.

var x = 10;
let y = 20;
const z = 30;

console.log(x); // Output: 10
console.log(y); // Output: 20
console.log(z); // Output: 30

//function is a keyword used to define a function, and console.log is a method used to print output to the console.

/*
var a = 5;
console.log(a); // Output: 5

function print() {
    var a = 10; // This 'a' is different from the 'a' outside the function due to function scope.
    console.log(a);
    if (true) {
        var a = 20; // 'a' is only accessible within this block due to block scope.
        console.log(a); // Output: 20
    }
}

print(); // Output: 10
*/

let a = 5;
console.log(a); // Output: 5

function print() {
    let a = 10; // This 'a' is different from the 'a' outside the function due to function scope.
    console.log(a);
    if (true) {
        let a = 20; // 'a' is only accessible within this block due to block scope.
        console.log(a); // Output: 20
    }
}

print(); // Output: 10

const b = 5;
console.log(b); // Output: 5
b=10; // This will throw an error because 'b' is a constant and cannot be reassigned.