import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from './http/http'
// import 'vue-ydui/dist/ydui.base.css';
// import YDUI from 'vue-ydui'; 
// import 'vue-ydui/dist/ydui.px.css';
// Vue.use(YDUI);
Vue.prototype.$axios = axios;
// 动态设置publicPath,模板中 window.resourceBaseUrl为最终结果（模板中一定要配置好window.resourceBaseUrl的值）
// 也可以将这串代码注释掉通过修改webpack.prod.conf文件中的publicPath来实现同样的效果

__webpack_public_path__ = window.resourceBaseUrl;
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
