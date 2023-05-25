// Daniel Shiffman
// Nature of Code: Intelligence and Learning
// https://github.com/shiffman/NOC-S17-2-Intelligence-Learning

// An object for an individual node

function Node(label) {

    // Nodes have physics now!
    this.pos = createVector(random(width),random(height));
    this.vel = createVector();
  
    this.col = color(0);
    this.label = label;
    this.edges = [];
    this.parent = null;
    this.searched = false;
}


Node.prototype.connect = function() {

    for (var i = 0; i < arguments.length; i++) {
        this.edges.push(arguments[i]);
    }
}

Node.prototype.isConnected = function(neighbor) {
    var index = this.edges.indexOf(neighbor);

    if (index >= 0) {
        return true;
    } else {
        return false;
    }
}


Node.prototype.show = function() {
    textAlign(CENTER);
    var w = textWidth(this.label);
    stroke(255);
    fill(this.col);
    ellipse(this.pos.x, this.pos.y, w * 2, w * 2);
    fill(255);
    noStroke();
    text(this.label, this.pos.x, this.pos.y);
}

Node.prototype.highlight = function() {
    this.col = color(0, 150, 0);
}

Node.prototype.showEdges = function() {
    noFill();
    stroke(255);
    for (var i = 0; i < this.edges.length; i++) {
        line(this.pos.x, this.pos.y, this.edges[i].pos.x, this.edges[i].pos.y);
    }
}
