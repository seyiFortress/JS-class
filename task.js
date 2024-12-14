const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
}

const countries = [ 'Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya']

// 1.	Find the person who has many skills in the users object.
let Alex_numOfSkills = null; // get number of skills for Alex
for (const skill in users.Alex[`skills`]) {
    const indexVal = users.Alex[`skills`].indexOf(skill);
    Alex_numOfSkills = Alex_numOfSkills - indexVal;
};
let Asab_numOfSkills = null; // get number of skills for Asab
for (const skill in users.Asab[`skills`]) {
    const indexVal = users.Asab[`skills`].indexOf(skill);
    Asab_numOfSkills = Asab_numOfSkills - indexVal;
};
let Brook_numOfSkills = null; // get number of skills for Brook
for (const skill in users.Brook[`skills`]) {
    const indexVal = users.Brook[`skills`].indexOf(skill);
    Brook_numOfSkills = Brook_numOfSkills - indexVal;
};
let userSkills = [Alex_numOfSkills, Asab_numOfSkills, Brook_numOfSkills];
switch (Math.max(...userSkills)) {
    case Alex_numOfSkills:
        console.log(`Alex has the most skills in the users object!`);
        break;
    case Asab_numOfSkills:
        console.log(`Asab has the most skills in the users object!`);
        break;
    default:
        console.log(`Brook has the most skills in the users object!`);
        break;
}; // user with highest number of skills

// 2.	Count logged in users, count users having greater than equal to 50 points from the following object.
const loginCount = 0;
if (users.Alex.isLoggedIn) {
    loginCount++;
};
if (users.Asab.isLoggedIn) {
    loginCount++;
};
if (users.Brook.isLoggedIn) {
    loginCount++;
};
console.log(`${loginCount} user(s) logged in`); // logged in users

const userNames = Object.keys(users);
let userIndex = 0;
const usersConfirmed = [];
userNames.forEach((user) => {
    if (users[user] && users[user].points >= 50) { // confirm if such user exist before comparison
        usersConfirmed.push(user);
    }
    userIndex++;
})

console.log(`${usersConfirmed} are user(s) with points greater or equal 50 points`); //users having greater than equal to 50 points

// 3.	Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.
let ArrayItems = [7, 6, 1, 2, 1];
function sumOfArrayItems(ArrayItems) {
    let sumOfItems = 0;
    for (let index = 0; index < ArrayItems.length; index++) {
        sumOfItems += ArrayItems[index];
    }
    return sumOfItems; // return sum of all items
} // sumOfArrayItems function with array parameter
console.log(sumOfArrayItems(ArrayItems)); // call and display the use of sumOfArrayItems
let index = 0;
do {
    if (typeof ArrayItems[index] !== `number`) { // Check that the array items are number types
        console.log(`${ArrayItems[index]} is an array item of number datatype!`) // reasonable feedback . Showing the *specific* element that's not a number
    } else {
        console.log(`${ArrayItems[index]} is an array item of number datatype!`) // Showing the *specific* element that's a number
    }
    index += 1;
} while (index < ArrayItems.length);

// 4.	Write a function which checks if all the items of the array are the same data type
let isSameDataType = (arr) => {
    if (arr.length === 0) {
        return true; // Empty array has the same data type
    }
    const firstItemType = typeof arr[0]; // Get the type of the first element
    for (let index = 1; index < arr.length; index++) {
        if (typeof arr[index] !== firstItemType) {
            return false; // If any element has a different type, return false
        }
        else {
            return true; // All elements have the same type
        }
    }
};
// confirm
// let studentInfo = [0, 1, 2, 3, "Tosin", "Mike", {name: "Abel Joe", age: 250}];
console.log(isSameDataType(ArrayItems));

// 5.	Extract all the countries (countries array) contain the word 'land' from the countries array and print it as array.
let landContainingCountry = [];
for (let index = 0; index < countries.length; index++) {
    const country = countries[index];
    if (country.includes(`land`)) {
        landContainingCountry.push(country)
        index++;
    };
};
console.log(landContainingCountry);

// 6.	Extract all the countries (countries array) containing only four characters from the countries array and print it as array.
let _4_charCountry = [];
for (let index = 0; index < countries.length; index++) {
    const country = countries[index];
    if (country.length == 4) {
        _4_charCountry.push(country)
        index++;
    };
};
console.log(_4_charCountry);
/*



*/