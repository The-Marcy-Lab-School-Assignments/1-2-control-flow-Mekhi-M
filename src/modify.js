const wildlyBiasedReview = (location) => {
  if (typeof location !== 'string' || location.length < 1) {
    console.log('That\'s not a place.');
    return;
  }

  if (location === 'NYC') {
    console.log('THE GREATEST CITY IN THE WORLD');
    console.log('THE CITY THAT NEVER SLEEPS');
    console.log('WOW WHAT A CITY');
  } else {
    console.log('Yea that place is cool I guess');
  }
};

// tests

wildlyBiasedReview('hi');
wildlyBiasedReview(100);

module.exports = {
  wildlyBiasedReview,
};
