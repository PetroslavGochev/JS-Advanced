const assert = require("chai").assert;
const lookupChar = require('./charLookup');

describe("Even or odd number", function () {
    it("Retrun char at index", function () {
        assert((lookupChar('tes',2) == 's'));           
    });
    it("Retrun char at index", function () {
        assert((lookupChar('t',0) == 't'));           
    });
    it("Incorect index", function () {
        assert((lookupChar('test',15) == 'Incorrect index'));           
    });
    
    it("Incorect index", function () {
        assert((lookupChar('test',2.2) == undefined));           
    });
    
    it("Incorect index", function () {
        assert((lookupChar('test',-5) == 'Incorrect index'));           
    });
    it("Incorect index", function () {
        assert((lookupChar('test','test') == undefined));           
    });
    it("Incorect index", function () {
        assert((lookupChar(22,'test') == undefined));           
    });
    it("Incorect string", function () {
        assert((lookupChar(5,5) == undefined));           
    });
});