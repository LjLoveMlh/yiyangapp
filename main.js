import Vue from 'vue'
import App from './App'
// 全局都会用的请求
import uniFly from 'unifly';
uniFly.baseUrl = 'https://www.easy-mock.com/mock/5cbaae65d5d33710e0cc47aa/yiyangapp/';
// uniFly.headers.common['Authorization'] = AUTH_TOKEN;
uniFly.headers['Content-Type'] = 'application/x-www-form-urlencoded';





Vue.prototype.uniFly=uniFly



Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
