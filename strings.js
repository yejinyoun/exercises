"use strict";

const name = "Pipi Popo Papaya";
const drink = "pepsi";

const text = `Hello ${name}, 
would you like a ${drink}?`;

console.log(text);

const len = name.length;

console.log(`${name} is ${len} characters long.`);

const letter = name[0];

console.log(`First Letter of ${name} is ${letter}`);

const str1 = "    There is    space here \n   ";
const str2 = str1.trim();

console.log(str2);

/* trim() removes spaces(even \n, \t) on the beginning and the end. */

/* trick
console.log(`_${variable}_`) to check if there was any space.
*/

const firstName = name.substring(0, 4);

console.log(`_${firstName}_`);

const lastName = name.substring(10);
console.log(`_${lastName}_`);
