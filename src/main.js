import Vue from 'vue';
import App from './App.vue';
// You can change this import to `import router from './starterRouter'` to quickly start development from a blank layout.
import router from './router';
import NowUiKit from './plugins/now-ui-kit';
import axios from 'axios'
// window.axios = require('axios');

// window.axios.defaults.headers.common = {
//     'X-Requested-With': 'XMLHttpRequest',
//     'X-CSRF-TOKEN' : document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
// };
// window.csrf_token = "{{ csrf_token() }}"
// axios.defaults.headers.common = {
//   'X-Requested-With': 'XMLHttpRequest',
//   'X-CSRF-TOKEN': window.csrf_token
// };
Vue.prototype.$http = axios
Vue.prototype.$baseURI = 'http://localhost:8000/api/'
Vue.config.productionTip = false;

Vue.use(NowUiKit, axios);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
