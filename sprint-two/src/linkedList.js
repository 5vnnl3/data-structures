var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    list.tail = new Node(value);
    if (list.head === null) {
      list.head = list.tail;
    } 
  };

  list.removeHead = function() {
    var head = list.head;
    list.head = list.tail;
    return head.value;
  };

  list.contains = function(target) {
    
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
