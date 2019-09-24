var chai = require("chai");
var expect = chai.expect;

var sampleApp = require("./sample_app.js");

describe('Sample Test', function() {

    it('add two numbers', function(){
    	expect(sampleApp.add(2,8)).to.equal(10);
    });

    it('add two numbers error', function(){
    	expect(sampleApp.add(2,8)).to.equal(20);
    });
});
