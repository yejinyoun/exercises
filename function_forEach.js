"use strict";

const people = ["Harry", "Ron", "Hermione", "Neville"];

function sayHello(person) {
  console.log(`Hello ${person}`);
}

people.forEach(sayHello);

//same as
people.forEach((person) => console.log(`Hello ${person}`));
