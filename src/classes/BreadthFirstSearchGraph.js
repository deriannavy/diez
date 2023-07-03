import BreadthFirstSearchNode from '@/classes/BreadthFirstSearchNode.js';


export default class BreadthFirstSearchGraph {
	constructor(){

		this.graph = {};
	   this.nodes = [];
	   this.start = null;
	   this.end = null;
	   this.springLength = 64;
		
	}

	setStart(node) { this.start = node; }

	setEnd(node) { this.end = node; }

	addNode(label) {

		var n = new BreadthFirstSearchNode(label);
		this.graph[label] = n;
		this.nodes.push(n);

		return n;
	}

	show() {
		for (var i = 0; i < this.nodes.length; i++) {
			this.nodes[i].showEdges();
		}
		for (var i = 0; i < this.nodes.length; i++) {
			this.nodes[i].show();
		}
	}

	simulate() {

		this.nodes[0].pos.set(width / 2, height / 2);

		for (var i = 1; i < this.nodes.length; i++) {
			var node1 = this.nodes[i];
			for (var j = 0; j < this.nodes.length; j++) {
				if (i == j) continue;
				var node2 = this.nodes[j];
				var force = p5.Vector.sub(node1.pos, node2.pos);
				var dist = force.mag();

				var spring = 0;
				var k = 0.06;

				if (node1.isConnected(node2) || node2.isConnected(node1)) {
					spring = k * (this.springLength - dist);
				}

				var separate = 1 / (dist * k);

				force.setMag(spring + separate)
				node1.vel.add(force);
				node1.vel.mult(0.95);
			}
		}

		for (var i = 0; i < this.nodes.length; i++) {
			var node = this.nodes[i];
			node.pos.add(node.vel);
		}

	}
}