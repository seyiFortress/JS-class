// creating Arrays
/*
let arr = Array();
console.log(arr);
*/

// or

/*
const arr = new Array();
console.log(arr);
*/

// or

/*
let arr = [];
console.log(arr);
*/


// arrays of numbers
const numbers = [0, 3.14, 9.81, 37, 98.6, 100];
console.log(numbers);

// arrays of strings
const fruits = [`banana`, `orange`, `mango`, `lemon`];
console.log(fruits);

/*
// creating arrays using split method
let js = `JavaScript`;
let companiesString = `Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon`;

console.log(companiesString.split(`, `));

let jsChars = js.split(``);
console.log(jsChars);
*/

/*
// accessing array values using their indices

let firstNum = numbers[0];
console.log(firstNum);
let lastFruitIndex = (fruits.length) - 1;
let lastFruit = fruits[lastFruitIndex];
console.log(lastFruit);
*/

// modifying array values

let newNumbers = [1, 2, 3, 4, 5];
console.log(newNumbers);

newNumbers[0] = newNumbers[0] * 10;
newNumbers[1] *= 10;
console.log(newNumbers);

// getting array lenght
// .lenght applicable to get the lenght of arrays only
console.log(fruits.length);
console.log(numbers.length);

// getting index of a value in an array, returns -1 if value does not exist
console.log(newNumbers.indexOf(3)); // returns index of 2
console.log(numbers.indexOf(2)); // returns index of -1

let confirmBanana = fruits.indexOf(`mango`);
if (confirmBanana === -1){
    console.log(`This fruit does not exist in the array`)
} else{
    console.log(`This fruit does exist in the array`)
};

// getting a boolean value if value exist in an array
console.log(numbers.includes(4)); // returns false
console.log(fruits.includes(`lemon`)); // returns true

// checking if a variable is an array
console.log(Array.isArray(newNumbers)); // returns true

// converting arrays to strings
let newString = newNumbers.toString();
console.log(newString);
console.log(typeof newString); // confirm conversion to string

// joining array elements
let nameOfpersons = [`Asabenah`, `Mathias`, `Elias`, `Brooks`];
let joinedNames = nameOfpersons.join();
console.log(joinedNames);

let evenNum = [4, 6, 12, 18, 24, 30];
// 'Slice' array elements. takes 2 parameters(start index, end index)
console.log(evenNum.slice()); // returns all array values
console.log(evenNum.slice(2, 5)); // returns 12, 18 and 24 values
console.log(evenNum.slice(evenNum.length -2)); // returns 24 and 30 values

// 'Splice' array elements. takes 3 parameters(start index, number of value(s) to remove, value(s) to add)
evenNum.splice();
console.log(evenNum); // returns back the array, as nothing was sliced

evenNum = [4, 6, 12, 18, 24, 30];
evenNum.splice(1, 3);
console.log(evenNum); // returns an array of the 3 values left; 4, 24 and 30

evenNum = [4, 6, 12, 18, 24, 30];
evenNum.splice(-2, 1, true);
console.log(evenNum); // returns an array with the 5th value replaced with the 'true' boolean

// adding value(s) to the end of an array with 'push' method

// removing value(s) from the end of array with 'pop' method

// removing value(s) from the begining of an array with 'shift' method
newNumbers.shift();
console.log(newNumbers); // returns 20, 3, 4 and 5

// adding value(s) to the begining of an array with 'unshift' method
fruits.unshift('coconut');
console.log(fruits); // returns coconut, banana, orange, mango and lemon

// reverse the order of an array with 'reverse' method
fruits.reverse();
console.log(fruits); // returns lemon, mango, orange, banana and coconut

// sorting array values