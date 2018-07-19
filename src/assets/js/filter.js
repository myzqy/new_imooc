import Vue from 'vue';

// 获取发布时间的 时:分
Vue.filter('getPublishTime', function (time) {
	return time ? time.slice(11, 16) : '';
})
