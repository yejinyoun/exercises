"use strict";

/* Given a single name string in an unknown case, e.g. “peter” or “PETER” 

- create a new string with the same name, where the third letter is uppercase, and the rest is lowercase. I.e. “peTer”.

Hint: use substring, toUpperCase, toLowerCase and simple string concatenation

 */

let name = "PETER";

let newname =
  name.substring(0, 2).toLowerCase() +
  name.substring(2, 3).toUpperCase() +
  name.substring(3).toLowerCase();

console.log(newname);
