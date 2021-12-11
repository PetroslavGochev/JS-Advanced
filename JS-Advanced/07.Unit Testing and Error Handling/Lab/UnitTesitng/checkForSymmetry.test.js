const assert = require("chai").assert;
const isSymmetric = require('./checkForSymmetry');

describe("Is array symmetric", function (arr) {
    it("Receive incorect type", function () {
        assert((isSymmetric({age:20, year:1996}) == false), 'Incorect type');           
    });
    it("Symmetric array", function () {
        assert((isSymmetric([1,2,2,1]) == true), 'Array is symetric');           
    });
    it("Non symmetric array", function () {
        assert((isSymmetric([1,2,1,1]) == false), 'Array isn`t symetric');           
    });
    it("Invalid type", function () {
        assert((isSymmetric([1,2,'1']) == false), 'Array isn`t symetric');           
    });
});