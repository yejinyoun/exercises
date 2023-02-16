"use strict";

const people = ["Harry", "Ron", "Hermione", "Neville"];

function sayHello(person) {
  console.log(`Hello ${person}`);
}

//forEach is array method, taking each item as a parameter,
// and callback function as function parameter
people.forEach(sayHello);

//same as above
// take each item(person) and use it as a parameter and function parameter (arrow function)
people.forEach((person) => console.log(`Hello ${person}`));

//testParam
function testParams(a, b, c, d) {
  console.log(`a:${a}, b:${b}, c:${c}, d:${d}`);
}

people.forEach(testParams);
// forEach(function) takes 3 parameters - each item (value), index of each item, entire array
