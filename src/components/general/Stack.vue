<template>
	<div class="d-flex flex-row align-items-center">
	 
	 <div  v-for="(tech, index) in fnGetStackTech"
	       :style="{
	          'background-image': `url(${tech.image})`,
	          'height': tech.h,
	          'width': tech.w,
	          'background-position': 'center',
	          'background-size': 'contain',
	          'background-repeat': 'no-repeat',
	          'margin-right': '10px'
	       }">

	 </div> 
	</div>
</template>

<script setup>
// Stack image
import jsimage from '@/assets/images/javascript.png';
import vuejsimage from '@/assets/images/vuejs.png';
import pyimage from '@/assets/images/python.png';
import colabimage from '@/assets/images/colab.png';
</script>
<script>



export default{
	props: {
		stack: {
	   	required: true,
	   	type: Array
		}
	},
	data(){
		return {
			technologies: [
            {name: 'vue', image: vuejsimage, w: '30px', h: '30px'},
            {name: 'js', image: jsimage, w: '30px', h: '30px'},
            {name: 'colab', image: colabimage, w: '40px', h: '30px'}, 
            {name: 'python', image: pyimage, w: '30px', h: '30px'}
         ]
		}
	},
	computed:{
		fnGetStackTech(){
			return this.technologies.filter(e => [...this.stack].includes(e.name));

		}
	}
}
</script>

