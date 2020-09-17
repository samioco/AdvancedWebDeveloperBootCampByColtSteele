// ES5 Inheritance
function Person(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
}
Person.prototype.sayHello(){
  return "Hello " + this.firstName + " " + this.lastName;
}

function Student(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
// Set the prototype property of a constructor to be an object created from another prototype property
// Reset the constructor property on a constructor function


// ES2015 Inheritance
// use the 'extends' keyword
class Person{
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }
  sayHello(){
    return `Hello ${this.firstName} ${this.lastName}`;
  }
}
class Student extends Person{
}


// ES5
// 'super' keyword
function Student(){
  Person.apply(this, arguments);
}
// use call/apply in constructor function (apply to spread out array into many arguments for function params)

// ES2015
// if method of same name is implemented in parent class, use 'super' to inherit
class Student extends Person{
  constructor(firstName, lastName){
    super(firstName, lastName);
  }
}
