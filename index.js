// let emptyStore;
// emptyStore = "Seyi Fortress";
// console.log(emptyStore);

let firstSum = 4;
let secondSum = 16;

/*let valueSum = firstSum + secondSum;
console.log(valueSum);*/

/*secondSum %= firstSum;
console.log(secondSum);*/

// let a = 7;
// if (a == 9){
//     console.log(a * a);
// }
// else if (a == 2){
//     console.log(a ** 3);
// }
// else {
//     console.log('a can be any number aside 9, 8, and 2');
// }

let num_1 = 20;
let num_2 = 10;

// if (num_1 < num_2){
//     console.log("First number is less than Second number");
// }
// else if (num_1 > num_2){
//     console.log("First number is greater than Second number");
// }
// else if (num_1 == num_2){
//     console.log("First number equals Second number");
// }
// else{
//     console.log("It is false");
// };

// num_1 < num_2 ? console.log("First number is less than Second number") : num_1 > num_2 ? console.log("First number is greater than Second number") : num_1 == num_2 ? console.log("First number equals Second number") : console.log("It is false");

// let day = 'Saturday';
// switch (day){
//     case "Monday":
//         console.log('Today is Monday');
//         break;
//     case "Tuesday":
//         console.log('Today is Tuesday');
//         break;
//     case "Wednesday":
//         console.log('Today is Wednesday');
//         break;
//     case "Saturday":
//         console.log('Today is Saturday');
//         break;
//     default:
//         console.log('Its just a day of the week');
// }

let isMale = 'male';

// switch (isMale){
//     case 'female':
//         console.log('This is a Female');
//         break;
//     case 'male':
//         console.log('This is a male');
//         break;
//     default:
//         console.log('this is neither male nor female');
// }

// Math method
// let myDecimal = 45.8;

// let answer = Math.round(myDecimal);
// console.log(answer);

// let floorAnswer = Math.floor(myDecimal);
// console.log(floorAnswer);

// let ceilAnswer = Math.ceil(myDecimal);
// console.log(myDecimal);

// let randomNumber = Math.floor(Math.random() * 6); // returns value as integer instead of a float
// console.log(randomNumber);

// // Date method
// const myDate = new Date();
// console.log(myDate)

// let myYear = myDate.getFullYear();
// console.log(myYear);

// let getMonth = myDate.getMonth() + 1; // getMonth method start january; the first month at index 0
// console.log(getMonth);

// if (getMonth === 12){
//     console.log('December is the month');
// }
// else{
//     console.log('this is not the month');
// };

// let getToday = myDate.getDay();
// console.log(getToday);

// switch (getToday){
//     case 1: 
//         console.log('today is monday');
//         break;
//     case 2:
//         console.log('today is tuesday');
//         break;
//     case 0:
//         console.log('today is sunday');
//         break;
//     default:
//         console.log('its neither of the week days');
//         break;
// };

// // prompt Method
// let enterName = prompt('Enter your Name');

// // alert Method
// let hourOfDay = myDate.getHours();
// console.log(hourOfDay);

// // confirm Method
// let confirmText = confirm('Are you alright?');
// if (confirmText === true){
//     console.log('Wonderful');
// } else{
//     console.log('Get well soon')
// }

// hourOfDay < 12 ? alert(`Good Morning ${enterName}`): hourOfDay <= 15 ? alert(`Good Afternoon ${enterName}`): alert(`Good Evening ${enterName}`); // Using tenery

/* variable.lenght();
variable.allLowerCase();
variable.allUpperCase();
string.split('');
string.trim(); removes un-wanted spaces before and after the value;
string.includes('char'); returns a boolean if true;
string.replace('old_char', 'new_char');
string.index('char');*/

// let num = `9.81`;
// parseFloat(num) === 10 ? console.log(num): console.log(Math.ceil(parseFloat(num)));

// let word_1 = `python`;
// let word_2 = `jargon`;
// let confirm_1 = word_1.includes(`on`);
// let confirm_2 = word_2.includes(`on`);

// if (confirm_1 && confirm_2){
//     console.log(`its seen in the both of them`);
// }
// else{
//     console.log(`its not in the both of them`);
// }

// let sentence = `I hope this course is not full of jargon.`;
// let check = sentence.includes(`jargon`);

// check ? console.log(`the sentence contains jargon`): console.log(`the sentence does not contain jargon`);

// let genNum_1 = Math.floor(Math.random() * 101);
// console.log(genNum_1);

// let genNum_2 = Math.floor((Math.random() * 51) + 50);
// console.log(genNum_2);

let scoreInput = prompt(`Enter your Score!!!`);
let intScore = parseInt(scoreInput);

if (intScore <= 49) {
    console.log(`You have a grade "F" with that score`);
} else if (intScore <= 59) {
    console.log(`You have a grade "D" with that score`);
} else if (intScore <= 69) {
    console.log(`You have a grade "C" with that score`);
} else if (intScore <= 89) {
    console.log(`You have a grade "B" with that score`);
} else if (intScore >= 90) {
    console.log(`You have a grade "A" with that score`);
};