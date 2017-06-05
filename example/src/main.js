import Vue from 'vue'
import App from './App.vue'
import Flash from 'module-template-vue'

Vue.use(Flash);

new Vue({
  	el: '#app',
  	render: h => h(App)
})
