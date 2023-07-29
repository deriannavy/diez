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

			<h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Maze gen</h1>	
			
			<p class="col col-12">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. as sdd dcdc dcsdcsd sdsdc </p>
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
import MazeGenCell from '@/classes/MazeGenCell.js';
</script>
<script>
export default{
	mounted(){
		this.dtP5Instance = new p5(this.fnCanvasInitializer, this.$refs.canvas);
	},
	data(){
		return {
			dtP5Instance: null,
			dtP5Canvas: null,


			dtMazeCols: null, 
			dtMazeRows: null,
			dtMazeWidth: 10,

			 
			dtMazegrid: [], 
			dtMazecurrent: null,
			dtMazeStack: []
		}
	},
	methods:{
		fnCanvasInitializer(sketch){

			this.dtP5Canvas = sketch;

			sketch.setup = this.fnCanvasSetUp;
			sketch.draw = this.fnCanvasDraw;

			
		},
		fnCanvasSetUp(){
			let containterWidth =  this.$refs.container.clientWidth,
				 computedStyle = getComputedStyle(this.$refs.container);
				 
			let canvasWidth = containterWidth -= parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight),
				canvasHeight = window.innerHeight / 2;

			this.dtP5Canvas.createCanvas( canvasWidth,  canvasHeight);

			this.dtMazeCols = Math.floor(canvasWidth / this.dtMazeWidth);
		   this.dtMazeRows = Math.floor(canvasHeight / this.dtMazeWidth);

			for (let j = 0; j < this.dtMazeRows; j++) {
				for (let i = 0; i < this.dtMazeCols; i++) {
					this.dtMazegrid.push(
						new MazeGenCell(
							this.dtP5Canvas, 
							i, 
							j, 
							this.dtMazeWidth, 
							this.dtMazeCols, 
							this.dtMazeRows
						)
					);
				}
			}

		   this.dtMazecurrent = this.dtMazegrid[0];
		},
		fnCanvasDraw(){

			this.dtP5Instance.background(51);

			for (let i = 0; i < this.dtMazegrid.length; i++) this.dtMazegrid[i].show();

			this.dtMazecurrent.visited = true;
			this.dtMazecurrent.highlight();

			var next = this.dtMazecurrent.checkNeighbors(this.dtMazegrid);
			if(next){
				next.visited = true;

				this.dtMazeStack.push(this.dtMazecurrent);

				this.fnRemoveWalls(this.dtMazecurrent, next);        

				this.dtMazecurrent = next;
			} else if (this.dtMazeStack.length > 0) {
				this.dtMazecurrent = this.dtMazeStack.pop();
			}
		},
		fnRemoveWalls(a, b) {

			var x = a.i - b.i;
			if (x === 1) {
				a.walls[3] = false,
				b.walls[1] = false;
			} else if (x === -1){
				a.walls[1] = false,
				b.walls[3] = false;
			}

			var y = a.j - b.j;
			if (y === 1) {
				a.walls[0] = false,
				b.walls[2] = false;
			} else if (y === -1){
				a.walls[2] = false,
				b.walls[0] = false;
			}
		}
	}
}
</script>

<style type="text/css">

</style>