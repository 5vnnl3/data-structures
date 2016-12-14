var Stack = function() {
  var instance = Object.create(stackMethods);
  instance.sizeLength = 0;
  var lastKey;
  return instance;
};

var stackMethods = {};
stackMethods.size = function() {
  return this.sizeLength;
};
stackMethods.push = function(value) {
  this.sizeLength++;
  lastKey = this.sizeLength;
  this[lastKey] = value;
};
stackMethods.pop = function() {
  lastKey = this.sizeLength;
  var last = this[lastKey];
  delete this[lastKey];
  if (lastKey > 0) {
    this.sizeLength--;
  }
  return last;
};


