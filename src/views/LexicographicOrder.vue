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
			dtP5Canvas
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
			console.log(vals);

    var largestI = -1;
    for (let i = 0; i < vals.length; i++){
        
        if (vals[i] < vals[i + 1]) largestI = i;    
    } 
    

    if (largestI == -1) {
        noLoop();
        console.log('finished');
    }

    var largestJ = -1;
    for (let j = 0; j < vals.length; j++) {
        
        if (vals[largestI] < vals[j]) largestJ = j;    
    }


    swap(vals, largestI, largestJ);



    let endArray = vals.splice(largestI + 1);
    endArray.reverse();
    vals = vals.concat(endArray);

    background(0);
    textSize(64);
    var s = vals.join('');

    fill(255);

    text(s, 20, height / 2)
		}
	}
}
</script>