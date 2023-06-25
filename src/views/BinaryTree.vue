<template>
<main>

	<div class="container col-xxl-10 px-4 py-5">

		<router-link to="/" class="link-secondary mb-2 d-flex flex-row align-items-center">
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left me-2" 
				  viewBox="0 0 16 16">
			  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
			</svg>
			<span>Case studies</span>
		</router-link>

		<h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Binary Tree</h1>
			
	</div>
</main>
</template>

<script>
export default{
	data(){
		return {
			root: null
		}
		
	}
}
// function Three(){
//     this.root = null;
// }


// Three.prototype.traverse = function(){
//     this.root.visit();
// }

// Three.prototype.search = function(val){
//     var found = this.root.search(val);

//     return found;
// }

// Three.prototype.addValue = function(val){
//     var n = new Node(val);

//     if (this.root == null) {
//         this.root = n;
//     } else {
//         this.root.addNode(n);
//     }
// }

// function Node(val) {
//     this.value = val;
//     this.left = null;
//     this.right = null;
// }

// Node.prototype.search = function(val){

//     if (this.value == val) return this

//     else if (val < this.value && this.left != null) return this.left.search(val)

//     else if (val > this.value && this.right != null) return this.right.search(val)

    
//     return null
    
// }


// Node.prototype.visit = function(){

//     if (this.left != null) this.left.visit();
    
//     if (this.right != null) this.right.visit();

//     console.log(this.value);
// }


// Node.prototype.addNode = function(n) {

//     if (n.value < this.value) {

//         if (this.left == null) this.left = n; 
//         else this.left.addNode(n);
        
//     } else  if (n.value > this.value){

//         if (this.right == null) this.right = n; 
//         else this.right.addNode(n);
        
//     }
    
// }


// var three;
// function setup() {
//     three = new Three();
    

//     for (let i = 0; i < 10; i++) {
        
//         var randomNumber = Math.floor(Math.random() * 201);

//         three.addValue(randomNumber);
        
//     }

//     three.traverse();

    
//     return three;
// }





// console.log(setup());
</script>

