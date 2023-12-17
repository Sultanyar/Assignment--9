function countProperties(obj) {
    var count = 0;
    for (var property in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, property)) {
        count++;
      }
    }
    return count;
  };