class Person {
    constructor(name) {
      this._name = name;
    }
  
    get name() {
      return this._name;
    }
  
    set name(newName) {
      this._name = newName;
    }
  }
  
  var myPerson = new Person("John");
  console.log(myPerson.name);
  
  myPerson.name = "Jane";
  console.log(myPerson.name); 