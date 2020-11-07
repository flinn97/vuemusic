import Vue from 'vue'
import App from './App.vue'
import router from './router'
import piano from './piano.js'
import violin from './violin.js'
import drums from './drums.js'
import Students from './Students.js'

let data = {
	piano_teachers: piano,
	drum_teachers: drums,
	Violin_teachers: violin,
	Students: Students,
	cart: [],
}

Vue.config.productionTip = false

new Vue({
  data,
  router,
  render: h => h(App)
}).$mount('#app')
