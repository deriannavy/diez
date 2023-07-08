import BreadthFirstSearchNode from '@/classes/BreadthFirstSearchNode.js';
import p5 from 'p5';

export default class BreadthFirstSearchGraph {
	constructor(p5Instance){

		this.p5 = p5Instance;

		this.graph = {};
	   this.nodes = [];
	   this.start = null;
	   this.end = null;
	   this.springLength = 64;
	   this.hasConnections = false;
		
	}

	setStart(node) { this.start = node; }

	setEnd(node) { this.end = node; }

	addNode(label) {

		var n = new BreadthFirstSearchNode(this.p5, label);
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

		this.nodes[0].pos.set(this.p5.width / 2, this.p5.height / 2);

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
					node1.hasConnections = true;
					node2.hasConnections = true;
				} 

				var separate = 1 / (dist * k);

				force.setMag(spring + separate)
				node1.vel.add(force);
				node1.vel.mult(0.95);
			}
		}
		
		for (var i = 0; i < this.nodes.length; i++) {
			let node = this.nodes[i]

			if ( !node.hasConnections && (node.pos.x + node.width) >= this.p5.width ) { 
				node.pos.sub(node.vel);	
			}
			if( !node.hasConnections && (node.pos.x - node.width) <= 0){ 
				node.pos.sub(node.vel);
			}

			if ( !node.hasConnections && (node.pos.y + node.width) >= this.p5.height ) {
				node.pos.sub(node.vel);	
			}
			if( !node.hasConnections && (node.pos.y - node.width) <= 0 ){ 
				node.pos.sub(node.vel);	
			}

			node.pos.add(node.vel);
			
			
		}

	}
}