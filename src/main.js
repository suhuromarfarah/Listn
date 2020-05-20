import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import VueYouTubeEmbed from 'vue-youtube-embed'
import AnimatedVue from 'animated-vue'
import 'animate.css/animate.css'


Vue.use(AnimatedVue)
Vue.use(VueYouTubeEmbed),{
  global: true
}
Vue.config.productionTip = false
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

