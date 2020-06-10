import Vue from 'vue'
import VueSwal from 'vue-swal'
import router from './router'
import App from './App.vue'

// BottstrapVueの読み込み
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// axiosの読み込み
import axios from 'axios'
import VueAxios from 'vue-axios'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.use(VueSwal)

// axisの仕様
Vue.use(BootstrapVue)
Vue.use(VueAxios, axios)

// BootstrapVueの使用
Vue.use(BootstrapVue)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
