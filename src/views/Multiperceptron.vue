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

			<h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Multiperceptron</h1>	
			
			<p class="col col-12">...</p>

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
import MultiperceptronNeuralNetwork from '@/classes/MultiperceptronNeuralNetwork.js';
</script>
<script>
export default{
	mounted(){

		this.dtP5Instance = new p5(this.fnCanvasInitializer, this.$refs.canvas);
	},
	data(){
		return{
			dtRed: null,
			dtGreen: null,
			dtBlue: null,

			dtCanvasWidth: null,
			dtCanvasHeight: null
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
				 
			this.dtCanvasWidth = containterWidth -= parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight);
			this.dtCanvasHeight = window.innerHeight / 2;

			this.dtP5Canvas.createCanvas( this.dtCanvasWidth,  this.dtCanvasHeight );
			this.dtP5Canvas.noLoop();
		  
			let brain = new MultiperceptronNeuralNetwork(3, 3, 2);

			for (let i = 0; i < 10000; i++) {

				let this.dtRed = this.p5Instance.random(255), 
					 this.dtGreen = this.p5Instance.random(255), 
					 this.dtBlue = this.p5Instance.random(255),
					 targets = trainColor(this.dtRed, this.dtGreen, this.dtBlue),
					 inputs = [this.dtRed / 255, this.dtBlue / 255, this.dtGreen / 255];

				brain.train(inputs, targets);

			}
		  
		 	this.fnPickColor();
		},
		fnCanvasDraw(){

			this.dtP5Instance.background(this.dtRed,this.dtGreen,this.dtBlue);
			this.dtP5Instance.strokeWeight(2);
			this.dtP5Instance.stroke(255);
			// this.dtP5Instance.line(
			// 	width / 2, 
			// 	0, 
			// 	width / 2, 
			// 	height 
			// );

			//  textSize(50);
			//  noStroke();
			//  fill(0);
			//  textAlign(CENTER, CENTER);
			//  textFont('bold');
			//  text('Back', 150, 150);
			//  fill(255);
			//  textFont('bold');
			//  text('White', 450, 150);

			//  let which = colorPredictor(r,g,b);
			//  console.log(trainColor(r, g, b));

			//  if (which == 'Dark'){
			//    fill(0);
			//    ellipse(150, 200, 20, 20);
			//  } else {
			//    fill(255);
			//    ellipse(450, 200, 20, 20);
			//  }
		},
		fnPickColor(){

		}
	}
}
</script>