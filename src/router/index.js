import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/HomeVestite.vue'
import vestiteConmigo from '../views/VestiteConmigo.vue'
import experienciaUser from '../views/Experiencia.vue'
import trivia from '../components/Trivia.vue'
import Vue2Filters from 'vue2-filters'

Vue.use(VueRouter)
Vue.use(Vue2Filters)


const routes = [

    {
        path: '/', component: home, name: 'home'
    },
    {
        path: '/vestiteConmigo', component: vestiteConmigo, name:'VestiteConmigo'
    },

    {
        path: '/experienciaUser', component: experienciaUser, name:'experienciaUser'
    },

    {
        path: '*', redirect: '/'
    },
    {
        path: '/trivia',
        component: trivia,
        name: 'Mi-trivia'
    }
];

const router = new VueRouter({
    routes
});

export default router