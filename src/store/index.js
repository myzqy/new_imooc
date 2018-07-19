import Vue from 'vue'
import Vuex from 'vuex';

import publicInfo from './modules/public/public_info'; // 公用数据

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		publicInfo,
	}
})
