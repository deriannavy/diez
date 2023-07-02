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
			:node="dtTreeRoot"
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
			dtTreeLeafs: 20,
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
				id: randomNumer, name: `Node ${index+1} - Val ${randomNumer}`, childrenSize: 0 
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

