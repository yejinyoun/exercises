"use strict";
console.log("hihi");

function capitalize(str) {
  return str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase();
}

const name = "jinJINIII";

const capitalizedName = capitalize(name);

console.log(capitalizedName);

// calling it with a variable

console.log(capitalize(name));

//calling it without variable of capitalizedName
// bc return anyways return the value
// this is string -> str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase())
