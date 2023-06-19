<template>
<main>
   <div class="container col-xxl-10 px-4 py-5">
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
         <div class="col-10 col-sm-8 col-lg-6 text-center">
            <img :src="binaryThree" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="400" height="auto" loading="lazy">
            <a href="#" class="btn btn-sm btn-outline-secondary">Binary three</a>
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
             <li><a class="dropdown-item" href="#">JS</a></li>
             <li><a class="dropdown-item" href="#">Python</a></li>
           </ul>
         </div>
         
      </div>

      <div class="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 g-3">
         <div class="col" v-for="card in studies">
            <div class="card p-0">
               <div class="card-body">
                  <h6 class="card-subtitle mb-2 text-body-secondary">{{card.lang}}</h6>
                  <h5 class="card-title">{{card.name}}</h5>
                  <p class="card-text col-8">{{card.description}}</p>
               </div>
               <div class="card-footer text-body-secondary text-end p-0">
                  <router-link :to="card.url" class="card-link btn text-primary">
                     <span class="me-1">see more</span>
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                       <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                     </svg>
                  </router-link>
               </div>
            </div>
         </div>
      </div>

   </div>
</main>
</template>

<script setup>
import binaryThree from '@/assets/images/binary_three.png'
</script>
<script>
export default{
   data(){
      return {
         studies: [
            { name: 'Binary three', lang: 'Javascript', url: 'binary-three', description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.' },
            { name: 'Binary three', lang: 'Javascript', url: 'binary-three', description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.' },
            { name: 'Binary three', lang: 'Javascript', url: 'binary-three', description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.' }
         ]
      }
   }
}
</script>
