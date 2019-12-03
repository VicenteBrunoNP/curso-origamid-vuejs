import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Cursos from './views/Cursos.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  // base: 'web', // determina onde é a base da aplicação
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/cursos',
      component: Cursos
    }
  ]
});