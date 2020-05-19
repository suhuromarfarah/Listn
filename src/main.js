import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import VueYouTubeEmbed from 'vue-youtube-embed'
import Carousel3d from 'vue-carousel-3d';
Vue.use(VueYouTubeEmbed),{
  global: true
}
Vue.config.productionTip = false
Vue.use(Carousel3d);
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
