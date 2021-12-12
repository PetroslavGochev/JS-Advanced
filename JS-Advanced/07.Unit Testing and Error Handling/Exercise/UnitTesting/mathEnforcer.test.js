const assert = require("chai").assert;
const expect = require("chai").expect;
const mathEnforcer = require('./mathEnforcer');

describe("Math Enforcer", function () {
    //Add
    it("Add Five with invalid value", function () {
        assert((mathEnforcer.addFive('Invalid') == undefined));           
    });
    it("Add Five", function () {
        expect(mathEnforcer.addFive(5)).to.be.equal(10);        
    });
    it("Add Five", function () {
        expect(mathEnforcer.addFive(0.5)).to.be.equal(5.5);        
    });
    it("Add Five", function () {
        expect(mathEnforcer.addFive(-20)).to.be.equal(-15);        
    });

    // Subtract
    it("Subtract with invalid value", function () {
        expect(mathEnforcer.subtractTen('Invalid')).to.be.eq(undefined);       
    });
    it("Subtract", function () {
        expect(mathEnforcer.subtractTen(-1)).to.be.eq(-11);       
    });
    it("Subtract", function () {
        expect(mathEnforcer.subtractTen(20)).to.be.eq(10);       
    });
    it("Subtract", function () {
        expect(mathEnforcer.subtractTen(10.5)).to.be.eq(0.5);       
    });

    //Sum
    it("Sum with invalid value1", function () {
        expect(mathEnforcer.sum('Invalid',1)).to.be.eq(undefined);       
    });
    it("Sum with invalid value2", function () {
        expect(mathEnforcer.sum(2,'Invalid')).to.be.eq(undefined);       
    });
    it("Sum with invalid value", function () {
        expect(mathEnforcer.sum('Invalid','Invalid')).to.be.eq(undefined);       
    });
    it("Sum", function () {
        expect(mathEnforcer.sum(10,10)).to.be.eq(20);       
    });
    it("Sum", function () {
        expect(mathEnforcer.sum(10.5,10.5)).to.be.eq(21);       
    });     
    it("Sum", function () {
        expect(mathEnforcer.sum(-40,-20)).to.be.eq(-60);       
    });
});