class Person {
  constructor(name) {
    this._name = name;
  }

  sayHi() {
    console.log(`Hi! ${this._name}`);
  }
}

const me = new Person("Lee");
me.sayHi();

console.log(me instanceof Person);

const Foo = class Myclass {};

const foo = new Foo();
console.log("foo", foo);

// const Hoisting = {};
// {
//   console.log(Hoisting);

//   class Hoisting {}
// }

// new Myclass()
