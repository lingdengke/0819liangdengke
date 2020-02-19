import Vue from 'vue'
import 'lib-flexible/flexible'
import App from './App.vue'
import router from './router'
import { Button } from 'mint-ui';

Vue.component(Button.name, Button);
// Vue.component(Search.name, Search);
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
