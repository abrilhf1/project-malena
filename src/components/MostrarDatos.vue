<template>
            <div> 
                <div class="icono">
                    <h3>Tus referencias aquí </h3>
                    <i class="bi bi-arrow-down-circle-fill"></i> 
                </div>
                <ul class="listado">
                    <li>
                    ¿Te gustó la trivia? : {{datos.selected}} 
                    </li>
                    <li>
                    Contanos tus experiencias en nuestra web: {{datos.exp| truncate(12)}} 
                    </li>
                    <li>
                    ¿Qué le agregarías a nuestra web? : <ul><li>{{datos.comentario| truncate(15)}} </li></ul>
                    </li>
                </ul>
            </div>


</template>

<script>

import Vue2Filters from 'vue2-filters'

    export default{

        name: 'MostrarDatos',
        props:["datos"],

        mixins: [Vue2Filters.mixin]


    }





</script>

<style scoped>
.icono{
    display: flex;
    align-items: center;
}

.icono > i{
    
    font-size: 28px;
    margin-left: 14px;
    color: rgb(216 88 58);

}

.icono > h3{
    font-size: 30px;
    font-family: 'Fredoka One', cursive;
    color: rgb(216 88 58);
}

.listado > li {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 18px;
    list-style-type: circle;
}
</style>