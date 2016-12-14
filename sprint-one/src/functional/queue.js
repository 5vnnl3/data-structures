var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    size ++;
    storage[size] = value;
  };

  someInstance.dequeue = function() {
    var first = storage[1];
    for (var i = 1; i < size + 1; i++) {
      storage[i] = storage[i + 1];
    }
    delete storage[size];
    if (size > 0) {
      size --;
    }
    return first;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
