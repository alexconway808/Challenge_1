var should = require('chai').should();
var challenge_1 = require("../challenge_1");


describe("Sum of a Multiple", function () {
  var sumof5 = challenge_1.sumOfAMultiple(5);
  sumof5.should.equal(5);

  });