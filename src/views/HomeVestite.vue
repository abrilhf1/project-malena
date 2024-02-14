<template>
<div id="home">

  <div>
    <h1>Bienvenidos a Vestite Conmigo!</h1>
  
    <p>Vamos a disfrutar de un buen momento junto con Malena</p>
  
    <a class="btn" href="#info">Quiero saber más!</a>
  </div>
          
              <div id="vestite-conmigo"></div>

            <section id="info">
              <h2>De qué se trata?</h2>
              <div class="clearfix">
                <p  class="col-md-8 float-md-end mx-auto d-block mb-3 ms-md-3" >Les presentamos a Malena, hoy a la noche tiene una cita con el chico que le gusta pero no sabe qué ponerse. La ayudamos?</p> 
                
                <p  class="col-md-8 float-md-end mx-auto d-block mb-3 ms-md-3">El juego consiste en elegir tus outfits favoritos y así darle una mano a Malena con su cita! </p>
                <a class="col-md-8 float-md-end"><router-link to="/vestiteConmigo">Vamos a ayudarla!</router-link></a>
                
                
                <img src="@/assets/img/malena/malena.svg" alt="Malena" width="310.9" height="449.38">

            
            </div>
            </section>

  <section class="text-center">
      <VoteSumar/>
  </section>
  <section class="noti">
            <div class="checkbox text-center">
                <input  class="noti" type="checkbox" v-model="check" />
                <label v-bind:class=" check ? 'verde' : 'negro' ">¿Querés recibir notificaciones de nosotros?</label>
            </div>
  </section>
</div>








</template>



<script>
import VoteSumar from '@/components/VoteSumar.vue'



export default {
  name: 'HomeVue',

  components: {
    VoteSumar
  },

  data:function(){
    return {
      check: false
    }
}

}

</script>

<style scoped>

  h1{
    font-family: 'Fredoka One', cursive;
    color: rgb(216 88 58);
    padding-top: 12%;
    padding-left: 24px;
    font-size: 80px;
  }

 #info > h2{
    font-family: 'Fredoka One', cursive;
    color: #ffc97e;
    padding-top: 12%;
    padding-left: 24px;
    font-size: 80px;
  }

  #info{
    background-color: rgb(216 88 58);
  }

  p{
    font-family: 'Josefin Sans', sans-serif;
    font-size: 24px;
    padding-left: 24px;
  }

  .clearfix > p{
     color: #ffe0b6;

  }

  .btn{
    background-color: rgb(216 88 58);
  }


  .v-application a{
    color: white;
    margin-left: 24px;
    border-radius: 8px;
    padding: 8px ;  
    font-family: 'Josefin Sans', sans-serif;
    font-size: 22px;
  }

  #home{
    background-color: #ffc97e;
  }
  label.verde{
   color: green;
   background-color: #ffc97e;
  }

  #vestite-conmigo{
    background-image: url(@/assets/img/img-principal.svg);
    background-repeat: no-repeat;
    background-position-x: right;
    height: 530.2px;
  }

  .sumar{
    border: none;
    margin-top: 100px;
  }

  .sumar > h2{
    font-family: 'Fredoka One', cursive;
    font-size: 28px;
    margin-top: 40%;
    
  }

  .sumar > p{
    font-family: 'Josefin Sans', sans-serif;
    font-size: 24px;
  }

  .sumar > a > i{
    font-size: 30px;
  } 

  .checkbox > label{
    font-family: 'Josefin Sans', sans-serif;
    font-size: 22px;
    margin-left: 12px;
  }
  .noti{
    margin-top: 100px;
  }

  @media (max-width: 480px){
    h1,
    #info > h2{
      padding-top: 100px;
      font-size: 46px;
    }

    #vestite-conmigo{
      height: 344.2px;
      background-position-y: bottom;
      background-size: 680px;
      background-position-x: 0;
    }

    #info > div p{
      padding-right: 24px;
      padding-top: 20px;
      padding-bottom: 20px;
    }

    #home a{
      margin-left: 18px;
    }
  }


</style>