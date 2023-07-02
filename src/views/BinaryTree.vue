<template>
<main class="container col-xxl-10 px-4 py-5">

	<section class="row">

		<router-link to="/" class="link-secondary mb-2 d-flex flex-row align-items-center">
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left me-2" 
				  viewBox="0 0 16 16">
			  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
			</svg>
			<span>Case studies</span>
		</router-link>

		<h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Binary Tree</h1>	
		
		<p class="col col-12 col-md-8 col-lg-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
			
	</section>

	<section class="row">
		<tree-node 
			:node="root"
			@add-item="fnAddNode"
		/>
		<!-- <div
          :class="{bold: isFolder}"
          @click="toggle"
          @dblclick="makeFolder">
          {{ item.name }}
          <span v-if="isFolder">[{{ isOpen ? '-' : '+' }}]</span>
        </div> -->
        <!--<ul v-show="isOpen" v-if="isFolder">
          <tree-item
            class="item"
            v-for="(child, index) in item.children"
            :key="index"
            :item="child"
            @make-folder="$emit('make-folder', $event)"
            @add-item="$emit('add-item', $event)"
          ></tree-item>
          <li class="add" @click="$emit('add-item', item)">+</li>
        </ul> -->
	</section>
</main>
</template>

<script setup>
// Components
import treeNode from '@/components/cases/treeNode.vue';
</script>
<script>
export default{
	components: { treeNode },
	data(){
		return {
			root: {
				name: 'Root',
				children: [
					{ name: "hello" },
          		{ name: "wat" },

				]
			}
		}
	},
	methods:{
		fnAddNode(node){
			node.children.push({name: "new stuff"});
		}
	}
	// makeFolder: function(item) {
   //          Vue.set(item, "children", []);
   //          this.addItem(item);
   //        },
}

</script>

