var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = true;
};

setPrototype.contains = function(item) {
  return !!this._storage[item];
};

setPrototype.remove = function(item) {
  if (this.contains(item)) {
    var removed = item;
  }
  delete this._storage[item];
  return removed || item + ' is not in the set';
};

/*
 * Complexity: What is the time complexity of the above functions?
 O(1): set, add, contains, remove
 */
