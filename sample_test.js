var chai = require("chai");
var expect = chai.expect;

var sampleApp = require("./sample_app.js");

describe('Sample Test', function() {

    it('add two numbers', function(done){
    	sampleApp.add(2,8);
    });
});
