"use strict";

//exercise 1

function greeting(firstName) {
  return `Hello ${firstName}`;
}

const result = greeting("peter");

console.log(result);

//exercise 2

greeting("mimi");
console.log(greeting("mimi"));

console.log(greeting());

const txt = `Greeting is ${greeting("a name")}`;

console.log(txt);
