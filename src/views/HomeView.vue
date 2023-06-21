<template>
<main>
   <div class="container col-xxl-10 px-4 py-5">
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
         <div class="col-10 col-sm-8 col-lg-6 text-center">
            <img :src="binaryTree" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="400" height="auto" loading="lazy">
            <a href="#" class="btn btn-sm btn-outline-secondary">Binary tree</a>
         </div>
         <div class="col-lg-6 text-start">
            <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Diez.dev</h1>
            <p class="lead">
            This is un example of all the projects, click the box to redirect
            </p>
            <div class="d-grid gap-2 d-md-flex">
               <a class="btn btn-primary btn px-4 gap-3" href="https://github.com/deriannavy">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-github" viewBox="0 0 20 20">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
               Github
               </a>
               <a class="btn btn-outline-secondary btn px-4" href="https://github.com/deriannavy/diez">
                  this Repository
               </a>
            </div>
         </div>
      </div>

      <div class="d-flex flex-row align-items-center justify-content-between g-5 mb-2">
         <h4>Case studies</h4>

         <div class="dropdown">
           <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
             View all
           </button>
           <ul class="dropdown-menu dropdown-menu">
             <li><a class="dropdown-item" href="#">Js</a></li>
             <li><a class="dropdown-item" href="#">Py</a></li>
           </ul>
         </div>
         
      </div>

      <div class="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 g-3">
         <div class="col" v-for="card in studies">
            <div class="card p-0">
               <div class="card-body">
                  <h6 class="card-subtitle mb-2 text-body-secondary">
                     {{card.lang}}
                  </h6>
                  <h5 class="card-title">{{card.name}}</h5>
                  <p class="card-text col-8">{{card.description}}</p>

                  <div class="d-flex flex-row align-items-center">
                     <div  v-for="(img, index) in card.stack"
                           :style="{
                              'background-image': `url(${img.image})`,
                              'height': img.h,
                              'width': img.w,
                              'background-position': 'center',
                              'background-size': 'contain',
                              'background-repeat': 'no-repeat',
                              'margin-right': '20px'
                           }">

                     </div>
                  </div>
               </div>
               <div class="card-footer text-body-secondary p-0 text-end">

                  <router-link v-if="card.typeUrl == 'internal'" :to="card.url" class=" btn text-primary">
                     <span class="me-1">view case study</span>
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                       <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                     </svg>
                  </router-link>

                  <a v-else-if="card.typeUrl == 'external'"
                     :href="card.url">
                     <span class="me-1">view case study</span>
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                        <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                     </svg>
                  </a>

               </div>
            </div>
         </div>
      </div>

   </div>
</main>
</template>

<script setup>
import binaryTree from '@/assets/images/binary_tree.png';
// Stack image
import jsimage from '@/assets/images/javascript.png';
import pyimage from '@/assets/images/python.png';
import colabimage from '@/assets/images/colab.png';
</script>
<script>
export default{
   data(){
      return {
         studies: [
            {  
               name: 'Binary tree',
               lang: 'Javascript',
               url: '/case/binary-tree',
               typeUrl: 'internal',
               stack: [{image: jsimage, w: '30px', h: '30px'}],
               description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.' 
            },
            { 
               name: 'Breadth first search',
               lang: 'Javascript',
               url: '/case/breadth-first-search',
               typeUrl: 'internal',
               stack: [{image: jsimage, w: '30px', h: '30px'}],
               description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.' 
            },
            { 
               name: 'Lexicographic order',
               lang: 'Javascript',
               url: '/case/lexicographic-order',
               typeUrl: 'internal',
               stack: [{image: jsimage, w: '30px', h: '30px'}],
               description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.' 
            },
            {  name: 'Maze gen',
               lang: 'Javascript',
               url: '/case/maze-gen',
               typeUrl: 'internal',
               stack: [{image: jsimage, w: '30px', h: '30px'}],
               description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.' 
            },
            { 
               name: 'Multiperceptron', 
               lang: 'Javascript', 
               url: '/case/multiperceptron',
               typeUrl: 'internal',
               stack: [{image: jsimage, w: '30px', h: '30px'}],
               description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.' 
            },
            { 
               name: 'Neuro flappy',
               lang: 'Javascript', 
               url: '/case/neuro-flappy',
               typeUrl: 'internal',
               stack: [{image: jsimage, w: '30px', h: '30px'}],
               description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.' 
            },
            { 
               name: 'Pathfinder',
               lang: 'Javascript', 
               url: '/case/pathfinder',
               typeUrl: 'internal',
               stack: [{image: jsimage, w: '30px', h: '30px'}],
               description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.' 
            },
            { 
               name: 'Neuro flappy',
               lang: 'Javascript', 
               url: '/case/neuro-flappy',
               typeUrl: 'internal',
               stack: [{image: jsimage, w: '30px', h: '30px'}],
               description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.' 
            },
            { 
               name: 'Pathfinder',
               lang: 'Javascript', 
               url: '/case/pathfinder',
               typeUrl: 'internal',
               stack: [{image: jsimage, w: '30px', h: '30px'}],
               description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.' 
            },
            { 
               name: 'Perceptron',
               lang: 'Javascript', 
               url: '/case/perceptron',
               typeUrl: 'internal',
               stack: [{image: jsimage, w: '30px', h: '30px'}],
               description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.' 
            },
            { 
               name: 'Pool selection',
               lang: 'Javascript', 
               url: '/case/pool-selection',
               typeUrl: 'internal',
               stack: [{image: jsimage, w: '30px', h: '30px'}],
               description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.' 
            },
            { 
               name: 'Salesperson lexicographic',
               lang: 'Javascript', 
               url: '/case/salesperson-lexicographic',
               typeUrl: 'internal',
               stack: [{image: jsimage, w: '30px', h: '30px'}],
               description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.' 
            },
            { 
               name: 'Smart rocket',
               lang: 'Javascript', 
               url: '/case/smart-rocket',
               typeUrl: 'internal',
               stack: [{image: jsimage, w: '30px', h: '30px'}],
               description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.' 
            },
            { 
               name: 'Traveling salesperson',
               lang: 'Javascript', 
               url: '/case/traveling-salesperson',
               typeUrl: 'internal',
               stack: [{image: jsimage, w: '30px', h: '30px'}],
               description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.' 
            },
            { 
               name: 'Logistic regression',
               lang: 'Python',
               url: 'https://colab.research.google.com/drive/ 1K5aX9zu5CiQLS2LI7YYWZGGlMZA-hyOI?usp=sharing',
               typeUrl: 'external',
               stack: [{image:colabimage, w: '40px', h: '30px'}, {image:pyimage, w: '30px', h: '30px'}],
               description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.' 
            }
            
         ],
      }
   }
}
</script>
