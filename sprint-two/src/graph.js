

// Instantiate a new graph
var Graph = function() { 
  this.nodes = [];
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.nodes.indexOf(node) > -1) {
    return true;
  } else {
    return false;
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this.contains(node)) {
    delete this.nodes[this.nodes.indexOf(node)];
  }
  for (var i = 0; i < this.nodes.length; i++) {
    this.removeEdge(node, this.nodes[i]);
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var result = false;
  _.each(this.edges, function(edge) {
    if (edge[0] === fromNode && edge[1] === toNode) {
      result = true;
    } else if (edge[1] === fromNode && edge[0] === toNode) {
      result = true;
    } 
  });
  return result;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges.push([fromNode, toNode]);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var i;
  if (this.hasEdge(fromNode, toNode)) {
    _.each(this.edges, function(edge, index) {
      if ((edge[0] === fromNode && edge[1] === toNode) || (edge[1] === fromNode && edge[0] === toNode)) {
        i = index;
      }
    });
    delete this.edges[i];
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this.nodes, function(node) {
    cb(node);
  }); 
};

/*
 * Complexity: What is the time complexity of the above functions?
O(1): Graph, addNode, add Edge
O(n): contains, hasEdge, forEachNode
O(n2): removeNode, removeEdge
 */


