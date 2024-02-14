<template>
<div class="exp" id="formulario" >
              
      <h1 class="text-center">¡Ayudanos a mejorar!</h1>
          <form class="row g-3 mt-5" @submit.prevent> 

              <div class="col-md-6">
                  <label class="form-label">¿Te gustó la trivia?</label>
                    <select class="form-select" v-model="dato.selected">
                    <option disabled>Eligue...</option>
                    <option>Si</option>
                    <option>No</option>
                    <option>Hubiese preferido otra cosa</option>
                    </select>
              </div>

              <div class="col-md-6">
                <label class="form-label">Contanos tus experiencias en nuestra web</label>
                <textarea class="form-control" v-model= "dato.exp"></textarea>
              </div>
                
              <div class="col-12">
                <label class="form-label">¿Qué le agregarías a nuestra web?</label>
                <textarea class="form-control" v-model= "dato.comentario"> </textarea>
              </div>
                
              <div class="col-12">
                  <button type="submit" class="btn btn-warning mb-5 mt-5" @click="guardar(dato)">Guardar</button>
              </div>
                  <MostrarDatos v-for="(x,index) in arr" :key="index" 
                  v-bind:datos="x"

                  />
            </form>    
          
 </div>








</template>

<script>

import MostrarDatos from '@/components/MostrarDatos.vue'

export default{
    name:'experienciaUser',
    components:{
        MostrarDatos
    },


data:function(){
    return{
        dato:{
            exp:"", 
            comentario:"",
            selected:"",
          },
           arr:[],
    }
        
            
        },
        
  methods: {
    guardar(dato) {
      if (!localStorage.local) {
        this.arr = []

      } else {
        this.arr = JSON.parse(localStorage.getItem("local"))
      }

      this.arr.push(dato)

      localStorage.setItem("local", JSON.stringify(this.arr))

      this.dato = { exp: "", comentario: "", selected: "" }

    }      

}
}
</script>

<style scoped>
.exp{
  background-color: #ffc97e;
  padding: 150px;

}

.exp h1{
    font-size: 90px;
    font-family: 'Fredoka One', cursive;
    color: rgb(216 88 58);
  }

.exp > form > div > label{
  font-family: 'Josefin Sans', sans-serif;
  font-size: 24px;
}

.exp > form > div > select,
.exp > form > div > textarea{
  border: none;
}

.exp > form > div > button{
  font-family: 'Josefin Sans', sans-serif;
  font-size: 24px;
  
}

.exp > form > div > textarea{
  resize: none;
}

@media (max-width: 480px){
  .exp {
    background-color: #ffc97e;
    padding: 44px;
  }

  .exp h1{
    font-size: 48px;
  }
}

</style>