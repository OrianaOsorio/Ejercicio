Vue.component('app', {
   data () {
    return{
        app: 0,
        numero: 0
        
    }
    
            
   },

   methods: {
       increment (){
           this.app += 1

       }
   },

   template: //html
   `
    <div class="p-5 bg-warning text-white">
        <h3>Contador de tareas: {{numero}} </h3>
        <button class="btn btn-danger" @click="numero++">+</button>
        <app2 :numero="numero"></app2>
        <button v-on:click="increment"> Click Aquí</button>
        <span>{{ app }}</span>
        
    </div>
   `

})

/* se vincula todo lo que se haga en Vue con nuestro html
    será a través de id="app" del archivo index.html en el container*/

app = new Vue({
    
    /*se relaciona con el: '#app' el cual es un objeto*/
    el: '#app',
    data: {
        titulo: 'Agregar tareas con Vue',
        /*array, se guardará cada una de las tareas*/
        tareas: [],
        /*creamos otra variable nuevaTarea con un String vacio*/ 
        nuevaTarea: '',
        counter: 0
    },
    /*se crean metodo y dentro de el los objetos dentro del
     objeto la funcion y dentro de las actividades que hará*/ 
    methods:{
        agregarTarea: function(){
            //console.log('diste click ', this.nuevaTarea );
            //para guardar los objetos dentro del array
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            });
            //console.log(this.tareas);
            this.nuevaTarea = '';
            /*como ya tenemos elementos en nuestro array creamos un ciclo for
      así: v-for="item of tareas" en el archivo index.html*/
        },//oobjeto termina en ,
        editarTarea: function(index){
            //pintar
            //console.log('editar', index);
            this.tareas[index].estado = true;
        },
        eliminar: function(index){
           // console.log(index);
           this.tareas.splice(index, 1);
        }

    }

});
