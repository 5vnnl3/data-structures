var Queue = function() {
  var instance = Object.create(queueMethods);
  var lastKey;
  instance.sizeLength = 0;
  return instance;
};

var queueMethods = {};
queueMethods.size = function() {
  return this.sizeLength;
};
queueMethods.enqueue = function(value) {
  this.sizeLength ++;
  lastKey = this.sizeLength;
  this[lastKey] = value;
};
queueMethods.dequeue = function() {
  lastKey = this.sizeLength;
  var first = this[1];
  for (var i = 1; i < lastKey; i++) {
    this[i] = this[i + 1];
  }
  delete this[lastKey];
  if (lastKey > 0) {
    this.sizeLength--;
  }
  return first;
};
