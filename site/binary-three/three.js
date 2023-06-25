function Three(){
    this.root = null;
}


Three.prototype.traverse = function(){
    this.root.visit();
}

Three.prototype.search = function(val){
    var found = this.root.search(val);

    return found;
}

Three.prototype.addValue = function(val){
    var n = new Node(val);

    if (this.root == null) {
        this.root = n;
    } else {
        this.root.addNode(n);
    }
}

