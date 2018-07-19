<template>
	<footer v-if="show" id="Footer" ref="footer" >
		<ul class="contact-us">
			<li><i class="iconfont">&#xe60b;</i>workwork@workwork.top</li>
		</ul>
		<b class="address">地址:浙江省杭州市余杭区仓兴街1号创业大街6幢2楼</b>
		<strong class="copy-right"><span>©2017-2018</span> 杭州地球村创业服务有限公司 版权所有</strong>
	</footer>
</template>

<script>
export default {
	name: 'Footer',
	computed: {

	},
  	data() {
    	return {
			show: false
		}
	},
	created() {
		this.$nextTick(() => {
			setTimeout(() => {
				this.show = true;
			}, 1000)
		});
	},
	methods: {
	
	}
}
</script>

<style scoped lang="less">
@import '../../assets/less/var.less';

#Footer{
	display: flex;
	height: 170px;
	background-color: @bgColor;
	color: #fff;
	font-size: 14px;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	text-align: center;
	.contact-us{
		font-size:20px;
		color:#ffffff;
		text-align:left;
		li{
			line-height: 40px;
			.iconfont{
				padding-right: 10px;
				color: #fff;
				font-size: 26px;
			}
		}
	}
	.address{
		padding-top: 10px;
	}
	.copy-right{
		padding-top: 15px;
		color:#d8d8d8;
		font-size: 12px;
		line-height: 20px;
	}
}

@media screen and (max-width: 720px) {
    #Footer{
		width: 100%;
		height: 84px;
		font-size:12px;
		.contact-us{
			font-size:12px;
			li{
				line-height: 24px;
				.iconfont{
					padding-right: 5px;
					font-size: 15px;
				}
			}
		}
		.address{
			padding-top: 5px;
		}
		.copy-right{
			padding-top: 5px;
			font-size: 8px;
			line-height: 12px;
			span{
				font-family: Arial, Helvetica, sans-serif;
			}
		}
	}
}
</style>
