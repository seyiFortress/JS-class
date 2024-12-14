// dog object
const dog = {}; // define dog object
dog[`name`] = `Bingo`; // add name key
dog[`legs`] = 4; // add legs key
dog[`color`] = `Black`; // add color key
dog[`age`] = 1.5; // add age key
dog[`bark`] = function () {
    return `woof woof!!!`
} // add bark key
dog[`getDogInfo`] = function () {
    let info = `The name of my ${this.color} dog is ${this.name}, it has ${this.legs} limbs and it is ${this.age} years of age. More so, it loves to bark; ${this.bark}.`
    return info
} // add getDogInfo key
dog[`breed`] = `Rothweiller`; // add breed key

console.log(dog);
console.log(dog.getDogInfo());