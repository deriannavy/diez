<template>
<div>

	<button @click="fnToggleFolder" 
			  @dblclick="fnMakeFolder"
		 	  :class="['btn d-flex flex-row align-items-center', 
		 	  				cpIsFolder ? 'fs-6 fw-bold text-body-emphasis' : 'text-body-text'
		 	   ]">

		<svg xmlns="http://www.w3.org/2000/svg" 
			  width="24" 
			  height="24" 
			  fill="currentColor" 
			  class="bi bi-folder" 
			  viewBox="0 0 16 16"
			  v-if="!dtIsOpen && cpIsFolder">

		  <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z"/>
		</svg>
		<svg xmlns="http://www.w3.org/2000/svg" 
			  width="24" 
			  height="24" 
			  fill="currentColor" 
			  class="bi bi-folder2-open" 
			  viewBox="0 0 16 16"
			  v-else-if="dtIsOpen && cpIsFolder">
		  <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v.64c.57.265.94.876.856 1.546l-.64 5.124A2.5 2.5 0 0 1 12.733 15H3.266a2.5 2.5 0 0 1-2.481-2.19l-.64-5.124A1.5 1.5 0 0 1 1 6.14V3.5zM2 6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5a.5.5 0 0 0-.5.5V6zm-.367 1a.5.5 0 0 0-.496.562l.64 5.124A1.5 1.5 0 0 0 3.266 14h9.468a1.5 1.5 0 0 0 1.489-1.314l.64-5.124A.5.5 0 0 0 14.367 7H1.633z"/>
		</svg>

		<svg xmlns="http://www.w3.org/2000/svg" 
			  width="16" 
			  height="16" 
			  fill="currentColor" 
			  class="bi bi-file-earmark" 
			  viewBox="0 0 16 16"
			  v-else>
		  <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
		</svg>

		<span class="ms-2">
			{{node.name}}
		</span>
		<span class="ms-2 badge rounded-pill text-bg-primary" v-if="node.childrenSize > 0 && !dtIsOpen">
			{{node.childrenSize}}
		</span>
	</button>


	<ul class="" v-if="cpIsFolder && dtIsOpen">
		<li class="list-group-item" v-for="children in node.children">
			<tree-node :node="children"
						  @make-folder="$emit('make-folder', $event)"
						  @add-item="$emit('add-item', $event)"/>
		</li>

		<li class="list-group-item col-3">		
			
			<button class="btn d-flex flex-row align-items-center"
					  @click="dtSetName = true"
					  v-if="!dtSetName">
					  	  
				<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-file-earmark-plus" viewBox="0 0 16 16">
				  <path d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z"/>
				  <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
				</svg>
			</button>

			<div class="input-group input-group-sm mb-3" v-if="dtSetName">

				<input type="text" 
						 class="form-control" 
						 placeholder="Name" 
						 aria-label="Username" 
						 aria-describedby="addon-wrapping" 
						 v-model="dtNodeName"
						 @keyup.enter="fnAddNode(node)">

				<transition name="fade">
					<button class="btn btn-primary d-flex flex-row align-items-center"
						  	  @click="fnAddNode(node)"
						  	  v-if="dtNodeName">
						  	  
						<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-file-earmark-plus" viewBox="0 0 16 16">
						  <path d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z"/>
						  <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
						</svg>
						<span class="badge text-bg-primary">[enter]</span>
					</button>
				</transition>
			</div>
		</li>
	</ul>
</div>
</template>

<script setup>
// Components
import treeNode from '@/components/cases/treeNode.vue';
</script>
<script>
export default{
	props: {
		node: Object
	},
	data() {
   	return {
     		dtIsOpen: true,
     		dtSetName: false,
     		dtNodeName: ''
   	}
	},
	methods:{
		fnToggleFolder(){

			if(this.cpIsFolder){ this.dtIsOpen = !this.dtIsOpen }

		},
		fnMakeFolder(){
			if (!this.cpIsFolder) {
				this.$emit("make-folder", this.node);
				this.dtIsOpen = true;		
			}
		},
		fnAddNode(node){
			this.$emit('add-item', {node, name: this.dtNodeName});
			this.dtSetName = false;
			this.dtNodeName = '';		  	  			
		}
	},
	computed: {
		cpIsFolder() {
			return this.node.children && this.node.children.length;
		}
	}
}
</script>