"use strict";

// function refernce

/* function greeting(firstName) {
  return `Hello ${firstName}`;
}

const sayHi = greeting;

console.log(sayHi);
console.log(sayHi("mimi")); */

// function call back
// create person3 and person4 with object template

const Person = {
  firstName: "",
  lastName: "",
  hired: true,
};

const person3 = Object.create(Person);
person3.firstName = "Harry";
person3.lastName = "Potter";
person3.hired = true;

const person4 = Object.create(Person);
person4.firstName = "Fred";
person4.lastName = "Weasly";
person4.hired = false;

// create function hire and fire
function hire(person) {
  person.hired = true;
}

function fire(person) {
  person.hired = false;
}

// create hireOrFire function, where it takes function(hire/fire) as a parameter, and a person parameter
//always function NewFunction(function,parameter) <- this order
function hireOrFire(action, person) {
  action(person);
}

hireOrFire(hire, person4);
hireOrFire(fire, person3);

console.log(person4);
console.log(person3);
