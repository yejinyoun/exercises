"use strict";

const animals = [
  {
    name: "ttori",
    type: "dog",
  },
  { name: "bonnie", type: "dog" },
  {
    name: "melina",
    type: "cat",
  },
];

// return true for the parameter
function all(animal) {
  return true;
}

//return false for the parameter
function none(animal) {
  return false;
}

// if argument(each object inside array)'s property value is cat, true
function isCat(animal) {
  if (animal.type === "cat") {
    return true;
  } else {
    return false;
  }
}
//.filter is array method!
//- passes item one by one and create new array w items that fits the condition
// returns a new array, combination of parameters that passes the criteria
let allAnimals = animals.filter(all);
let noAnimals = animals.filter(none);
let cat = animals.filter(isCat);
// if a parameter (compare each object in animals array) matches the criteria

console.log("All :", allAnimals);
console.log("None :", noAnimals);
console.log("Cat :", cat);
