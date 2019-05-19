// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入全局css
import '../static/css/global.css'

Vue.config.productionTip = false
//引入mint-ui
import Mint from 'mint-ui'
//全局使用
Vue.use(Mint)
//引入css
import 'mint-ui/lib/style.css'

//引入自己的插件安装器
// import Installer from '../plugins/installer';
// Vue.use(Installer);

//全局组件
import MyUl from './components/common/MyUl';
Vue.component(MyUl.name,MyUl)
import MyLi from './components/common/MyLi';
Vue.component(MyLi.name,MyLi)
import NavBar from './components/common/NavBar';
Vue.component(NavBar.name,NavBar)



import Axios from 'axios';
//挂载到原型上使用
Vue.prototype.$axios = Axios;
Axios.defaults.baseURL = 'https://locally.uieee.com/';

//定义全局过滤器，先npm i moent库在引入
import Moment from 'moment';
Vue.filter('convertTime',function(data,formatStr){
    return Moment(data).format(formatStr)
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
