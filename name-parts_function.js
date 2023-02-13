"use strict";

// split into firstName, middleName, lastName

/* let fullName = "Harry James Potter";

let firstName = fullName.substring(0, fullName.indexOf(" "));

console.log(`_${firstName}_`);

let middleName = fullName.substring(
  fullName.indexOf(" ") + 1,
  fullName.indexOf(" ", fullName.indexOf(" ") + 1)
);
console.log(`_${middleName}_`);

let lastName = fullName.substring(fullName.indexOf(" ", fullName.indexOf(" ") + 1) + 1);

console.log(`_${lastName}_`);
 */

//function w parameter and argument

/* function getNameParts(fullName) {
  let firstName = fullName.substring(0, fullName.indexOf(" "));

  console.log(`_${firstName}_`);

  let middleName = fullName.substring(
    fullName.indexOf(" ") + 1,
    fullName.indexOf(" ", fullName.indexOf(" ") + 1)
  );
  console.log(`_${middleName}_`);

  let lastName = fullName.substring(fullName.indexOf(" ", fullName.indexOf(" ") + 1) + 1);

  console.log(`_${lastName}_`);
}

getNameParts("Harry Lily Potter"); */

//function w parameter and variable

function getNameParts(fullName) {
  let firstName = fullName.substring(0, fullName.indexOf(" "));

  console.log(`_${firstName}_`);

  let middleName = fullName.substring(
    fullName.indexOf(" ") + 1,
    fullName.indexOf(" ", fullName.indexOf(" ") + 1)
  );
  console.log(`_${middleName}_`);

  let lastName = fullName.substring(fullName.indexOf(" ", fullName.indexOf(" ") + 1) + 1);

  console.log(`_${lastName}_`);
}

const myName = "Jin ttori toto";

getNameParts(myName);
