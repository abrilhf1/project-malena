<template>
    <div id="vestite">
      <h1>Vestite Conmigo!</h1>

      <p>Por debajo podemos ver todos los outfits de Malena. Ayudala a elegir!</p>

        <div class="container">
              <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                <PrendasCargadas v-for="x in ropa"  
                v-bind:key="x.id"
                v-bind:id="x.id" 
                v-bind:img="x.img"
                v-bind:alt="x.alt"
                v-bind:width="x.width"
                v-bind:height="x.height"
                
                
                />
                
              </div>
              
        </div>

    </div>





</template>

<script>
import PrendasCargadas from '@/components/PrendasCargadas.vue'



export default {
  name: 'VestiteConmigo',

  components: {
    PrendasCargadas,
    },
      
    data:function(){
        return {
        ropa:[
                {
                   img: require('@/assets/img/malena/malena-con-jean-chaleco2.svg'),
                   width:"229.13px",
                   height:"517.78px",
                   alt: "Malena con jean y chaleco",
                   id: 1
                    },
                {
                    img: require('@/assets/img/malena/malena-con-joggin-buzo.svg'),
                    width:"229.13px",
                    height:"517.78px",
                    alt: "Malena con joggin y buzo",
                    id: 2
                    },
                {
                    img: require('@/assets/img/malena/malena-con-pollera-top.svg'),
                    width:"229.13px",
                    height:"517.78px",
                    alt: "Malena con pollera y top",
                    id: 3
                    },
                {
                    img: require('@/assets/img/malena/malena-con-vestido-rosa.svg'),
                    width:"229.13px",
                    height:"517.78px",
                    alt: "Malena con vestido rosa",
                    id: 4
                    }
            ],

    }
}

}
</script>


<style scoped>
  #vestite{
    height: 90vh;
  }
  #vestite,
  footer{
    background-color: rgb(216 88 58);
  }

  h1{
    font-family: 'Fredoka One', cursive;
    color: #ffc97e;
    padding-top: 200px;
    padding-left: 24px;
    font-size: 100px;
  }



  p{
    font-family: 'Josefin Sans', sans-serif;
    font-size: 1.6rem;
    padding-left: 30px;
    color: white;
  }

  @media (max-width: 480px){
    h1{
      padding-top: 100px;
      font-size: 46px;
    }
  }

</style>