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

				<h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Lexicographic order</h1>	
				
				<p class="col col-12">...</p>

			</div>			
		</section>


		<section class="col-12" ref="canvas"></section>
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
		return {
			dtP5Canvas: null,
			dtVals: [0, 1, 2, 3, 4, 5, 6]
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

		},
		fnCanvasDraw(){

		    var largestI = -1;
		    for (let i = 0; i < this.dtVals.length; i++){
		        
		        if (this.dtVals[i] < this.dtVals[i + 1]) largestI = i;    
		    } 
		    

		    if (largestI == -1) {
		        // noLoop();
		        console.log('finished');
		    }

		    var largestJ = -1;
		    for (let j = 0; j < this.dtVals.length; j++) {
		        
		        if (this.dtVals[largestI] < this.dtVals[j]) largestJ = j;    
		    }


		    this.swap(this.dtVals, largestI, largestJ);



		    let endArray = this.dtVals.splice(largestI + 1);
		    endArray.reverse();
		    this.dtVals = this.dtVals.concat(endArray);

		    // background(0);
		    // textSize(64);
		    // var s = this.dtVals.join('');

		    // fill(255);

		    // text(s, 20, height / 2)
		},
		fnSwap(a, i, j){
		    var temp = a[i];
		    a[i] = a[j],
		    a[j] = temp;
		}
	}

}
</script>