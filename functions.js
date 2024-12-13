
/*
function greet () {console.log(`good afternoon!!!`)};
greet();
*/

// or

/*
function hr () {
    const newDate = new Date();
    let hour = newDate.getHours()
    return hour
}
console.log(hr());
*/

/*
function greet() {
    const newDate = new Date();
    let minutes = newDate.getMinutes()
    return minutes;
}
console.log(greet());
*/

// functions with parameters

/*
function displayName (firstName, lastName) {
    let reply = `Hello my names are ${firstName} ${lastName}`
    return reply;
}
console.log(displayName(`seyi`, `fortress`));
*/

/*
function myLanguage(language) {
    let reply = `I speak ${language}`
    return reply
};
alert(myLanguage(`yoruba`));
*/

const minusNum = function (a, B) {
    return a - B
};
console.log(minusNum(3, 1));

const sum = (function (a) {
    return a * a
})(3);
console.log(sum);

const moreWords = () => {
    first_name = `Ahmed`;
    last_name = `Abdulmojeed`;
    return `My full names are ${first_name} ${last_name}`
};
console.log(moreWords);

const oneWord = () => `Hello everyone` /* with explicit return */

/*
const mathNum = (a, b) => {
    const sumNum = a + b;
    const productNum = a * b;
    return `${sumNum}, ${productNum}`
}
console.log(mathNum(3, 6));
*/

const fullName = (firstName, secondName) => {
    return `My names are ${firstName} ${secondName}`
};
console.log(fullName(`Sarah`, `Petit`));

function addNumbers(firstNum, secondNum) {
    return firstNum + secondNum
};
console.log(addNumbers(4, 3));

const areaOfRectangle = (function (lenght, width) {
    const area = lenght * width;
    return area
})(9, 13);
console.log(areaOfRectangle);