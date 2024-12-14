
const odds = [1, 3, 5, 7, 9];
// console.log each element in the odds array

for (const value in odds) {
    console.log(odds[value]);
} // use of for in loop

for (let value2 = 0; value2 < odds.length; value2++) {
    console.log(odds[value2]);
} // use of for loop

for (const value3 of odds) {
    console.log(value3);
} // use of for of loop

let value4 = 0;
while (value4 < odds.length) {
    console.log(value4);
    value4 = value4 + 1; // iterate value4!
} // use of while loop

let value5 = 0;
do {
    console.log(odds[value5]);
    value5++; // code block runs at least once
} while (value5 < odds.length); // use of do while loop

odds.forEach((value6) => {
    console.log(value6)
}); // use of for each loop

/*
const evens = [2, 4, 6, 8, 10];
// console.log each element in the evens array

let value = 0;
while (value < evens.length) {
    console.log(evens[value]);
    value++; // iterate value!
}

let value2 = 0;
do {
    console.log(evens[value2]);
    value2 = value2 + 1; // iterate value2!
} while (value2 < evens.length);
*/