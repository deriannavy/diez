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
			
			<p class="col col-12">Maze generator using the class-based box registration and the p5 library.</p>

		</div>			
	</section>


	<section class="col-12" ref="canvas">
	</section>
</main>	
</template>