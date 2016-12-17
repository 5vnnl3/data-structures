var BinarySearchTree = function(value) {
  var bst = Object.create(bstMethods);
  bst.value = value;
  bst.left = null;
  bst.right = null;
  return bst;
};

bstMethods = {};

bstMethods.insert = function(value) {
  if (value < this.value) {
    if (this.left === null) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};

bstMethods.contains = function(value) {  
  if (this.value === value) {
    return true;
  } else if (this.left && value < this.value) {
    return !!this.left.contains(value);
  } else if (this.right && value > this.value) {
    return !!this.right.contains(value);
  }
};

bstMethods.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
};

bstMethods.closest = function(value) {
  // returns the first closest value if there are two nodes that are equal distant
  var closest = 0;
  if (this.contains(value)) {
    closest = value;
  } else {
    this.depthFirstLog(function(node) { 
      if (Math.abs(node - value) < Math.abs(closest - value)) {
        // change < to <= to return last
        closest = node;
      }
    });
  }
  return closest;
};

/*
 * Complexity: What is the time complexity of the above functions?
O(1): BinarySearchTree
O(log n): Contains, Insert
O(n): DepthFirstLog, Closest
 */
