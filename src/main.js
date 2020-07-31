import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from './components/common/toast'
import Fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
Vue.prototype.$bus=new Vue()
Vue.use(toast)
Vue.use(VueLazyLoad,{
loading: require('./assets/img/common/placeholder.png')
})
// import Router from 'vue-router'
// const routerPush = Router.prototype.push
// Router.prototype.push = function push(location) {
//   return routerPush.call(this, location).catch(error=> error)
// }
Vue.config.productionTip = false
Fastclick.attach(document.body)
new Vue({
  router,
  store,

  render: h => h(App)
}).$mount('#app')
