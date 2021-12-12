const assert = require("chai").assert;
const isOddOrEven = require('./evenOrOdd');

describe("Even or odd number", function () {
    it("Even numebr", function () {
        assert((isOddOrEven('even') == 'even'));           
    });
    it("Odd number", function () {
        assert((isOddOrEven('odd') == 'odd'));           
    });
    it("Incorect string", function () {
        assert((isOddOrEven(22) == undefined));           
    });
});