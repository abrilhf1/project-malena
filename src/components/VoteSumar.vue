<template>
    <div class="sumar">
            <h2>{{calificacion}}</h2>
            <p class="cal">{{texto | capitalize}} {{ sumar }}</p>
            <a class="suma" v-on:click ="sumar++ "> <i class="bi bi-hand-thumbs-up-fill"> </i> </a>
            <a class="resta" v-on:click = "sumar --"> <i class="bi bi-hand-thumbs-down-fill"> </i> </a>


                              
            <div class="elseif">
            <p v-if="sumar <= 4"> Ou.. vamos a mejorar</p>
            <p v-else>Muchas gracias!</p>
            </div>
    </div>



</template>

<script>
    export default{

        name: 'VoteSumar',

        data:function(){
            return{
                sumar: 0,
                texto:"calificación:",
                calificacion:"¿Cómo calificarías nuestra página?",
                
            }
        },

        filters:{
            capitalize:function (value){
                if(!value) return ""
                value = value.toString()
                return value.charAt(0).toUpperCase() + value.slice(1)

            }
        }

    }



</script>

<style scoped>

  h2{
    font-family: 'Fredoka One', cursive;
    color: rgb(216 88 58);
  }

    p{
    font-family: 'Josefin Sans', sans-serif;
    font-size: 20px;
    }

    .cal{
        font-size: 32px;
        font-weight: bold;

    }

</style>