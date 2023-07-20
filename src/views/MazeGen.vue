<template>
	
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
			dtP5Instance: null,
			dtP5Canvas: null
		}
	},
	methods:{
		fnCanvasInitializer(sketch){

			this.dtP5Canvas = sketch;

			sketch.setup = this.fnCanvasSetUp;
			sketch.draw = this.fnCanvasDraw;

			
		}
	}
}
</script>

<style type="text/css">

</style>