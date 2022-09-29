import Vue from 'vue';
import VueRouter from 'vue-router';

window.Vue = require('vue');

Vue.use(VueRouter)

// Importing App component
import App from './views/App';
import router from './router.js';

const app = new Vue({
    el: '#root',
    render: h => h(App), // Show App when Vue starts
    router 
});