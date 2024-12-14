const fullName = (firstName, secondName) => {
    return `My names are ${firstName} ${secondName}`
};
console.log(fullName(`Sarah`, `Petit`));

function addNumbers(firstNum, secondNum) {
    return firstNum + secondNum
}; // function declaration
console.log(addNumbers(4, 3));

const areaOfRectangle = (function (lenght, width) {
    const area = lenght * width;
    return area
})(9, 13); // self-invoking expression function
console.log(areaOfRectangle);