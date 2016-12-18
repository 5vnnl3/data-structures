var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (!bucket) {
    bucket = [[k, v]];
  } else if (this.retrieve(k)) {
    var prevValue = this.retrieve(k);
    var oldIndex = bucket.indexOf([k, prevValue]);
    bucket.splice(oldIndex, 1, [k, v]);
  } else {
    bucket.push([k, v]);
  }
  this._storage.set(index, bucket);
  return prevValue ? 'replaced ' + prevValue + ' with ' + v : 'added ' + v;
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (k === bucket[i][0]) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (this.retrieve(k)) {
    for (var i = 0; i < bucket.length; i++) {
      if (k === bucket[i][0]) { 
        bucket.splice(0, 1);
      }
    }
    this._storage.set(index, bucket);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
O(1): HashTable
O(n): Insert, Retrieve, Remove
 */