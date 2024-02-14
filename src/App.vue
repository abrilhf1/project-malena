<template>
  <v-app class="app">
    <v-app-bar
      app
      color="#ffc97e"
      dark
      class="navbarInicio"
      height="122px"
    >

      <v-spacer></v-spacer>

      <v-list-item class="navbar-item">
            <router-link class="router" to="/">Inicio</router-link>
      </v-list-item>

      <v-list-item class="navbar-item">
            <router-link to="/vestiteConmigo">Vestite Conmigo</router-link>
      </v-list-item>

      <v-list-item class="navbar-item">
            <router-link to="/trivia">Trivia Games</router-link>
      </v-list-item>
      
      <v-list-item class="navbar-item">
            <router-link to="/experienciaUser">Contanos Tu Experiencia</router-link>
      </v-list-item>


    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>


<style scoped>
.app{
  background-color: #ffc97e;
}

.v-application a{
  font-family: 'Fredoka One', cursive;
  color: rgb(216 88 58);
  text-decoration: none;
  font-size: 18px;
  padding: 16px;
}

.v-toolbar_content{
    height: 99px;
}

.v-list-item{
  justify-content: center;
}

.theme--dark.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled){
    padding: 0;
}

</style>