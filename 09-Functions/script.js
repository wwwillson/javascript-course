'use strict';

// const bookings = [];
// const creatBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   const booking = { flightNum, numPassengers, price };
//   console.log(booking);
//   bookings.push(booking);
// };

// creatBooking('LADSF');
// creatBooking('LADSF', 2, 800);
// creatBooking('LADSF', 2);
// creatBooking('LADSF', 5);

// const flight = 'LH345';
// const jonas = {
//   name: 'Jonas Schmedtmann',
//   passport: 34521345,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 34521345) {
//     alert('Checked in');
//   } else {
//     alert('Wrong passport');
//   }
// };

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// // Callback Functions
// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // Higher-order function
// const transformer = function (str, fn) {
//   console.log(fn(str));
//   console.log(fn.name);
// };

// transformer('JavaScript is the best!', upperFirstWord);

// // JS use callbacks all the time
// const high5 = function () {
//   console.log('╰(*°▽°*)╯');
// };
// document.body.addEventListener('click', high5);

// // Returning Functions
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');
// greeterHey('Jonas');
// greeterHey('Steven');

// greet('Hello', 'Jonas');

// const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);

// greetArr('Hi')('Jonaaaaaaaaas');

// The call and apply Methods
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');

const eurowings = {
  name: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23,'Sarah Williams);

// Call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Coper');
console.log(lufthansa);

// Apply method
const flightData = [562, 'George Cooper'];
book.apply(eurowings, flightData);
console.log(eurowings);

book.call(eurowings, ...flightData);
