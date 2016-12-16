var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this.contains(item)) {
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) {
  if (this._storage.indexOf(item) > -1) {
    return true;
  } else {
    return false;
  }
};

setPrototype.remove = function(item) {
  if (this.contains(item)) {
    delete this._storage[this._storage.indexOf(item)];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 O(1): set
 O(n): add, contains
 O(n2): remove
 */
