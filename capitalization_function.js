"use strict";
// caplitalization
// string.substring(0,1).toUpperCase() + string.substring(1).toLowerCase();

/* 

let namestring = "jininiNNNi";

let newstring = namestring.substring(0, 1).toUpperCase() + namestring.substring(1).toLowerCase();

console.log(newstring);
 */

//make function w parameter and string argument

/* function capitalize(str) {
  let newstr = str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase();
  console.log(newstr);
} */

/* capitalize("tToRi"); */

// with variable

function capitalize(str) {
  let newstr = str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase();
  console.log(newstr);
}

const name = "tToRI";

capitalize(name);
