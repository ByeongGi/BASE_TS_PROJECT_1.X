import Vue from 'vue';
import App from './application/app.vue';
import Header from './application/header.vue';
import Footer from './application/footer.vue';
import router from "./router";
import store from "./store";

Vue.component('app-header', Header );
Vue.component('app-footer', Footer );
Vue.component('app', App); 

const app: Vue = new Vue({
    store,
    router 
}).$mount('#app');
           