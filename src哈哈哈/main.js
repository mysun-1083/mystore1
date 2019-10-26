import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/reset.css' // reset.css
import './assets/fonts/iconfont.css' // iconfont.css
import ElementUI from 'element-ui'; // element JS
import 'element-ui/lib/theme-chalk/index.css'; // element CSS

Vue.use(ElementUI); // 注册

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
