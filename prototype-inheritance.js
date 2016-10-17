// prototype inheritance demos

////////////////////////////////////////////////////////////////////////////////
// Inheriting Properties                                                      //
////////////////////////////////////////////////////////////////////////////////
var o = {
  a: 2,
  m: function() {
    return this.a + 1;
  }
};

console.log('o.m()', o.m()) // 3

var p = Object.create(o);
// p inherits from o

p.a = 4;

console.log('p.m()', p.m()); // 5, because p.a is now 4, not 2 like in o.a


////////////////////////////////////////////////////////////////////////////////
// Objects' Prototype Chains                                                  //
////////////////////////////////////////////////////////////////////////////////

var o = {
  a: 1
};

// Objects inherit from Object.prototype

var a = ['yo', 'whadup', '?'];

// Arrays inherit from Array.prototype, which inherits from Object.prototype

function f() {
  return 2;
}

// Functions inherit from Function.prototype, which inherits from Object.prototype


////////////////////////////////////////////////////////////////////////////////
// Prototype with Constructor                                                 //
////////////////////////////////////////////////////////////////////////////////

function Graph() {
  this.vertices = [];
  this.edges = [];
}

Graph.prototype = {
  addVertex: function(v) {
    this.vertices.push(v);
  }
}

var g = new Graph();

g.addVertex(120);  // add new vertex

console.log('g:', g);  // { vertices: [ 120 ], edges: [] }


////////////////////////////////////////////////////////////////////////////////
// Using Classes                                                              //
////////////////////////////////////////////////////////////////////////////////

class Polygon {
  constructor( height, width ) {
    this.height = height;
    this.width = width;
  }
}

class Square extends Polygon {
  constructor(sideLength) {
    super(sideLength, sideLength);
  }
  get area() {
    return this.height * this. width;
  }
  set sideLength(newLength) {
    this.height = newLength;
    this.width = newLength;
  }
}

var square = new Square(2);

console.log('square', square);  // { height: 2, width: 2 }
square.sideLength = 3;
console.log('square', square);  // { height: 3, width: 3 }
console.log('square.area', square.area);  // 9
