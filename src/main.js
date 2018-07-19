import Vue from 'vue';
import App from './App';
import router from './router'; // 路由
import store from './store'; // vuex 状态管理
import VueLazyload from 'vue-lazyload'; // 引入这个懒加载插件
import '@/assets/js/filter'; // 全局过滤器
import '@/assets/less/style.less';

Vue.config.productionTip = false;
Vue.prototype.$store = store;

// 使用懒加载
Vue.use(VueLazyload, {
	preLoad: 2,
	// loading: require('@/assets/images/public/photo_bg.jpg')
});

//修改title
Vue.directive('title', {
    inserted: function (el) {
        document.title = el.innerText
        el.remove();
    }
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
	router,
	store,
    components: { App },
    template: '<App/>',
});
