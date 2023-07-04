<template>
<main class="container col-xxl-10 px-4 py-5">

	<section class="row d-flex align-items-center">
		<div class="col col-12 col-md-6">
			<router-link to="/" class="link-secondary mb-2 d-flex flex-row align-items-center">
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left me-2" 
					  viewBox="0 0 16 16">
				  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
				</svg>
				<span>Case studies</span>
			</router-link>

			<h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Breadth first search</h1>	
			
			<p class="col col-12">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua.</p>		
		</div>

		<div class="col-12 col-md-6 d-flex flex-column align-items-center">
			<div class="col col-12 col-md-10 col-lg-8">
				<div class="input-group mb-3">
					<input type="text" 
							 class="form-control" 
							 placeholder="Add node" 
							 aria-label="Add node" 
							 aria-describedby="add-node" 
							 v-model="dtNewNodeName">

					<transition name="fade">
					 	<button class="btn btn-primary" 
					 			  type="button" 
					 			  id="add-node" 
					 			  v-if="dtNewNodeName"
					 			  @click="fnAddNewNode">

					  		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
							  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
							  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
							</svg>
						</button>
					</transition>
				</div>	
			</div>
		</div>
			
	</section>

	<section class="d-flex justify-content-center text-center" ref="canvas">
	</section>
</main>
</template>
<script setup>
// Libs
import p5 from 'p5';
// Classes
import BreadthFirstSearchGraph from '@/classes/BreadthFirstSearchGraph.js';
</script>
<script>

export default{
	mounted(){
		this.dtP5Instance = new p5(this.fnCanvasInitializer, this.$refs.canvas);
	},
	data(){
		return{
			dtP5Instance: null,
			dtP5Canvas: null,

			dtGraph: null,
			dtGraphData: null,
			dtGraphPeople: {
				'You': null,
				'Bob': null,
				'Alice': null,
				'Claire': null,
				'Anuj': null,
				'Peggy': null,
				'Thom': null,
				'Jonny': null 
			},
			dtNewNodeName: ''
			
		}
	},
	methods:{
		fnCanvasInitializer(sketch){

			this.dtP5Canvas = sketch;

			sketch.setup = this.fnCanvasSetUp;
			sketch.draw = this.fnCanvasDraw;

			
		},
		fnCanvasSetUp(){
			this.dtP5Canvas.createCanvas( window.innerWidth / 2, window.innerHeight / 2 );

			this.dtGraph = new BreadthFirstSearchGraph(this.dtP5Canvas);
			
			for(let person in this.dtGraphPeople){
				this.dtGraphPeople[person] = this.dtGraph.addNode(person);
			}


			this.dtGraphPeople['You'].connect(
				this.dtGraphPeople['Alice'], 
				this.dtGraphPeople['Bob'],
				this.dtGraphPeople['Claire']
			);


			this.dtGraphPeople['Bob'].connect(
				this.dtGraphPeople['Anuj'], 
				this.dtGraphPeople['Peggy']
			);

			this.dtGraphPeople['Alice'].connect( this.dtGraphPeople['Peggy'] );

			this.dtGraphPeople['Claire'].connect(
				this.dtGraphPeople['Thom'], 
				this.dtGraphPeople['Jonny']
			);

			this.dtGraph.setStart( this.dtGraphPeople['You'] );
			this.dtGraph.setEnd( this.dtGraphPeople['Thom'] );


			// let queue = [], path = [];
			// queue.push(this.dtGraph.start);
			  
			// while (queue.length > 0) {
			// 	let person = queue.shift();
			// 	if (!person.searched) {
			// 		if (person == this.dtGraph.end) {
			// 			path.push(person);

			// 			let next = person.parent;
			// 			while (next) {
			// 				path.push(next);
			// 				next = next.parent;
			// 			}
						
			// 			break;

			// 		} else {

			// 			let next = person.edges;
			// 			for (let i = 0; i < next.length; i++) {
			// 				let neighbor = next[i];
			// 				queue.push(neighbor);
			// 				neighbor.parent = person;
			// 			}
			// 			person.searched = true;

			// 		}
			// 	}
			// }
			  
			// for (let i = 0; i < path.length; i++) { path[i].highlight(); }
		},
		fnCanvasDraw(){
			this.dtP5Instance.background(0);
    		this.dtGraph.simulate();
    		this.dtGraph.show();
		},
		fnAddNewNode(){
			let nodeNames = Object.keys(this.dtGraphPeople),
				 newNodeName = this.dtNewNodeName;

			if(nodeNames.includes()){ return }

			this.dtGraphPeople[newNodeName] = this.dtGraph.addNode(newNodeName);
			
			this.dtNewNodeName = '';




		}
	}
}
</script>