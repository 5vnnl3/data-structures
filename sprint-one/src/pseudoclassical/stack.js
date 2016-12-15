var Stack = function() {
  this.sizeLength = 0;
};

Stack.prototype.size = function() {
  return this.sizeLength;
};
Stack.prototype.push = function(value) {
  this.sizeLength++;
  lastKey = this.sizeLength;
  this[lastKey] = value;
};
Stack.prototype.pop = function() {
  lastKey = this.sizeLength;
  last = this[lastKey];
  delete this[lastKey];
  if (lastKey > 0) {
    this.sizeLength--;
  }
  return last;
};