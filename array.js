"use strict";
console.log("hihi");

/* https://javascript.info/array */

/* 

1. How to create an array
- let array = []

2. How to get a specific element in an array - ex) the fifth element.. etc
- array[4]

3. How to add to an array - at the end, beginning or anywhere
- beginning : unshift, end : push,
 anywhere : array[5] = anything, .splice(index,0,"anything");

4. How to remove from an array - from the end, beginning or anywhere
- end : pop, beginning : shift,
 anywhere : .splice(index,1), slice(1,3)

5. How to convert to or from an array - ex) array to string, string to array.. etc
- array to string

 1. array.toString(), 2. array.join()

- Array.from() & .split

const str = "abcdefghijk";

const arr1 = str.split(); => you have to define the spliting point
const arr2 = Array.from(str); => define it by itself (ex.each letter on string)


6. Iterate (over/through) an array, and do something with each element
- for Loop? ex) for (i=0; i<arr.length; i++){
    do something }

7. Find a specific element in an array - ex) the one called "Leeloo"

*/

// exercise 1

/* let letters = ["a", "b", "c", "d", "e"];

let someLetter = letters[3];

let newarr = letters;

newarr[4] = "*";
 */

//exercise 2

const people = ["Harry", "Ron", "Hermione"];
let result;

result = people.push("Draco");

console.log(result);

console.log(people);

result = people.pop();

console.log(result);

console.log(people);

result = people.push("Nerville");

console.log(result);

console.log(people);

result = people.push("Luna");

console.log(result);

console.log(people);

result = people.slice(0, 3);

console.log(result);

console.log(people);

result = people.splice(0, 1, "Cho");

console.log(result);

console.log(people);

people[1] = "Ginny";

console.log(people);

result = people.push("Fred", "George");

console.log(result);

console.log(people);

result = people.indexOf("Fred");

console.log(result);

console.log(people);

result = people.splice(result, 1);

console.log(result);

console.log(people);

// when you do pop, it returns object itself (ex.string), if you do splice it returns in array ["string"]
