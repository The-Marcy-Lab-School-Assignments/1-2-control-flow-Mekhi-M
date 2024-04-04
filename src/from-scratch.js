const measureRain = (inches) => {
  if (inches === 0) {
    console.log('drought');
  } else if (inches < 2 && inches > 0) {
    console.log('dry');
  } else if (inches < 4 && inches >= 2) {
    console.log('average');
  } else if (inches < 6 && inches >= 4) {
    console.log('rainy');
  } else if (inches >= 6) {
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
    console.log('Happy Birthday!');
  };
};

// tests

happyBirthdayPet('dog', 12)

const funTypes = () => {
};

const rounder = () => {
};

const fizzBuzzish = () => {
};

module.exports = {
  measureRain,
  happyBirthdayPet,
  funTypes,
  rounder,
  fizzBuzzish,
};
