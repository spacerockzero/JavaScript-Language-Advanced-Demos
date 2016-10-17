// define the class
class Kitten {
  constructor() {
    this.name = 'Garfield';
    this.color = 'brown';
    this.gender = 'male';
  }
  setName(name) {
    this.name = name;
    return this;
  }
  setColor(color) {
    this.color = color;
    return this;
  }
  setGender(gender) {
    this.gender = gender;
    return this;
  }
  save() {
    console.log(
      'saving ' + this.name + ', the ' +
      this.color + ' ' + this.gender + ' kitten...'
    );

    // save to database here...

    return this;
  }
};



// USE THE THING
///////////////////
// WITHOUT CHAINING

var bob = new Kitten();

bob.setName('Bob');
bob.setColor('black');
bob.setGender('male');

bob.save();

// OUTPUT:
// > saving Bob, the black male kitten...


///////////////////
// WITH CHAINING

var Steve = new Kitten()
  .setName('Steve')
  .setColor('black')
  .setGender('male')
  .save();

// OUTPUT:
// > saving Bob, the black male kitten...
