const assert = require("chai").assert;
const createCalculator = require('./addSubtract');

describe("Calculator", function () {
    let test = '';
    beforeEach(function () {
        test = createCalculator();
    });
    it("Add 5, Get result", () => {
        test.add(5);
        assert((test.get() == 5));           
    });
    it("Add 5, Subtract 2", () => {
        test.subtract(3)
        assert((test.get() == -3));           
    });
    it("Get", () => {
        assert((test.get() == 0));           
    });
    it("Add string", () => {
        test.add('5');
        test.add('5')
        assert((test.get() == 10));           
    });
    it("Add string", () => {
        test.add('5');
        test.add(5);
        test.subtract('5');
        test.subtract(5);
        assert((test.get() == 0));           
    });
});