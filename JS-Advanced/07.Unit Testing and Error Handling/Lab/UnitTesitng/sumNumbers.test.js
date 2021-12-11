const assert = require("chai").assert;
const sum = require('./sumNumbers');

describe("Sum Numbers Tests", function (arr) {
    it("Sum of [1,1]", function () {
        assert((sum([1,1])==2), 'Equal sum');           
    });
    it("Sum of [1]", function () {
        assert((sum([1])!=2), 'Not Equal Sum');           
    });
});