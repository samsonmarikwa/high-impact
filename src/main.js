import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

// routes is the named const exported from the routes.js file
import { routes } from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash}
    }
    return {
      x: 0, y: 0
    };

  }
});

// Execute this before each routing action. We want to check if the user is allowed to enter a particular route.
// Normally, we only setup this action on certain routes that should be protected and not globally. See
// the routing.js file.
router.beforeEach((to, from, next) => {
  console.log('global beforeEach');
  // continue the journey and finally loads the requested page.
  next();
  /*
  // abort the requested navigation and stay on the same page
  next(false);

  // navigates to the page specified, in other words, a redirect. This can be a path or an object or as in the example.
  next('/');
  */

});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
