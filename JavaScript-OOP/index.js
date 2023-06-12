// ! Theoretical Questions

// 1) Explain in your own words how you understand prototypical inheritance works in JavaScript.

// ? 1)In JavaScript, prototypical inheritance is a way for objects to inherit properties and methods from other objects. Each object has a hidden link to another object called its prototype. When you access a property or method on an object, JavaScript checks if the object itself has that property or method. If not, it looks up the prototype chain to find it. Imagine you have an object called car with properties like color, brand, and model. When you access car.color, JavaScript first checks if the car object has a color property. If it does, it uses that value. However, if the car object doesn't have a color property, JavaScript looks up the prototype chain to find it. The prototype of the car object might be an object called vehicle, which has a color property. JavaScript then uses the value of color from the vehicle object. Prototypical inheritance allows objects to inherit properties and methods from their prototypes, which promotes code reuse and makes it easier to create and work with related objects.

// 2) Why is it necessary to call super() in the constructor of a child class?

// ? 2) Calling super() in the constructor of a child class is necessary because it allows the child class to inherit and initialize the properties and behavior from the parent class. It ensures that the parent class's constructor is executed before the child class's constructor. This way, the child class can utilize the functionality of the parent class and add its own specific features.In simpler terms, super() is like a signal to the parent class saying, "Hey, please do your initialization before I do mine." By calling super(), you ensure that the parent class is properly set up, and the child class can build upon that foundation. It helps maintain the inheritance relationship and allows for the correct initialization of the inherited properties and methods.

// ! Tasks

// 1) Create a class called Employee with the following properties: (name), (age), (salary). Ensure that these properties are initialized when an object is created.

// 2) Create getters and setters for these properties.

// 3) Create a class called Programmer that inherits from the Employee class and has an additional property called lang (list of programming languages).

// 4) Override the getter for the salary property in the Programmer class. Let it return the salary property multiplied by 3.

// 5) Create multiple instances of the Programmer class and display them in the console.

class Employee {
  constructor(name, age, salary) {
    this._name = name;
    this._age = age;
    this._salary = salary;
  }

  // Getters and setters
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    this._age = value;
  }

  get salary() {
    return this._salary;
  }

  set salary(value) {
    this._salary = value;
  }
}

class Programmer extends Employee {
  constructor(name, age, salary, lang) {
    super(name, age, salary);
    this._lang = lang;
  }

  // Override getter for salary
  get salary() {
    return this._salary * 3;
  }

  // Getters and setters for lang
  get lang() {
    return this._lang;
  }

  set lang(value) {
    this._lang = value;
  }
}

// Create instances of Programmer class
const programmer1 = new Programmer("Jeyhun Abilov", 21, 5000, [
  "JavaScript",
  "C#",
]);
const programmer2 = new Programmer("Shamil Abilov", 18, 6000, ["Java", "C"]);

console.log(programmer1);
console.log(programmer2);
