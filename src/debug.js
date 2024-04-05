const getRandomIntInRange = (min, max) => {
  if (min > max) throw new Error('min must be less than max');
  return Math.floor(Math.random() * (max - min) + min);
};

// tests

// console.log(getRandomIntInRange(7, 49))
// console.log(getRandomIntInRange(77, 3))

const coolnessGauge = (numOfFridges) => {
  return numOfFridges < 4 ? 'You need more fridges.' : 'You are downright chilly!';
};

// tests

// console.log(coolnessGauge(4))

const funkoPopAddictionLevel = (numOfFunkoPops) => {
  if (numOfFunkoPops === 0) {
    console.log('No pops? Maybe try one.');
  } else if (numOfFunkoPops >= 1 && numOfFunkoPops <= 10) {
    console.log('Only a few? Keep having fun!');
  } else if (numOfFunkoPops > 10 && numOfFunkoPops <= 20) {
    console.log('You have a problem.');
  } else if (numOfFunkoPops > 20 && numOfFunkoPops <= 30) {
    console.log('You need help!');
  } else {
    console.log('You need an intervention!!!');
  }
};

// tests

// beyond saving ngl
// funkoPopAddictionLevel(80000)

const getWeatherReport = (temperature) => {
  let weatherReport = '';
  if (temperature > 90) {
    weatherReport = "It's hot and gross out.";
    console.log(weatherReport);
  } else if (temperature >= 32 && temperature <= 70) {
    weatherReport = "It's not too bad!";
    console.log(weatherReport);
  } else if (temperature > 70) {
    weatherReport = "At least it's a dry heat.";
    console.log(weatherReport);
  } else /*if (temperature < 32) */{
    weatherReport = "Wow, it's cold out.";
    console.log(weatherReport);
  }
  console.log("And that's your report!");
  return weatherReport;
};

// tests

// getWeatherReport(95);
// getWeatherReport(80);
// getWeatherReport(50);
// getWeatherReport(30);

const returnPositiveNegativeZero = (num) => {
  if (num === 0) {
    return 'Zero'
  } else {
  return num > 0
    ? "Positive" : "Negative";
  }
};

//tests

// console.log(returnPositiveNegativeZero(0))
// console.log(returnPositiveNegativeZero(-1))
// console.log(returnPositiveNegativeZero(1))

module.exports = {
  getRandomIntInRange,
  coolnessGauge,
  funkoPopAddictionLevel,
  getWeatherReport,
  returnPositiveNegativeZero,
};
