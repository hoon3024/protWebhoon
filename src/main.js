import Vue from 'vue'
import App from './App.vue'
import VueScrollactive from 'vue-scrollactive'
import ScrollAnimation from './directives/scrollanimation'


Vue.use(VueScrollactive)
Vue.directive('scrollanimation', ScrollAnimation);


new Vue({
    el: '#app',
    render: h => h(App)
})