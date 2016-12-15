var Queue = function() {
  this.sizeLength = 0;
};

Queue.prototype.size = function() {
  return this.sizeLength;
};
Queue.prototype.enqueue = function(value) {
  this.sizeLength++;
  lastKey = this.sizeLength;
  this[lastKey] = value;
};
Queue.prototype.dequeue = function() {
  first = this[1];
  lastKey = this.sizeLength;
  for (var i = 1; i < this.sizeLength; i++) {
    this[i] = this[i + 1];
  }
  if (lastKey > 0) {
    this.sizeLength--;
  }
  delete this[lastKey];
  return first;
};
