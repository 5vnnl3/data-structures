var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  } else if (this.children.length > 0) {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        return true;
      } 
    }
  }
  return false;
};

treeMethods.findParent = function(target) {
  if (this.value === target) {
    return 'no parent exists';
  } else if (this.children.length > 0) {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        var parent = this.children[i].value;
        return parent;
      } 
    }
  }
  return 'no target exists';
};

/*
 * Complexity: What is the time complexity of the above functions?
The tree function is O(1), the addChild function is O(1), and 
the contains function is linear.
 */