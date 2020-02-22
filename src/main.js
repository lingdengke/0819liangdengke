import Vue from 'vue'
import 'lib-flexible/flexible'
import App from './App.vue'
import router from './router'
import * as API from './api'
import Vuex from './vuex'
//import { Button } from 'mint-ui';
import { Button, Field, Form } from 'vant';

Vue.prototype.$API = API
Vue.use(Button);
Vue.use(Form);
Vue.use(Field);

//Vue.component(Button.name, Button);
// Vue.component(Search.name, Search);
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
  Vuex
}).$mount('#app')
