const j = 13; // global var to this file's scope

// closure doesn't leak var scope, but you can pass things in
(function doSomething(i) {
  const k = 12;
  console.log('k inside iife:', k);
  console.log(i + 1);
})(j); // typical style

// console.log('k:', k); // k is undefined


// another style of closure, as recommended by Douglas Crockford
(function doSomethingElse(i) {
  const l = 2;
  console.log(i + 1);
}(j)); // Crockford style

// console.log('l:', l); // l is undefined
