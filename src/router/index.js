import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

/*
* 主要页面
*/
const Home = resolve => require(['@/pages/main/home.vue'], resolve); // 首页

const head = '/work_website/';

// 路由
export default new Router({
	mode: 'history',
    routes: [
		/****** 首页 ******/
		{
			path: '/',
			name: 'Path',
			component: Home
		},
		{
			path: head,
			name: 'Path',
			component: Home
		},
		{
			path: head + 'home',
			name: 'Home',
			component: Home
		},
    ],
});
