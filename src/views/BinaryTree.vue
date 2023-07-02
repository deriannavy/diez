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
		this.fnGenerateBinaryTree();
	},
	components: { treeNode },
	data(){
		return {
			dtTreeLeafs: 30,
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
		fnGenerateBinaryTree(){
			const tree = Array.from(
				{length: this.dtTreeLeafs}, 
				(e, i)=>  ({ id: i, name: `Node ${i+1}`, childrenSize: 0 }) 
			);
			
			
			let finalTree = this.fnGenerateBranchTree(tree);
			this.root = { name: 'Root', children: finalTree };

		},
		fnGenerateBranchTree(tree){

			let treeGenerated = null;
			for (var i = 0; i < tree.length; i++) {

				const branch = tree[i];

				treeGenerated = this.fnGenerateAddBranchTree(treeGenerated, branch);
				console.log(treeGenerated)
			}
		},
		fnGenerateAddBranchTree(treeGenerated, branch){
			

			if(treeGenerated == null){
        		treeGenerated = branch;
    		} else {
    			if(treeGenerated.children && treeGenerated.children.length < 2){
    				treeGenerated.children.push(branch);
    			} else {
    				treeGenerated.children = []
    				treeGenerated.children = [this.fnGenerateAddBranchTree(treeGenerated.children[0], branch)]
    			}
        		// if (branch.value < this.value) {
			   //      if (this.left == null) this.left = branch; 
			   //      else this.left.addNode(branch);
			        
			   //  } else  if (branch.value > this.value){

			   //      if (this.right == null) this.right = branch; 
			   //      else this.right.addNode(branch);
			        
			   //  }	
    		}
    		return treeGenerated;

		}
		// fnGenerateBranchTree(branch, batchFinal = []){
		// 	console.log(branch.length)
		// 	if(branch.length == this.dtBranchSize){ return branch }

		// 	let batch = [], branchCount = 0;


		// 	for (var i = branch.length - 1; i >= 0; i--) {
		// 		const b = branch[i];

		// 		branchCount++
		// 		batch.unshift(b);
				
		// 		if(i % this.dtBranchSize == 0){
		// 			batchFinal.push({ children: batch, childrenSize: batch.length });
		// 			batch = [];
		// 		}

		// 		if (batchFinal.length == this.dtBranchSize) {
		// 			break
		// 		}
		// 	}

		// 	branch.splice(branch.length - branchCount, branchCount);
			
		// 	for (var i = 0; i < batchFinal.length; i++) {
		// 		const children = batchFinal[i];

		// 		let branchParentIndex = ((branch.length - i) - 1);
		// 		console.log(branchParentIndex)
		// 		let childrenSize = children.childrenSize + children.children.reduce((acc,e) => e.childrenSize+acc,0);
					 
		// 		branch[branchParentIndex] = { 
		// 			...branch[branchParentIndex], 
		// 			...children,
		// 			childrenSize: childrenSize
		// 		};
				
		// 	}
		// 	console.log(branch)
		// 	console.log(batchFinal)
		// 	// return this.fnGenerateBranchTree(branch);
		// 	return []
		// }
	}
}

</script>

