<template>
<main>
   <div class="container col-xxl-10 px-4 py-5">
      <Transition name="fade" tag="div">
         <div class="row flex-lg-row-reverse align-items-center g-5 py-5" v-if="!dtSearchFilter">
            <div class="col-10 col-sm-8 col-lg-6 d-flex flex-column align-items-center">
               <img :src="heroimage" class="d-block mx-lg-auto img-fluid rounded shadow-lg" alt="Hero image" width="400" height="auto" loading="lazy">
               <study-link :study="dtHeroCard"/>
            </div>
            <div class="col-lg-6 text-start">
               <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Diez.dev</h1>
               <p class="lead">
                  Happy to see you, I show you some of my hobby projects or interests, I promise to add all of them, of which I have a backup, enjoy ✌🏻.
               </p>
               <div class="d-grid gap-2 d-md-flex">
                  <a class="btn btn-primary btn px-4 gap-3" href="https://github.com/deriannavy">
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-github" viewBox="0 0 20 20">
                       <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                     </svg>
                  Github
                  </a>
                  <a class="btn btn-outline-secondary btn px-4" href="https://github.com/deriannavy/diez">
                     this repository
                  </a>
               </div>
            </div>
         </div>
      </Transition>

      <div class="d-flex flex-row align-items-center justify-content-between g-5 mb-2">
         <h4>Case studies</h4>

         <div class="dropdown">
            <button class="btn dropdown-toggle d-flex flex-row align-items-center" 
                    type="button" 
                    data-bs-toggle="dropdown" 
                    aria-expanded="false">
               <stack :stack="[dtFilter.id]" :technologies="technologies"/>
               {{ dtFilter.name }}
            </button>
            <ul class="dropdown-menu dropdown-menu p-3">
               <li><h6 class="dropdown-header ps-0">Technologies</h6></li>
               <li v-if="dtFilter.id != 'view_all'">
                  <button @click="dtFilter = { name: 'View all', id: 'view_all' }" 
                          class="dropdown-item d-flex p-2">

                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-archive me-2" viewBox="0 0 16 16">
                          <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                        View all
                  </button>
               </li>
               <li v-for="tech in technologies" class="d-flex flex-row">
                  <button @click="dtFilter = tech" 
                          :class="['dropdown-item d-flex p-2', {'active': dtFilter.id == tech.id}]">

                     <stack :stack="[tech.id]" :technologies="technologies"/>
                     {{tech.name}}
                  </button>
               </li>
            </ul>
         </div>
         
      </div>

      <div class="col col-8 col-md-4 mb-3">
         <div class="input-group">
           <span class="input-group-text" id="search-studies">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                 <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
               </svg>
           </span>
           <input type="text" class="form-control" 
                  placeholder="Search" 
                  aria-label="search" 
                  aria-describedby="search-studies"
                  v-model="dtSearchFilter">
         </div>
      </div>

      <TransitionGroup class="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 g-3"
                       name="slide-fade"
                       tag="div">

         <div class="col" 
              v-for="(card, index) in cpStudiesSearchFiltered" 
              :key="card.id"
              :style="`--slide-fade-time: ${250*index+250 < 3000 ? 250*index+250 : 3000 }ms`">

            <div :class="['card p-0', { 'border-primary': card.id == dtHeroCard.id }, 
                           card.publishedStatus.published ? 'hover-shadow' : 'opacity-50'
                         ]">
               <div class="card-body">

                  <h6 class="card-subtitle mb-2 text-body-secondary d-flex flex-row justify-content-between">
                     {{card.lang}}
                     <span :class="`badge rounded-pill text-bg-${ card.publishedStatus.bgColor }`">
                        {{card.publishedStatus.status}}
                     </span>
                  </h6>

                  <h5 class="card-title">{{card.name}}</h5>
                  <p class="card-text">{{card.description}}</p>

                  <stack :stack="card.stack" :technologies="technologies"/>
               </div>
               <div class="card-footer p-0 d-flex flex-row justify-content-end">

                  <study-link :study="card" :placeholder="'See more'"/>
               </div>
            </div>
         </div>

      </TransitionGroup>

   </div>
</main>
</template>

<script setup>
import heroimage from '@/assets/images/principal.png';
// Components
import Stack from '@/components/general/Stack.vue';
import StudyLink from '@/components/general/StudyLink.vue';
// Stack image
import jsimage from '@/assets/images/javascript.png';
import vuejsimage from '@/assets/images/vuejs.png';
import pyimage from '@/assets/images/python.png';
import colabimage from '@/assets/images/colab.png';
import flaskimage from '@/assets/images/flask.png';
import elixirimage from '@/assets/images/elixir.png';
import phoeniximage from '@/assets/images/phoenix.png';
</script>
<script>
export default{
   components: { Stack, StudyLink },
   mounted(){
      this.dtHeroCard = this.fnRandomCard();
   },
   data(){
      return {
         dtFilter: { name: 'View all', id: 'view_all' },
         dtSearchFilter: '',
         dtHeroCard: {},
         technologies: [
            {id: 'js', name: 'Javascript', image: jsimage, width: '25px', height: '25px'},
            {id: 'python', name: 'Python', image: pyimage, width: '25px', height: '25px'},
            {id: 'vue', name: 'Vue', image: vuejsimage, width: '25px', height: '25px'},
            {id: 'colab', name: 'Google Colab', image: colabimage, width: '30px', height: '25px'},
            {id: 'flask', name: 'Flask', image: flaskimage, width: '30px', height: '25px'},
            {id: 'elixir', name: 'Elixir', image: elixirimage, width: '30px', height: '25px'},
            {id: 'phoenix', name: 'Phoenix', image: phoeniximage, width: '35px', height: '30px'}
         ],
         studies: [
            {  
               id: 'binary_tree',
               name: 'Binary tree',
               lang: 'Javascript',
               url: '/case/binary-tree',
               typeUrl: 'internal',
               stack: ['vue', 'js'],
               publishedStatus: { status: 'Published', bgColor: 'primary', published: true },
               description: 'A binary tree generator, using random values for nodes, and the total node input, creating folder to contain child nodes recursively.' 
            },
            { 
               id: 'breadth_first_search',
               name: 'Breadth first search',
               lang: 'Javascript',
               url: '/case/breadth-first-search',
               typeUrl: 'internal',
               stack: ['vue', 'js'],
               publishedStatus: { status: 'Published', bgColor: 'primary', published: true },
               description: 'An example of graph search algorithm here you can add nodes, and connections, at first instance you can see the example nodes with names, and a search from you to Thom using bfs.'
            },
            { 
               id: 'lexicographic_order',
               name: 'Lexicographic order',
               lang: 'Javascript',
               url: '/case/lexicographic-order',
               typeUrl: 'internal',
               stack: ['vue', 'js'],
               publishedStatus: { status: 'Published', bgColor: 'primary', published: true },
               description: 'lexicographic order shows all possible combination solutions by skipping over the options already generated, making it more optimal.' 
            },
            {  
               id: 'maze_gen',
               name: 'Maze gen',
               lang: 'Javascript',
               url: '/case/maze-gen',
               typeUrl: 'internal',
               stack: ['vue', 'js'],
               publishedStatus: { status: 'Published', bgColor: 'primary', published: true },
               description: 'Maze generator using the class-based box registration and the p5 library.' 
            },
            { 
               id: 'multiperceptron',
               name: 'Multiperceptron', 
               lang: 'Javascript', 
               url: '/case/multiperceptron',
               typeUrl: 'internal',
               stack: ['vue', 'js'],
               publishedStatus: { status: 'Published', bgColor: 'primary', published: true },
               description: '?' 
            },
            { 
               id: 'neuro_flappy',
               name: 'Neuro flappy',
               lang: 'Javascript', 
               url: '/case/neuro-flappy',
               typeUrl: 'internal',
               stack: ['vue', 'js'],
               publishedStatus: { status: 'Updating', bgColor: 'warning', published: false },
               description: '?' 
            },
            { 
               id: 'pathfinder',
               name: 'Pathfinder',
               lang: 'Javascript', 
               url: '/case/pathfinder',
               typeUrl: 'internal',
               stack: ['vue', 'js'],
               publishedStatus: { status: 'Updating', bgColor: 'warning', published: false },
               description: '?' 
            },
            { 
               id: 'perceptron',
               name: 'Perceptron',
               lang: 'Javascript', 
               url: '/case/perceptron',
               typeUrl: 'internal',
               stack: ['vue', 'js'],
               publishedStatus: { status: 'Updating', bgColor: 'warning', published: false },
               description: '?' 
            },
            { 
               id: 'pool_selection',
               name: 'Pool selection',
               lang: 'Javascript', 
               url: '/case/pool-selection',
               typeUrl: 'internal',
               stack: ['vue', 'js'],
               publishedStatus: { status: 'Updating', bgColor: 'warning', published: false },
               description: '?' 
            },
            { 
               id: 'salesperson_lexicographic',
               name: 'Salesperson lexicographic',
               lang: 'Javascript', 
               url: '/case/salesperson-lexicographic',
               typeUrl: 'internal',
               stack: ['vue', 'js'],
               publishedStatus: { status: 'Updating', bgColor: 'warning', published: false },
               description: '?' 
            },
            { 
               id: 'smart_rocket',
               name: 'Smart rocket',
               lang: 'Javascript', 
               url: '/case/smart-rocket',
               typeUrl: 'internal',
               stack: ['vue', 'js'],
               publishedStatus: { status: 'Updating', bgColor: 'warning', published: false },
               description: '?' 
            },
            { 
               id: 'traveling_salesperson',
               name: 'Traveling salesperson',
               lang: 'Javascript', 
               url: '/case/traveling-salesperson',
               typeUrl: 'internal',
               stack: ['vue', 'js'],
               publishedStatus: { status: 'Updating', bgColor: 'warning', published: false },
               description: '?' 
            },
            { 
               id: 'logistic_regression',
               name: 'Logistic regression',
               lang: 'Python',
               url: 'https://colab.research.google.com/drive/1K5aX9zu5CiQLS2LI7YYWZGGlMZA-hyOI?usp=sharing',
               typeUrl: 'external',
               stack: ['colab', 'python'],
               publishedStatus: { status: 'Published', bgColor: 'primary', published: true },
               description: 'A very simple logistic regression is shown using the machine learning tools to determine prospects to credits based on subtraction calculations between your perceptions and deductions.' 
            },
            { 
               id: 'multiclass_logistic_regression',
               name: 'Multiclass logistic regression',
               lang: 'Python',
               url: 'https://colab.research.google.com/drive/1OnCeUIipMrgVomppfmOPPGVkaSZzSo8z?usp=sharing',
               typeUrl: 'external',
               stack: ['colab', 'python'],
               publishedStatus: { status: 'Published', bgColor: 'primary', published: true },
               description: 'A regression is shown that allows categorizing arrays 2-dimensional, simulating handwritten numbers, this allows you to correctly categorize the digits from 0 to 9 with a precision of 0.955' 
            },
            { 
               id: 'neural_network_movement_prediction',
               name: 'Neural network (movement prediction)',
               lang: 'Python',
               url: 'https://colab.research.google.com/drive/1TXcHh10HnvUxuguUOrMSBX893DwGugeU?usp=sharing',
               typeUrl: 'external',
               stack: ['colab', 'python'],
               publishedStatus: { status: 'Published', bgColor: 'primary', published: true },
               description: 'A 4-layer sequential neural network is shown that manages to predict with hiring and dismissal information an adjusted vision of how they would behave in a period of one year.' 
            },
            { 
               id: 'Neural_network_stock_prediction',
               name: 'Neural network (stock prediction)',
               lang: 'Python',
               url: 'https://colab.research.google.com/drive/1_inSyWJ26bsuDU1-vdBOrwpoi38Tn7tV?usp=sharing',
               typeUrl: 'external',
               stack: ['colab', 'python'],
               publishedStatus: { status: 'Published', bgColor: 'primary', published: true },
               description: 'A 4-layer sequential neural network is shown that manages to predict with information on the prices of apple shares an adjusted vision of how they would behave in a period of one year.' 
            },
            { 
               id: 'text_in_image_detection',
               name: 'Text-in-image detection',
               lang: 'Python',
               url: 'https://colab.research.google.com/drive/1BEg64kFRaah7-tsTYL8Fb40evD4yDSs0?usp=sharing',
               typeUrl: 'external',
               stack: ['colab', 'python'],
               publishedStatus: { status: 'Published', bgColor: 'primary', published: true },
               description: 'Here we can see the use of machine learning libraries to detect characters, in this case to detect text on license plates (there are still filters to be made on the text).' 
            },
            { 
               id: 'plate_and_text_detection',
               name: 'Plate and text detection',
               lang: 'Python',
               url: 'https://colab.research.google.com/drive/1jpUpogd3Ep7nCzQYxdyVDx6SeR5mePgi?usp=sharing',
               typeUrl: 'external',
               stack: ['colab', 'python'],
               publishedStatus: { status: 'Published', bgColor: 'primary', published: true },
               description: 'Here we can see a machine learning architecture, where a model is used to detect text in an image and then the letters are recognized.' 
            },
            { 
               id: 'plate_detection_and_recognition',
               name: 'Plate detection and recognition',
               lang: 'Python',
               url: 'https://colab.research.google.com/drive/1CVbCXcx79O8MEvDAj1ZhbZssvL772iit?usp=sharing',
               typeUrl: 'external',
               stack: ['colab', 'python'],
               publishedStatus: { status: 'Published', bgColor: 'primary', published: true },
               description: 'With the help of pre-trained models, we can see a strategy for license plate detection, image cleanup, noise segmentation, and finally character detection and recognition.' 
            },
            { 
               id: 'face_detection_and_recognition',
               name: 'Face detection and recognition',
               lang: 'Python',
               url: 'https://colab.research.google.com/drive/1LgfR4b11yk8jBDedQQxtbmMYOuLIouMw?usp=sharing',
               typeUrl: 'external',
               stack: ['colab', 'python'],
               publishedStatus: { status: 'Published', bgColor: 'primary', published: true },
               description: 'A model capable of detecting faces in images and determining by training whether a face matches' 
            },
            { 
               id: 'plate_detection_and_recognition_web',
               name: 'Plate detection and recognition web',
               lang: 'Python',
               url: 'https://plates.diez.dev',
               typeUrl: 'external',
               stack: ['flask', 'python'],
               publishedStatus: { status: 'Published', bgColor: 'primary', published: true },
               description: 'With the help of pre-trained models, we can see a strategy for license plate detection, image cleanup, noise segmentation, and finally character detection and recognition in a web app. (user:plates) (pass:platespass)' 
            },
            { 
               id: 'single_sign_on_frontend',
               name: 'Single sign on',
               lang: 'Javascript',
               url: 'https://sso.diez.dev',
               typeUrl: 'external',
               stack: ['js', 'vue'],
               publishedStatus: { status: 'Published', bgColor: 'primary', published: true },
               description: 'Example of a web application that generates a jwt token that will later be used by other subdomains of the service suite (Frontend)' 
            },
            { 
               id: 'single_sign_on_backend',
               name: 'Single sign on',
               lang: 'Elixir',
               url: 'https://sso.diez.dev',
               typeUrl: 'external',
               stack: ['elixir', 'phoenix'],
               publishedStatus: { status: 'Published', bgColor: 'primary', published: true },
               description: 'Example of a web application that generates a jwt token that will later be used by other subdomains of the service suite (Backend)' 
            }
         ]
      }
   },
   methods:{
      fnRandomCard(){
         const published =  this.studies.filter(studies => studies.publishedStatus.published),
               randomCardNumber = Math.floor( Math.random() *  published.length);

         return published[randomCardNumber];

      }
   },
   computed: {
      cpStudiesTechFiltered() {

         if(this.dtFilter.id == "view_all"){return this.studies; }

         return this.studies.filter(e => e.stack.includes(this.dtFilter.id));
      },
      cpStudiesSearchFiltered(){

         let list = this.cpStudiesTechFiltered;

         // Add search filter to study list
         if (this.dtSearchFilter){ 
            list = list.filter(
               e => e.name.toLowerCase().includes(this.dtSearchFilter.toLowerCase())
            )
         }
         // Sort list to see published first
         return list.sort((studyA, studyB) => {
            if (studyA.publishedStatus.published === studyB.publishedStatus.published) return 0;
            else if (studyA.publishedStatus.published) return -1;
            return 1;

         })
      }
   }
}
</script>
