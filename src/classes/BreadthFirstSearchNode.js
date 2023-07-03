
export default class BreadthFirstSearchNode {

	constructor(p5Instance, label){
		
	   this.pos = p5Instance.createVector(
	   	p5Instance.random(p5Instance.width),
	   	p5Instance.random(p5Instance.height)
	   );
	   this.vel = p5Instance.createVector();
	  
	   this.col = p5Instance.color(0);
	   this.label = label;
	   this.edges = [];
	   this.parent = null;
	   this.searched = false;
	}

	connect() {

		for (var i = 0; i < arguments.length; i++) {
			this.edges.push(arguments[i]);
		}
	}

	isConnected(neighbor) {
	   var index = this.edges.indexOf(neighbor);

	   if (index >= 0) {
			return true;
	   } else {
			return false;
		}
	}

	show() {
		textAlign(CENTER);
		var w = textWidth(this.label);
		stroke(255);
		fill(this.col);
		ellipse(this.pos.x, this.pos.y, w * 2, w * 2);
		fill(255);
	   noStroke();
	   text(this.label, this.pos.x, this.pos.y);
	}

	highlight() {
	    this.col = color(0, 150, 0);
	}

	showEdges() {
		noFill();
		stroke(255);
		for (var i = 0; i < this.edges.length; i++) {
			line(this.pos.x, this.pos.y, this.edges[i].pos.x, this.edges[i].pos.y);
		}
	}



}