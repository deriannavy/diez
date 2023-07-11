<template>
<main ref="container" class="container col-xxl-10 px-4 py-5">

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
			
			<p class="col col-12">An example of graph search algorithm here you can add nodes, and connections, at first instance you can see the example nodes with names, and a search from you to Thom using bfs.</p>		
		</div>

		<div class="col-12 col-md-6 d-flex flex-column align-items-center">
			<div class="col col-12 col-md-10 col-lg-8 mb-2">

				<div class="input-group input-group-sm">
						<div class="form-floating">
						  <input type="text" 
						  id="new-node-name"
								 class="form-control" 
								 placeholder="Add node" 
								 aria-label="Add node" 
								 aria-describedby="add-node" 
								 maxlength="6" 
								 v-model="dtNewNodeName">
						  <label for="new-node-name">New node</label>
						</div>
					

					<transition name="fade">
					 	<button class="btn btn-primary btn-sm" 
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
				<small class="text-warning">6 letters max and 15 nodes max </small>
			</div>
			<div class="col col-12 col-md-10 col-lg-8">
				<button class="btn btn-secondary btn-sm d-flex flex-row justify-content-center" 
						  type="button" 
						  data-bs-toggle="collapse" 
						  data-bs-target="#collapseConfig" 
						  aria-expanded="false" 
						  aria-controls="collapseConfig">

			    	<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
					  <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
					  <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
					</svg>
					<span class="ms-2">Configuration</span>
			  	</button>
			</div>
		</div>
			
	</section>

	

	<section class="row d-flex justify-content-center mb-3">

	  	<div class="collapse col-12" id="collapseConfig">
		  <div class="card card-body col-12">
				<div class="col col-12 btn-group mb-2">

					<div class="btn-group input-group-sm">
						<span class="input-group-text" style="border-radius: var(--bs-border-radius) 0 0 var(--bs-border-radius);">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-diagram-2 me-1" viewBox="0 0 16 16">
							  <path fill-rule="evenodd" d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H11a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 5 7h2.5V6A1.5 1.5 0 0 1 6 4.5v-1zM8.5 5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1zM3 11.5A1.5 1.5 0 0 1 4.5 10h1A1.5 1.5 0 0 1 7 11.5v1A1.5 1.5 0 0 1 5.5 14h-1A1.5 1.5 0 0 1 3 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 9 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"/>
							</svg>
							<span class="me-1">Nodes: </span>
							<span class="badge rounded-pill text-bg-secondary">{{cpGraphNodeNames.length}}</span>
						</span>
					</div>
					

					<div v-for="nodeName in cpGraphNodeNames" class="btn-group">

						<input type="radio" 
								 class="btn-check" 
								 name="btnradio" 
								 :id="`identifier_${nodeName}`" 
								 autocomplete="off"
								 v-model="dtNodeSelected"
								 :value="nodeName">
				  		<label class="btn btn-outline-secondary btn-sm" :for="`identifier_${nodeName}`">
				  			{{nodeName}}
				  		</label>
					</div>

				</div>

				
				<div class="col btn-group">

					<div class="btn-group input-group-sm">
						<span class="input-group-text" style="border-radius: var(--bs-border-radius) 0 0 var(--bs-border-radius);">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-node-plus me-2" viewBox="0 0 16 16">
							  <path fill-rule="evenodd" d="M11 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM6.025 7.5a5 5 0 1 1 0 1H4A1.5 1.5 0 0 1 2.5 10h-1A1.5 1.5 0 0 1 0 8.5v-1A1.5 1.5 0 0 1 1.5 6h1A1.5 1.5 0 0 1 4 7.5h2.025zM11 5a.5.5 0 0 1 .5.5v2h2a.5.5 0 0 1 0 1h-2v2a.5.5 0 0 1-1 0v-2h-2a.5.5 0 0 1 0-1h2v-2A.5.5 0 0 1 11 5zM1.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"/>
							</svg>
							<span class="me-1">Connections: </span>
							<span class="badge rounded-pill text-bg-secondary">{{cpActualNodeEdges.length}}</span>
						</span>
					</div>

					<div v-for="nodeName in cpGraphNodeNames" class="btn-group">

					  <input type="checkbox" 
					  			class="btn-check disabled" 
					  			:id="`connection_${nodeName}`" 
					  			autocomplete="off" 
					  			:checked="cpActualNodeEdges.includes(nodeName)"
					  			:disabled="nodeName == dtNodeSelected"
					  			@change="fnChangeActualConnection(nodeName, !cpActualNodeEdges.includes(nodeName))">

					  <label class="btn btn-outline-secondary btn-sm" :for="`connection_${nodeName}`">{{nodeName}}</label>
					</div>
				</div>    
		  </div>
		</div>			

		

	</section>

	<section class="col-12" ref="canvas">
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
				'Sam': null,
				'Peggy': null,
				'Thom': null,
				'Jonny': null 
			},
			dtNewNodeName: '',
			dtNodeSelected: 'You',
			
		}
	},
	methods:{
		fnCanvasInitializer(sketch){

			this.dtP5Canvas = sketch;

			sketch.setup = this.fnCanvasSetUp;
			sketch.draw = this.fnCanvasDraw;

			
		},
		fnCanvasSetUp(){

			let width =  this.$refs.container.clientWidth

			this.dtP5Canvas.createCanvas( width, window.innerHeight / 2 );

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
				this.dtGraphPeople['Sam'], 
				this.dtGraphPeople['Peggy']
			);

			this.dtGraphPeople['Alice'].connect( this.dtGraphPeople['Peggy'] );

			this.dtGraphPeople['Claire'].connect(
				this.dtGraphPeople['Thom'], 
				this.dtGraphPeople['Jonny']
			);

			this.dtGraph.setStart( this.dtGraphPeople['You'] );
			this.dtGraph.setEnd( this.dtGraphPeople['Thom'] );


			let queue = [], path = [];
			queue.push(this.dtGraph.start);
			  
			while (queue.length > 0) {
				let person = queue.shift();
				if (!person.searched) {
					if (person == this.dtGraph.end) {
						path.push(person);

						let next = person.parent;
						while (next) {
							path.push(next);
							next = next.parent;
						}
						
						break;

					} else {

						let next = person.edges;
						for (let i = 0; i < next.length; i++) {
							let neighbor = next[i];
							queue.push(neighbor);
							neighbor.parent = person;
						}
						person.searched = true;

					}
				}
			}
			  
			for (let i = 0; i < path.length; i++) { path[i].highlight(); }
		},
		fnCanvasDraw(){
			this.dtP5Instance.background(0);
    		this.dtGraph.simulate();
    		this.dtGraph.show();
		},
		fnAddNewNode(){
			let nodeNames = Object.keys(this.dtGraphPeople),
				 newNodeName = this.dtNewNodeName;

			if(nodeNames.length >= 15){ return }
			else if(newNodeName.length > 6 || nodeNames.includes(newNodeName)){ return }

			this.dtGraphPeople[newNodeName] = this.dtGraph.addNode(newNodeName);
			this.dtNewNodeName = '';
		},
		fnChangeActualConnection(nodeName, nodeState){

			if (nodeState) {
				this.dtGraphPeople[this.dtNodeSelected].connect(
					this.dtGraphPeople[nodeName]
				);
			} else {
				this.dtGraphPeople[this.dtNodeSelected].disconnect(
					this.dtGraphPeople[nodeName]
				);
			}

		}
	},
	computed: {
		cpActualNodeEdges(){
			let actualNode = this.dtGraphPeople[ this.dtNodeSelected ],
				 nodeEdges = actualNode ? actualNode.edges : [];

			return nodeEdges.map(nodeConnected => nodeConnected.label);
		},
		cpGraphNodeNames(){
			return Object.keys(this.dtGraphPeople);
		}
	}
}
</script>