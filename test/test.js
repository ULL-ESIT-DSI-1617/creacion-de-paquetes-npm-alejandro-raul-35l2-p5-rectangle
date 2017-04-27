"use strict";

var Rectangle = require('../lib/rectangle.js');
let Shape = require('@ull-alejandro-raul-35l2/ull-shape');
require("should");

describe("getArea", function() {
  
  it("must compute the rectangle shape area correctly", function(){
		let a = new Shape ({ width: 100, height: 50 }, 'Rectangle');
		let s = a.getArea();
		s.should.equal(5000);
	});
  
  it("must compute the rectangle area correctly. Rectangle object", function() {
    let a = new Rectangle({ width: 100, height: 50 });
    let s = a.getArea();
    s.should.equal(5000);
  })
});
