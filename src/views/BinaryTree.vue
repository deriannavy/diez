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
		

		// for (var i = tree.length - 1; i >= 0; i--) {

			// const node = tree[i];

			// branch.push({ name: node });

			// if (branch.length == ) {}
			// if (node % branchSize == 0) {
			// 	levelBranch.push();
			// }

			// if (levelBranch.length == branchSize) {
			// 	treeArtificial.push({
			// 		name: node,
			// 		children: levelBranch
			// 	});
			// 	levelBranch = [];
			// }




		// }


		// this.root = { name: 'Root', children: treeArtificial };
		// r:{
		// 	0:{
		// 		3:{}
		// 		4:{}
		// 		5:{}
		// 	}
		// 	1:{
		// 		6:{}
		// 		7:{}
		// 		8:{}	
		// 	}
		// 	2:{
		// 		9:{}
		// 	}
		// }
		this.fnGenerateBinaryTree();
	},
	components: { treeNode },
	data(){
		return {
			dtTreeLeafs: 20,
			dtBranchSize: 3,
			root: {
				name: 'Root',
				children: [
					{ name: "Node 1" },
          		{ name: "Node 2" },
          		{ 
          			name: "Node 3",
          			children: [
          				{ name: "Node 1" },
          				{ name: "Node 2" }
          			]
          		},
          		{ name: "Node 4" },
          		{ 
          			name: "Node 5",
          			children: [
          				{ name: "Node 1" },
          				{ name: "Node 2" }
          			]
          		}
				]
			}
		}
	},
	methods:{
		fnAddNode({node, name}){
			const nodeLength = node.children.length + 1;
			node.children.push({name: name ? name : `Node ${nodeLength}`});
		},
		fnMakeFolder(node){
			node.children = []
			this.fnAddNode({node});
		},
		fnGenerateBinaryTree(){
			const tree = Array.from({length: this.dtTreeLeafs}, (e, i)=>  ({ name:i }) );
			
			
			let finalTree = this.fnGenerateBranchTree(tree);
			console.log(finalTree)

		},
		fnGenerateBranchTree(branch){
			if(branch.length == this.dtBranchSize){ return branch }

			let batchFinal = [], batch = [];

			for (let b of branch) {

				if (batch.length < this.dtBranchSize) {
					batch.push(b);
				}
				else {
					batchFinal.push({ ...b, children: batch });
					batch = [];
				}	
			}

			console.log(batchFinal.length, this.dtBranchSize)
			if (batchFinal.length != this.dtBranchSize) { 
				// return this.fnGenerateBranchTree(batchFinal);
			}

			return batchFinal;
		}
	}
}

</script>

