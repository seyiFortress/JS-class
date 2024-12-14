// functions with no argument
function greet () {console.log(`good afternoon!!!`)}; // functions with no return 
greet();

function hr () {
    const newDate = new Date();
    let hour = newDate.getHours()
    return hour
} // functions with return
console.log(hr());

function min() {
    const newDate = new Date();
    let minutes = newDate.getMinutes()
    return minutes;
} // functions with return
console.log(min());

// functions with argument
function displayFullName (firstName, lastName) {
    let reply = `Hello my names are ${firstName} ${lastName}`
    return reply;
}
console.log(displayFullName(`seyi`, `fortress`)); // call function with 2 parameters

function myLanguage(language) {
    let reply = `I speak ${language}`
    return reply
};
alert(myLanguage(`yoruba`)); // call function with a parameter

// anonymous functions
const minusNum = function (a, B) {
    return a - B
};
console.log(minusNum(3, 1));

const sum = (function (a) {
    return a * a
})(3);
console.log(sum);

// arrow functions
const moreWords = () => {
    first_name = `Ahmed`;
    last_name = `Abdulmojeed`;
    return `My full names are ${first_name} ${last_name}`
};
console.log(moreWords);

const oneWord = () => `Hello everyone` // with explicit return 

const mathNum = (a, b) => {
    const sumNum = a + b;
    const productNum = a * b;
    return `${sumNum}, ${productNum}`
}
console.log(mathNum(3, 6));