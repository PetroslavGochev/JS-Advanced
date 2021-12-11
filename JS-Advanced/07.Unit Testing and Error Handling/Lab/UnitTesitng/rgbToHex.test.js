const assert = require("chai").assert;
const rgbToHexColor = require('./rgbToHex');

describe("RgbToHex", function () {
    it("Red color is not integer", function () {
        assert((rgbToHexColor('red',2,3) == undefined));           
    });
    it("Red color is under 0", function () {
        assert((rgbToHexColor(-1,2,3) == undefined));           
    });   
    it("Red color is over 255", function () {
        assert((rgbToHexColor(256,2,3) == undefined));           
    });
    it("Return valid hex", function () {
        assert((rgbToHexColor(2,255,255).length == 7));           
    });

    it("Green color is not integer", function () {
        assert((rgbToHexColor(25,'test',2) == undefined));           
    });
    it("Green color is under 0", function () {
        assert((rgbToHexColor(2,-2,2) == undefined));           
    });   
    it("Green color is over 255", function () {
        assert((rgbToHexColor(2,256,2) == undefined));           
    });
    it("Blue color is not integer", function () {
        assert((rgbToHexColor(25,2,'test') == undefined));           
    });
    it("Blue color is under 0", function () {
        assert((rgbToHexColor(2,2,-2) == undefined));           
    });   
    it("Blue color is over 255", function () {
        assert((rgbToHexColor(2,2,256) == undefined));           
    });
    it("Return valid hex", function () {
        assert((rgbToHexColor(2,2,2) == '#020202'));           
    });
    
});

