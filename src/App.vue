<template>
	<div id="app" :class="{mobile: isMobile}" ref="app">
		<!-- <Header /> -->
		<!-- <keep-alive> -->
		<router-view/>
		<!-- </keep-alive> -->
		<Footer />
	</div>
</template>
<script>
import {mapState, mapGetters} from "vuex";
import Header from '@/components/public/header';
import Footer from '@/components/public/footer';

export default {
	name: 'App',
	data() {
		return {
			isMobile: false
		}
	},
	computed: {
		...mapState({
			isAndroid: state => state.publicInfo.isAndroid,
			isiOS: state => state.publicInfo.isiOS,
			device: state => state.publicInfo.device,
		})
	},
	watch: {
		// 检测路由变化时 scroolTop 转回顶部
		'$route':function(to,from){
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
		}
	},
	components: {
		Header,
		Footer,
	},
	created() {
		this.$nextTick(() => {
			// window.onresize = () => {  
			// 	// 是否是手机
			// 	this.ifmobile();
			// } 
			// // 是否是手机
			// this.ifmobile();
		});
	},
	methods: {
		// 是否是手机
		ifmobile() {
			if(this.isAndroid || this.isiOS) {
				this.isMobile = true;
			}else {
				this.isMobile = false;
			}
		}
	}
}
</script>

<style>
#app{
	
}

</style>
