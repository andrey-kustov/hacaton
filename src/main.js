// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueTyperPlugin from 'vue-typer'
import router from './router'
import {store} from './store';
import BootstrapVue from 'bootstrap-vue'


import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(VueTyperPlugin);
Vue.component('v-select', vSelect);
/*шрифты fontawesome*/
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner, faEraser, faQuestion, faTimes, faBolt, faPlus, faSyncAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faSpinner,faEraser, faQuestion, faTimes, faBolt, faPlus, faSyncAlt)
Vue.component('font-awesome-icon', FontAwesomeIcon);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
/*Отладчик ошибок */
/*глобально для js*/
// window.onerror = function(message, source, line, column, error) {
//   console.log('ONE ERROR HANDLER TO RULE THEM ALL:', message);
// }
// /*для Vue.js*/
// Vue.config.errorHandler = function(err, vm, info) {
//   console.log(`Error: ${err.toString()}\nInfo: ${info}`);
// }

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
