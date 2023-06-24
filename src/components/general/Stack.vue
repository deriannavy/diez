<template>
	<div class="d-flex flex-row align-items-center">
	 
	 <div  v-for="tech in fnGetStackTech"
	       :style="{
	          'background-image': `url(${tech.image})`,
	          'height': tech.height,
	          'width': tech.width,
	          'background-position': 'center',
	          'background-size': 'contain',
	          'background-repeat': 'no-repeat',
	          'margin-right': '10px'
	       }">

	 </div> 
	</div>
</template>

<script>



export default{
	props: {
		stack: {
	   	required: true,
	   	type: Array
		},
		technologies: {
			required: true,
			type: Array
		}
	},
	computed:{
		fnGetStackTech(){

			const techs = [...this.technologies];

			return techs.filter(e => [...this.stack].includes(e.id));

		}
	}
}
</script>

