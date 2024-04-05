const measureRainSwitch = (inches) => {
  switch (true) {
    case inches === 0: 
      console.log('drought');
      break;

    case inches < 2 &&  inches > 0:
      console.log('dry');
      break;

    case inches < 4 &&  inches >= 2:
      console.log('average');
      break;

    case inches < 6 &&  inches >= 4:
      console.log('rainy');
      break;

    case inches >= 6:
      console.log('flood');
      break;
  }
};

// tests

// measureRainSwitch(16);

const rounderSwitch = (float, roundingSetting) => {
  switch (roundingSetting) {
    case 'up':
      return Math.ceil(float);

    case 'down':
      return Math.floor(float);
      
    case 'honest':
      return Math.round(float);
  }
};

// tests

// console.log(rounderSwitch(3.5, 'up'))
// console.log(rounderSwitch(3.5, 'down'))
// console.log(rounderSwitch(3.4, 'honest'))

module.exports = {
  measureRainSwitch,
  rounderSwitch,
};
