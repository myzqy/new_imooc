const head = 'http://cloud.globalvillage.biz';
const airmapOper = head + '/airmapOper/';
const dqcCms = head + '/dqcCms/';

export default {
    getAirAndWeather: airmapOper + 'web/air/getAirAndWeather', // 获取空气与天气信息
	getAirRank: airmapOper + 'web/air/getAirRank', // 获取空气排名

	// 资讯
	getNewsList: dqcCms + 'news/list', // 获取资讯列表
	getNewsDetail: dqcCms + 'news/get', // 获取资讯详情
}
