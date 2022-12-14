'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;


/////////////////
function logger() {
    console.log('My name id Jonas');
}

logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

//////////////////

// function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);
// console.log(age1);


// Function expression
const calcAge2 = function (birstYear) {
    return 2037 - birstYear;
}
const age2 = calcAge2(1991);
console.log(age1, age2);


// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUtilRetirment = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirment = 65 - age;
    // return retirment;
    return `${firstName} retires in ${retirment} years.`;
}

console.log(yearsUtilRetirment(1991));
console.log(yearsUtilRetirment(1980, 'Bob'));


function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    apples = cutFruitPieces(apples);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3));

const calcAverage = (a, b, c) => (a + b + c) / 3;

const scoreDolphins = calcAverage(54, 54, 87);
const scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins}) vs. ${avgKoalas}`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas}) vs. ${avgDolphins}`);
    } else {
        console.log('No team wins...');
    }
}

checkWinner(scoreDolphins, scoreKoalas);
checkWinner(111, 555);

const friend1 = 'Micheal';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1192, 2648, 2018);
console.log(friends[1]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice'];


function calcAge(birthYear) {
    return 2037 - birthYear;
}

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);

const friends = ['Michael', 'Steven', 'Peter'];

const newLength = friends.push('Jay');
console.log(friends);

friends.unshift('John');
console.log(friends);

friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.includes('Bob'));
friends.push(23);
console.log(friends.includes('23'))

const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);


const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2038 - 1991,
    job: 'teacher',
    friends: ['Michelle', 'Peter', 'Steven']
};
console.log(jonas);
console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends');

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request!  Choose between firstName, lastName, age, job and friends');
}

jonas.location = 'Protugal';
jonas['twitter'] = '@jasdfgrewa';
console.log(jonas);

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    job: 'teacher',
    friends: ['Michelle', 'Peter', 'Steven'],
    birthYear: 1991,

    // calcAge: function () {
    //     return 2037 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSunnary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he hs a driver's livense`;
    }
};

console.log(jonas.calcAge());
console.log(jonas.age);

console.log(jonas.getSunnary());

const jonas = [
    'Jonas',
    'Schmedtmann',
    2038 - 1991,
    'teacher',
    ['Michelle', 'Peter', 'Steven']
];

for (let i = 0; i < jonas.length; i++) {
    console.log(jonas[i], typeof jonas[i]);
}

const years = [1969, 1898, 2004, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages[i] = 2037 - years[i];
}
console.log(ages);

// continue and break
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'string') continue;
    console.log(jonas[i]);
}

for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number') break;
    console.log(jonas[i]);
}

// let rep = 1;
// while (rep <= 10) {
//     console.log(`rep = ${rep}`);
//     rep++;
// }

let rep = 1;
while (rep != 6) {
    rep = Math.trunc(Math.random() * 6);
    console.log(rep);
}
*/

const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
let sum = 0;
for (let l = 0; l < bills.length; l++) {
    const tip = calcTip(bills[l]);
    tips.push(tip);
    totals.push(tip + bills[l]);
    sum += tip + bills[l];
    if (l == bills.length - 1)
        sum = sum / bills.length;
}

console.log(sum);

