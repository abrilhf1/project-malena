<template>
    <div class="col">
    <ul> 
        <li>
        <img :src="img" :alt="alt" :width="width" :height="height" />
        
        <label class="pusoFav">
          
          <input type="checkbox" :value="favs" :id="id" :checked="isChecked" @change="favoritos">
          <span></span>
        </label>
        </li>
    </ul>

    

    </div>





</template>

<script>
    export default{

        name: 'PrendasCargadas',
        props:["id", "img", "alt", "width", "height", "favs"],
        computed: {
          isChecked: function( ){ 
            var prendasLocalStorage = localStorage.getItem( 'favoritas' );
            if( ! prendasLocalStorage ){
              prendasLocalStorage = {}
            }else{
              prendasLocalStorage = JSON.parse( prendasLocalStorage );
            }

            console.log(this.id in prendasLocalStorage)

            return this.id in prendasLocalStorage;

          }
        },
        methods: {
          favoritos(e) {
            let estado = e.target.checked;

            if(estado == true) {
              this.agregarFavorito( this._props);
            }else{
              this.quitarFavorito( this.id );
            }
          },
          
          agregarFavorito(datos) {
            var prendasLocalStorage = localStorage.getItem('favoritas');

            if(!prendasLocalStorage) {
              prendasLocalStorage = {}
            } else {
              prendasLocalStorage = JSON.parse(prendasLocalStorage)
            }

            prendasLocalStorage[ datos.id ] = datos;

            prendasLocalStorage = JSON.stringify( prendasLocalStorage );

            localStorage.setItem( 'favoritas', prendasLocalStorage );
          },

          quitarFavorito (sacar) {
            var prendasLocalStorage = localStorage.getItem( 'favoritas' ); 				
            prendasLocalStorage = JSON.parse( prendasLocalStorage ); 
			
            if( sacar in prendasLocalStorage ){
              
              delete prendasLocalStorage[ sacar ]; 
            }

            prendasLocalStorage = JSON.stringify( prendasLocalStorage ); 
            localStorage.setItem( 'favoritas', prendasLocalStorage ); 
          }



        }
   
  }
    



</script>

<style scoped>

  .col > ul > li {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .col{
    padding-top: 80px;
  }

  button{
    margin-top: 44px;
    border: none;
    background-color: #ffc97e;
    width: 50%;
    border-radius: 6px;
    font-family: 'Fredoka One', cursive;
    font-size: 20px;
    color: rgb(216 88 58);
  }

  button > i{
    margin-left: 10px;
    color: rgb(216 88 58);
    font-size: 22px;
  }


  input {
    display: none;
  }

.pusoFav > span{
    display: inline-block; 
    width: 32px;
    height: 32px;
    background: url(@/assets/img/unfav.png) 100px 18px no-repeat;
    cursor: pointer;
    margin-top: 26px;
    background-position: center;

}



.pusoFav input:checked ~ span{
    background:url(@/assets/img/fav.png) 95px 13px no-repeat;
    width: 32px;
    height: 32px;
    background-position: center;
}

</style>