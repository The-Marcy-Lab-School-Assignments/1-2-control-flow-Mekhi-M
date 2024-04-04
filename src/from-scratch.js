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

const happyBirthdayPet = () => {
};

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
