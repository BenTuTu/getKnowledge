// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'lib-flexible'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Vuescroll from 'vuescroll'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import VCharts from 'v-charts'
import iView from 'iview';
import 'iview/dist/styles/iview.css'
import vuex from 'vuex'

Vue.use(iView)
Vue.use(vuex)
Vue.config.productionTip = false

Vue.use(elementUI);
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Vuescroll);
Vue.use(VueAwesomeSwiper);
Vue.use(VCharts);

var store = new vuex.Store({
  state: {
    currentTotalBook: 0,
    currentRead: [],
  },
  mutations: {
    add_book(state) {
      state.currentTotalBook += 1;
    },
    add_table(state) {
      state.currentRead.push({
        type: "文字",
        title: "爱上学习",
        time: "2012-6-10",
        focus: "NO",
        date: "2016-10-03"
      });
    }
  }
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})