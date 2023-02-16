"use strict";

const people = ["Harry", "Ron", "Hermione", "Neville"];

function sayHello(person) {
  console.log(`Hello ${person}`);
}

people.forEach(sayHello);

//same as
people.forEach((person) => console.log(`Hello ${person}`));

//testParam
function testParams(a, b, c, d) {
  console.log(`a:${a}, b:${b}, c:${c}, d:${d}`);
}

people.forEach(testParams);
// forEach takes 3 parameters - each item (value), index of each item, entire array
