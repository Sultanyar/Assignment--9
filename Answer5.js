function printObject(obj) {
    for (var property in obj) {
      console.log(property + ": " + obj[property]);
    }
  }
  
  var person = {
    name: "John Doe",
    age: 30,
    address: "123 Main St"
  };
  
  printObject(person);