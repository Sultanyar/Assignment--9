var person1 = { name: "John", age: 30 };
var person2 = { name: "Jane", age: 25 };

function greet(greeting) {
  console.log(greeting + ", " + this.name);
}

greet.call(person1, "Hello World");
greet.apply(person2, ["Hi"]);