import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/Home.vue';
import Login from './pages/Login.vue';
import Register from './pages/Register.vue';
import MainNavbar from './layout/MainNavbar.vue';
import MainFooter from './layout/MainFooter.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      components: { default: Home, header: MainNavbar, footer: MainFooter},
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/login',
      name: 'login',
      components: { default: Login, header: MainNavbar },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: '/register',
      name: 'register',
      components: { default: Register, header: MainNavbar },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
