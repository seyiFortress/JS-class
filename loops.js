// for loops
/* for (let num = 1; num < 6; num++) {
    console.log(num);
}; */

// for in loops (can only be used in an object to get the keys)
/* const person = {
    name: `Joy`,
    gender: `female`,
    languages: [`english`, `french`],
    weight: `20kg`
};
for (let one in person) {
    console.log(one)
    if(one === `name`) {
        console.log(`my name is ${person.name}`)
    }else{
        console.log(`there's no name`)
    }
} */

// while loops
let b = 2;
while (b < 8) {
    console.log(b, b * b, `hello`)
    b++
};

for (let i = 1; i <= 10; i++) {
    console.log(i)
};