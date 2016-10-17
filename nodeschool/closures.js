function foo() {
  var bar;
  quux = false;
  function zip() {
    var quux;
    bar = true;
  }
  return zip;
}
