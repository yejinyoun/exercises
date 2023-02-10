"use strict";

/* for (let counter = 0; counter < 10; counter++) {
  console.log(counter);
} */

//console.log(`after the loop, counter is ${counter}`);
// -> counter is not defined, it only exists in the loop : block scope

//for loop exercise

// from 0 to 9

/* for (let counter = 0; counter < 10; counter++) {
  console.log(counter);
} */

// from 1 to 10

/* for (let counter = 1; counter < 11; counter++) {
  console.log(counter);
} */

// from 10 to 0, after 0 it console.logs the text "liftoff"

/* for (let counter = 10; counter > -1; counter--) {
  console.log(counter);

  if (counter === 0) {
    console.log("liftoff");
  }
} */

// from 1 to 19, but only counts odd numbers (no if statement, no change increment)

/* for (let counter = 1; counter < 20; counter += 2) {
  console.log(counter);
}
 */

// from 1 to 16777216, but doubling each time (2,4,8,16...)

/* for (let counter = 1; counter <= 16777216; counter *= 2) {
  console.log(counter);
} */

// from 111 to 138, in steps of 3 (meaning the second number is 114(111+3))

/* for (let counter = 111; counter <= 138; counter += 3) {
  console.log(counter);
} */

// from 100 to 0, in steps of 10

/* for (let counter = 100; counter >= 0; counter -= 10) {
  console.log(counter);
}
 */
