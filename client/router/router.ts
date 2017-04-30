import Vue from "vue";
import VueRouter from 'vue-router';
import {list ,post, customList}  from '../application';
    
  
    
Vue.use(VueRouter);    
      
           
const routes = [  
    { path: '/bar', component: customList },
    { path: '/foo', component: post },
    { path: '/list', component: list }
];  

// SPA 개발시에 자체 Vue에서 제공하는 VueRouter 객체
const router: VueRouter = new VueRouter({
    routes
});                     


export default router;