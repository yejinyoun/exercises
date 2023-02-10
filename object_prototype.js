"use strict";

const Animal = {
  name: "",
  type: "unknown",
  desc: "",
  age: 0,
};

// prototype names start with upper case by convention.
// can set to default values

const animal = Object.create(Animal);
// can create actual objects like this
// object names start with lower case by convention

// -> animal.name = name;
// animal.type = type;
// animal.desc = desc;

// but they can be overwritten in the object without modifying the prototype

Animal.image = "image.jpg";

console.log(animal.image);
