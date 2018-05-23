module.exports = class RandomNumber {

  randomNumberGenerator(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;

  }

}
