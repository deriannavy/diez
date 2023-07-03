<template>
<main class="container col-xxl-10 px-4 py-5">

	<section class="row d-flex align-items-center">
		<div class="col">
			<router-link to="/" class="link-secondary mb-2 d-flex flex-row align-items-center">
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left me-2" 
					  viewBox="0 0 16 16">
				  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
				</svg>
				<span>Case studies</span>
			</router-link>

			<h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Breadth first search</h1>	
			
			<p class="col col-12 col-md-6 col-lg-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua.</p>		
		</div>
			
	</section>

	<section class="d-flex justify-content-center text-center" ref="canvas">
	</section>
</main>
</template>
<script setup>
// Libs
import p5 from 'p5';
</script>
<script>

export default{
	mounted(){

		this.dtP5Instance = new p5(this.fnCanvasInitializer, this.$refs.canvas);
	},
	data(){
		return{
			dtP5Instance: null,
			dtP5Canvas: null
		}
	},
	methods:{
		fnCanvasInitializer(sketch){

			this.dtP5Canvas = sketch;

			sketch.setup = this.fnCanvasSetUp;
			sketch.draw = this.fnCanvasDraw;
			
		},
		fnCanvasSetUp(){
			this.dtP5Canvas.createCanvas(
				window.innerWidth / 2, 
				window.innerHeight / 2
			);
		},
		fnCanvasDraw(){
			this.dtP5Canvas.background(0);
			this.dtP5Canvas.fill(255);
			this.dtP5Canvas.rect(100,100,50,50);
			
		}
	}
}
</script>