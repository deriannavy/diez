
export default class BreadthFirstSearchNode {

	constructor(p5Instance, label){
			
		this.p5 = p5Instance;

	   this.pos = p5Instance.createVector(
	   	p5Instance.random(p5Instance.width),
	   	p5Instance.random(p5Instance.height)
	   );

	   this.vel = p5Instance.createVector();
	  	this.width = this.p5.textWidth(label);
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

	disconnect() {

		for (var i = 0; i < arguments.length; i++) {
			console.log(this.edges.map(e => e.label))
			console.log(this.edges.filter(nodeEdge => !nodeEdge.label == arguments[i].label))
			this.edges = this.edges.filter(nodeEdge => nodeEdge.label != arguments[i].label);
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
		this.p5.textAlign(
			this.p5.CENTER
		);

		this.p5.stroke(255);
		this.p5.fill(this.col);
		this.p5.ellipse(this.pos.x, this.pos.y, this.width * 2, this.width * 2);
		this.p5.fill(255);
	   this.p5.noStroke();
	   this.p5.text(this.label, this.pos.x, this.pos.y);
	}

	highlight() {
	    this.col = this.p5.color(0, 150, 0);
	}

	showEdges() {
		this.p5.noFill();
		this.p5.stroke(255);
		for (var i = 0; i < this.edges.length; i++) {
			this.p5.line(
				this.pos.x, 
				this.pos.y, 
				this.edges[i].pos.x, 
				this.edges[i].pos.y
			);
		}
	}



}