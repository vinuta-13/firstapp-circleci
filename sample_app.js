'use strict';

this.add = function (a, b) {
	return a + b;
}

this.sub = function (a, b) {
	return a -b;
}

module.exports = {
	add: this.add,
	sub: this.sub
}