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
    if (this.left.contains(value)) {
      return true;
    } 
  } else if (this.right && value > this.value) {
    if (this.right.contains(value)) {
      return true;
    } 
  }
  return false;
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

/*
 * Complexity: What is the time complexity of the above functions?
O(1): BinarySearchTree, Insert
O(log n): Contains
O(n): DepthFirstLog
 */
