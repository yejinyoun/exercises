"use strict";

const people = ["Harry", "Ron", "Hermione", "Nerville"];

const result = people.sort(function (a, b) {
  if (a > b) {
    return -1;
  } else {
    return 1;
  }
});

console.log(result);

const animals = [
  { name: "Mandu", type: "cat" },
  { name: "Ttori", type: "dog" },
  { name: "Bonnie", type: "dog" },
  { name: "Hello Kitty", type: "cat" },
  { name: "Zozo", type: "hamster" },
];

const azOrder = animals.sort(function (a, b) {
  if (a.name < b.name) {
    return -1;
  } else {
    return 1;
  }
});

console.log(azOrder);

const zaOrder = animals.sort(function (a, b) {
  if (a.name > b.name) {
    return -1;
  } else {
    return 1;
  }
});

console.log(zaOrder);
