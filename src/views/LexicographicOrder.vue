<template>
	<h1>lexicograpich</h1>
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
		// this.$refs.canvas
		this.dtP5Instance = new p5(this.fnCanvasInitializer, this.$refs.canvas);
	},
}
</script>