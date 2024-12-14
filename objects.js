// object
const person = {
    firstName: `John`,
    lastName: `Peter`,
    age: 25,
    country: `Finland`,
    isMarried: true,
    getDetails: function () {
        return `My name is ${this.firstName} ${this.lastName}. I am from ${this.country}`
    }
} // defining the 'person' object
console.log(person.lastName);
console.log(person[`age`]);
console.log(person.getDetails());

// adding and assigning key values
person.gender = `Male`; // add gender key
console.log(person);

// object static methods
const person2 = Object.assign({}, person); // copy properties from another object using object.assign() method
console.log(person2);

const keysOfPerson2 = Object.keys(person2); // get property keys of an object using object.keys() method in array
console.log(keysOfPerson2);

const valuesOfPerson = Object.values(person); // get property values of an object using object.values() method in array
console.log(valuesOfPerson);

const propOfPerson2 = Object.entries(person2); // get the keys and values of an object using object.entries() method in array
console.log(propOfPerson2);

isPresent = Object.hasOwn(person, `gender`); // check if a specific key exist in an object using object.hasown() method
console.log(isPresent); // returns boolean