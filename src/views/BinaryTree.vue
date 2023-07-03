<template>
<main class="container col-xxl-10 px-4 py-5">

	<section class="row d-flex align-items-center">

		<div class="col col-12 col-md-6">
			<router-link to="/" class="link-secondary mb-2 d-flex flex-row align-items-center">
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left me-2" 
					  viewBox="0 0 16 16">
				  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
				</svg>
				<span>Case studies</span>
			</router-link>

			<h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Binary Tree</h1>	
			
			<p class="col col-12 col-md-12 col-lg-12">A binary tree generator, using random values for nodes, and the total node input, creating folder to contain child nodes recursively.</p>	
		</div>

		<div class="col-12 col-md-6 d-flex flex-column align-items-center">
			<div class="col col-12 col-md-10 col-lg-8">
				<div class="input-group mb-3 ">
				  	<span class="input-group-text" id="tree-node">
					  	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-diagram-2" viewBox="0 0 16 16">
						  <path fill-rule="evenodd" d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H11a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 5 7h2.5V6A1.5 1.5 0 0 1 6 4.5v-1zM8.5 5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1zM3 11.5A1.5 1.5 0 0 1 4.5 10h1A1.5 1.5 0 0 1 7 11.5v1A1.5 1.5 0 0 1 5.5 14h-1A1.5 1.5 0 0 1 3 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 9 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"/>
						</svg>
				  	</span>

				  	<input type="number" 
				  			 class="form-control" 
				  			 placeholder="Node number" 
				  			 aria-label="Node number" 
				  			 aria-describedby="tree-node"
				  			 v-model="dtTreeLeafs">

				  	<button class="btn btn-primary" type="button" @click="fnGenerateBinaryTree">
				  		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
						  <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
						  <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
						</svg>
				  	</button>

					<input type="checkbox" class="btn-check" id="btn-see-values" v-model="dtSeeValue" autocomplete="off"/>
					<label class="btn btn-outline-primary" for="btn-see-values">See values</label>

				</div>
			</div>	
		</div>

	</section>

	<section class="row">

		<tree-node 
			:node="dtTreeRoot"
			:prSeeValue="dtSeeValue"
			@make-folder="fnMakeFolder"
			@add-item="fnAddNode"
		/>

	</section>

</main>
</template>

<script setup>
// Components
import treeNode from '@/components/cases/treeNode.vue';
</script>
<script>
export default{
	mounted(){
		this.fnGenerateBinaryTree();
	},
	components: { treeNode },
	data(){
		return {
			dtTreeLeafs: 15,
			dtSeeValue: false,
			dtTreeRoot: {}
		}
	},
	methods:{
		fnAddNode({node, name}){
			const nodeLength = node.children.length + 1;
			node.children.push({
				name: name ? name : `Node ${nodeLength}`,
				childrenSize: 0
			});
			node.childrenSize = node.children.length
		},
		fnMakeFolder(node){
			node.children = []
			this.fnAddNode({node});
		},
		fnGenerateNode(node, index){
			let randomNumer = Math.floor(Math.random() * 1000);
			return { 
				id: randomNumer, name: `Node ${index+1}`, value: randomNumer, childrenSize: 0 
			}
		},
		fnGenerateBinaryTree(){
			const tree = Array.from({length: this.dtTreeLeafs}, this.fnGenerateNode);
			
			let finalTree = this.fnGenerateBranchTree(tree);
			
			this.dtTreeRoot = { name: 'Root', children: [finalTree] };

		},
		fnGenerateBranchTree(tree){

			let treeGenerated = null;
			for (var i = 0; i < tree.length; i++) {

				const branch = tree[i];

				treeGenerated = this.fnGenerateAddBranchTree(treeGenerated, branch);
				
			}
			return treeGenerated;
			
		},
		fnGenerateAddBranchTree(treeGenerated, branch){
			

			if(treeGenerated == null){
        		treeGenerated = branch;
    		} else {
    			if(treeGenerated.children && treeGenerated.children.length >= 2){

    				if(treeGenerated.children[0].id > branch.id){
    					treeGenerated.children[0] = this.fnGenerateAddBranchTree(treeGenerated.children[0], branch)
    				} else if(treeGenerated.children[1].id < branch.id) {
    					treeGenerated.children[1] = this.fnGenerateAddBranchTree(treeGenerated.children[1], branch)
    				} else {
    					treeGenerated.children.push(branch);
    					treeGenerated.childrenSize = treeGenerated.children.length;
    				}
    			}
    			else if(treeGenerated.children){
    				treeGenerated.children.push(branch);
    				treeGenerated.childrenSize = treeGenerated.children.length;
    			} else {
    				treeGenerated.childrenSize = 1;
    				treeGenerated.children = [branch]
    			}	
    		}
    		return treeGenerated;

		}
	}
}

</script>

