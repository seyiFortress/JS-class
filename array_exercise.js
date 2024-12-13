/*
// task a
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// add Meat to the begining of the shopping cart if it has not already be added
if (shoppingCart.includes(`Meat`)) {
    console.log(`Meat has already been added!`)
} else {
    shoppingCart.unshift(`Meat`)
};

// add Sugar to the end of the shopping cart if it has not already be added
if (shoppingCart.includes(`Sugar`) === false) {
    shoppingCart.push(`Sugar`)
} else {
    console.log(`Sugar has already been added!`)
};

console.log(shoppingCart);

// remove Honey if you are allergic
let isAllergic;
isAllergic = window.confirm(`Do you have honey allergies!?`);
if (isAllergic) {
    let indHoney = shoppingCart.indexOf(`Honey`);
    shoppingCart.splice(indHoney, 1);
    alert(`${shoppingCart} are your Items for purchase!!!`);
}else {
    alert(`${shoppingCart} are your Items for purchase!!!`);
}

// modify 'Tea' to 'Green Tea'
shoppingCart[shoppingCart.indexOf(`Tea`)] = `Green Tea`;
console.log(shoppingCart);
*/

// task b
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// sort the array and find the min and max age
let sortedAge = ages.sort(); // sorted ages
console.log(`"${sortedAge}" is the sorted ages in numerical order!`);

let minAge = Math.min(sortedAge.toString()); // minimum age
let maxAge = Math.max(sortedAge.toString()); // maximum age
console.log(`${maxAge} is the maximum age!`);
console.log(`${minAge} is the minimum age!`);

// find the median age
let medianAge; // defined median age
let midIndex;
if ((ages.length % 2) === 0) {
    midIndex = ages.length / 2;
    const firstMedAge = ages[(midIndex) - 1];
    const secondMedAge = ages[midIndex];
    medianAge = (firstMedAge + secondMedAge) / 2;
}else {
    midIndex = Math.ceil(ages.length / 2);
    medianAge = ages[(midIndex) - 1];
}
console.log(ages);
console.log(`${medianAge} is the median age of the group!`);

// find the average age
const numItems = ages.length;
let sumItems;
for (let i = 0; i < numItems; i++) {
    sumItems += ages[i];
}
const averageAge = sumItems / numItems; // average age
console.log(`${averageAge} is the average age of the group!`);

// find the range of the ages
const ageRange = maxAge - minAge;
console.log(`${ageRange} is the age range of the group!`);