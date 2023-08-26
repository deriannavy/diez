<template>
	<h1>lexicograpich</h1>
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
			dtP5Canvas,
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
		        noLoop();
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