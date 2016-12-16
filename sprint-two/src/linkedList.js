var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.tail === null) {
      list.tail = new Node(value);
      list.head = list.tail;
    } else {
      list.tail.next = new Node(value);
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function() {
    var head = list.head;
    list.head = list.head.next;
    return head.value; 
  };

  list.contains = function(target) {
    var json = JSON.stringify(list);
    if (json.indexOf('"value":' + target + ',') > -1) {
      return true;
    } else {
      return false;
    }
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
 -> Node, add to tail and remove head should be O(1) while contains is a find 
 operation with O(n). Together, LinkedList as a whole is O(n)
*/