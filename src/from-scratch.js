const measureRain = (inches) => {
  if (inches === 0) {
    console.log('drought');
  } else if (inches < 2 && inches > 0) {
    console.log('dry');
  } else if (inches < 4 && inches >= 2) {
    console.log('average');
  } else if (inches < 6 && inches >= 4) {
    console.log('rainy');
  } else {
    console.log('flood');
  }
};

// tests

// measureRain(16);

const happyBirthdayPet = (breed, age) => {
  if (breed === 'snake') {
    console.log('Hiss hiss!');
  } else if (breed === 'cat' && age < 5) {
    console.log('Mew mew!');
  } else if (breed === 'cat' && age >= 5) {
    console.log('Meow meow!');
  } else if (breed === 'dog' && age < 5) {
    console.log('Arf arf!');
  } else if (breed === 'dog' && age >= 5 && age < 10) {
    console.log('Woof woof!');
  } else if (breed === 'dog' && age >= 10) {
    console.log('Boof!');
  } else {
    console.log('Happy birthday!');
  }
};

// tests

// happyBirthdayPet('dog', 12)

const funTypes = (jsType) => {
  // console.log(jsType);
  if (typeof jsType === 'string') {
    console.log('That\'s just some text.');
  } else if (typeof jsType === 'number' && 
            !Number.isNaN(jsType)) {
    console.log('That\'s a good number.');
  } else if (typeof jsType === 'boolean') {
    console.log('To bool, or not to bool?');
  } else if (typeof jsType === 'undefined') {
    console.log('Nothing, but I didn\'t set that.');
  } else if (jsType === null) {
    console.log('Nothing, and I did set that.');
  } else if (typeof jsType === 'object' && 
            jsType !== null && !Array.isArray(jsType)) {
    console.log('Anybody got the key?');
  } else if (Array.isArray(jsType)) {
    console.log('I order you to be indexed.');
  } else /*if (Number.isNaN(jsType)) */{
    console.log('Well, now you\'re just showing off.');
  }
};

// tests

// funTypes('im chillin B)')
// funTypes(420)
// funTypes(true)
// funTypes(undefined)
// funTypes(null)
// funTypes({amIAnObject: 'ya lol'})
// funTypes([])
// funTypes(NaN)

const rounder = (float, roundingSetting) => {
  if (roundingSetting === 'up') {
    return Math.ceil(float);
  } else if (roundingSetting === 'down') {
    return Math.floor(float);
  } else /*if (roundingSetting === 'honest') */{
    return Math.round(float);
  }
};

// tests

// console.log(rounder(3.5, 'up'))
// console.log(rounder(3.5, 'down'))
// console.log(rounder(3.4, 'honest'))

const fizzBuzzish = (num) => {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log("fizzBuzz!");
  } else if (num % 5 === 0) {
    console.log("buzz")
  } else if (num % 3 === 0) {
    console.log("fizz")
  } else {
    console.log(num)
  }
}

// tests

// fizzBuzzish(0)
// fizzBuzzish(1)
// fizzBuzzish(2)
// fizzBuzzish(3)
// fizzBuzzish(4)
// fizzBuzzish(5)
// fizzBuzzish(6)
// fizzBuzzish(7)
// fizzBuzzish(8)
// fizzBuzzish(9)
// fizzBuzzish(10)
// fizzBuzzish(11)
// fizzBuzzish(12)
// fizzBuzzish(13)
// fizzBuzzish(14)
// fizzBuzzish(15)

module.exports = {
  measureRain,
  happyBirthdayPet,
  funTypes,
  rounder,
  fizzBuzzish,
};
