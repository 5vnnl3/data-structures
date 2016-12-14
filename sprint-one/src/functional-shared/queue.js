var Queue = function() {
  var instance = {};
  var lastKey;
  instance.sizeLength = 0;
  instance.enqueue = queueMethods.enqueue;
  instance.dequeue = queueMethods.dequeue;
  instance.size = queueMethods.size;
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
  var first = this[1];
  lastKey = this.sizeLength;
  for (var i = 1; i < this.sizeLength; i++) {
    this[i] = this[i + 1];
  }
  delete this[lastKey];
  if (lastKey > 0) {
    this.sizeLength --;
  }
  return first;
};


