<template>
	<div id="home">
		<div v-title>workwork 共享商务空间</div>

		<div class="web">
	
			<!-- 共享商务空间 -->
			<Img class="models-1 img-info-middle dark-img" :url="models[0].url" :imgMiddle="true" :imgHeight="'710px'">
				<div class="on-the-left">
					<h2> 
						<img :src="models[0].workwork" alt=""/>
						共享商务空间
					</h2>
					<span>———— 在工作场景中解放人 是社会进步和历史发展的必然趋势</span>
				</div>
			</Img>

			<!-- 自由共享的商务时代需求 -->
			<div class="models-2 box">
				<h5 class="title drak">自由共享的商务时代需求</h5>
				<ul>
					<li v-for="(val, key) in models[1].list" v-bind:key="key">
						<img :src="val.url" alt="">
						<h5 class="title">{{val.title}}</h5>
						<div class="info">
							<p>{{val.text}}</p>
						</div>
					</li>
				</ul>
			</div>

			<!-- WorkWork 全球化共享商务空间 -->
			<Img class="models-3 img-info-middle dark-img" :url="models[2].url" :imgMiddle="true" :imgHeight="'885px'">
				<h5 class="title">WorkWork 全球化共享商务空间</h5>
				<div class="info">
					<ul class="nav">
						<li :class="{active: val.active}" v-for="(val, key) in models[2].list" v-bind:key="key" @click="changeActive(models[2].list, key)">
							<i class="iconfont" v-html="val.icon"></i>
							<h5 class="title">{{val.title}}</h5>
						</li>
					</ul>
					<ul class="content">
						<li :class="{active: val.active}" v-for="(val, key) in models[2].list" v-bind:key="key">
							<p v-html="val.text"></p>
							<img :src="val.url" alt="">
						</li>
					</ul>
				</div>
			</Img>

			<!-- 新的一天 -->
			<div class="models-4 box">
				<h5 class="title drak">新的一天</h5>
				<ul class="new-day">
					<li :class="{even: key % 2}" v-for="(val, key) in models[3].list" v-bind:key="key">
						<div class="info">
							<h5 class="title drak">{{val.title}}</h5>
							<p v-html="val.text"></p>
						</div>
						<img :src="val.url" alt=""/>
					</li>
				</ul>
			</div>
		</div>

		<!-- 移动端 -->
		<div class="mobile">
			<!-- 共享商务空间 -->
			<Img class="models-1 img-info-middle dark-img" :url="models[0].mobileUrl" :imgWidth="'100%'">
				<img class="logo" :src="models[0].logo" alt="">
				<div class="on-the-left">
					<h2>
						<img :src="models[0].workwork" alt=""/>
						共享商务空间
					</h2>
					<span>在工作场景中解放人 是社会进步和历史发展的必然趋势</span>
				</div>
			</Img>

			<!-- 自由共享的商务时代需求 -->
			<div class="models-2 box">
				<h5 class="title drak">自由共享的商务时代需求</h5>
				<ul>
					<li v-for="(val, key) in models[1].list" v-bind:key="key">
						<img :src="val.mobileUrl" alt="">
						<h5 class="title">{{val.title}}</h5>
					</li>
				</ul>
			</div>

			<!-- WorkWork 全球化共享商务空间 -->
			<div class="mobile-workWork">
				<h5 class="title">WorkWork 全球化共享商务空间</h5>

				<!-- 菜单列表 -->
				<ul class="nav-list">
					<li :class="{active: val.active}" v-for="(val, key) in models[2].list" v-bind:key="key" @click="changeActive(models[2].list, key)">
						<h5>{{val.title}}</h5>
					</li>
				</ul>

				<!-- 数据列表 -->
				<ul class="info-list">
					<li :class="{active: val.active}" v-for="(val, key) in models[2].list" v-bind:key="key">
						<p v-html="val.text"></p>
						<img :src="val.url" alt="">
					</li>
				</ul>
			</div>

			<!-- 新的一天 -->
			<div class="models-4 box">
				<h5 class="title drak">新的一天</h5>
				<ul class="new-day">
					<li :class="{even: key % 2}" v-for="(val, key) in models[3].list" v-bind:key="key">
						<div class="info">
							<h5 class="title drak">{{val.title}}</h5>
							<p v-html="val.text"></p>
						</div>
						<img :src="val.mobileUrl" alt=""/>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex';
import Img from '@/components/image/image.vue';
export default {
	name: 'Home',
	components: {
		Img
	},
	computed: {
		...mapState({
			isAndroid: state => state.publicInfo.isAndroid,
			isiOS: state => state.publicInfo.isiOS,
		})
	},
  	data() {
    	return {
			webOrH5: '',
			models: [{
				url: require('../../assets/images/home/home_0001.jpg'),
				mobileUrl: require('../../assets/images/home/home_mobile_0001.jpg'),
				logo: require('../../assets/images/public/logo.png'),
				workwork: require('../../assets/images/public/workwork.png'),
			},{
				list: [{
					title: '全球化',
					text: '随着分工和协作的全球化，每个商业活动参与者都需具备整合全球资源的能力。未来，工作的关键不是在哪里做，而是怎么做。',
					url: require('../../assets/images/home/home_0002.jpg'),
					mobileUrl: require('../../assets/images/home/home_mobile_0002.jpg')
				},{
					title: '移动化',
					text: '现代的职业者正在走出传统的格子间，打破朝九晚五的局限，自由地选择自己的工作场所，越来越多的处在在路上的状态。',
					url: require('../../assets/images/home/home_0002.jpg'),
					mobileUrl: require('../../assets/images/home/home_mobile_0002.jpg')
				},{
					title: '共享化',
					text: '共享模式在经济领域中广泛应用，消费者已有开放共享意识，办公、商务领域存在巨大的存量资源，但还没有产品实现商务空间的有效共享。',
					url: require('../../assets/images/home/home_0002.jpg'),
					mobileUrl: require('../../assets/images/home/home_mobile_0002.jpg')
				}]
			},{
				url: require('../../assets/images/home/home_0003.jpg'),
				list: [{
					icon: '&#xe60a;',
					title: '即用即走',
					text: '全球第一个共享商务空间，首创“即用即走”的共享商务模式，让每个人在任何时间和地点都能快速找到灵感迸发的空间。',
					url: require('../../assets/images/home/home_0003_1.png'),
					active: true
				},{
					icon: '&#xe609;',
					title: '链接方式',
					text: '打破现代人的孤岛式生活、工作状态，以空间为入口链接不同的个体、思维和资源，成为每个用户链接世界的最新场景。',
					url: require('../../assets/images/home/home_0003_1.png'),
					active: false
				},{
					icon: '&#xe608;',
					title: '商务革命',
					text: 'work work不仅在全球范围内的各个城市角落提供专业、创新的商务空间，更创造一种全新的未来工作、生活方式和理念，引领一场商务革命。',
					url: require('../../assets/images/home/home_0003_1.png'),
					active: false
				}]
			},{
				list: [{
					title: '旅游景区 6:00',
					text: '移步workwork，与中国、美国等地的同事发起一场工作会议，然后继续欣赏风景。',
					url: require('../../assets/images/home/home_0004_1.png'),
					mobileUrl: require('../../assets/images/home/home_mobile_0004_1.png'),
				},{
					title: '购物中心 15:00',
					text: '在爱人试衣服的间隙，向合作伙伴约在最近的workwork，演示公司的新产品。',
					url: require('../../assets/images/home/home_0004_1.png'),
					mobileUrl: require('../../assets/images/home/home_mobile_0004_1.png'),
				},{
					title: '住宅小区 21:00',
					text: '当孩子入睡后，到小区边上的workwork寻找灵感，并影印明早即将用到的资料。',
					url: require('../../assets/images/home/home_0004_1.png'),
					mobileUrl: require('../../assets/images/home/home_mobile_0004_1.png'),
				}]
			}]
		}
	},
	created() {
		this.$nextTick(() => {
			if(this.isAndroid || this.isiOS) {
				this.webOrH5 = 'H5';
			}else {
				this.webOrH5 = 'Web';
			}
		});
	},
	methods: {
		changeActive(list, key) {
			list.map((item) => {
				item.active = false;
				return item;
			});
			list[key].active = true;
		}
	}
}
</script>

<style lang="less">
@import '../../assets/less/var.less';

#home{
	// 共享商务空间
	.models-1{
		&:before{
			position: absolute;
			top: 0;
			left: 0;
			z-index: 1;
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, .44);
			content: "";
		}
		h2{
			display: flex;
			padding-bottom: 40px;
			font-size: 40px;
			align-items: flex-end;
			white-space: nowrap;
			img{
				height: 88px;
				padding-right: 10px;
			}
			
		}
		span{
			font-size: 20px;
		}
	}

	// 自由共享的商务时代需求
	.models-2{
		height: 580px;
		ul{
			display: flex;
			padding-top: 50px;
			li{
				overflow: hidden;
				position: relative;
				margin: 0 17.5px;
				.title{
					position: absolute;
					z-index: 1;
					bottom: 0;
					width: 100%;
					height:147px;
					background-image:linear-gradient(-179deg, rgba(255,255,255,0.00) 0%, rgba(0,0,0,0.5) 65%, rgba(0, 0, 0, .88) 100%);
					font-size: 26px;
					line-height: 220px;
					text-align: center;
					transition: bottom .3s, background-image .3s;
				}
				.info{
					display: flex;
					position: absolute;
					top: 100%;
					left: 0;
					width: 100%;
					height: 100%;
					padding: 0 20px;
					box-sizing: border-box;
					background-color: rgba(0, 0, 0, 0.8);
					color: #fff;
					align-items: center;
					justify-content: center;
					flex-direction: column;
					transition: top .3s;
					p{
						padding-top: 40px;
						font-size: 18px;
						line-height: 28px;
						text-indent: 2em;
					}
				}

				&:hover{
					.title{
						bottom: 240px;
						background: linear-gradient(-179deg, rgba(255,255,255,0.00) 0%, rgba(0,0,0,0) 65%, rgba(0, 0, 0, 0) 100%);
					}
					.info{
						top: 0;
					}
				}
			}
		}
	}

	// WorkWork 全球化共享商务空间
	.models-3{
		&:before{
			position: absolute;
			top: 0;
			left: 0;
			z-index: 1;
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, .8);
			content: "";
		}
		.info{
			display: flex;
			width: 1100px;
			margin-top: 40px;
			background:#000000;
			border-radius: 8px;
			box-shadow:0 0 20px 16px rgba(0,0,0,0.44);
			.nav{
				padding:0px 50px 0px 0;
				li{
					display: flex;
					position: relative;
					width: 375px;
					height: 216px;
					margin-bottom: 25px;
					border-radius:8px;
					background-color: #333333;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					
					.iconfont{
						font-size: 90px;
					}
					.title{
						padding-top: 20px;
						color: @textThirdColor;
						font-size: 26px;
					}
					&:before{
						position: absolute;
						top: 50%;
						right: -15px;
						margin-top: -15px;
						content: '';
						.triangle-right(15px, #333333);
					}
					&:hover{
						opacity: .8;
						cursor: pointer;
					}
					&.active{
						background-color: #39bde8;
						.iconfont, .title{
							color: #000;
						}
						&:hover{
							opacity: 1;
							cursor: default;
						}
						&:before{
							.triangle-right(15px, #39bde8);
						}
					}
					&:last-child{
						margin-bottom: 0;
					}
				}
			}
			.content{
				display: flex;
				position: relative;
				width: 500px;
				height: 675px;
				margin-left: 50px;
				align-items: center;
				li{
					position: absolute;
					left: 0;
					.visibilityHide;
					p{
						color: @textThirdColor;
						font-size: 24px;
						line-height: 42px;
						text-indent: 2em;
						text-align: left;
					}
					img{
						padding-top: 60px;
					}
					&.active{
						.visibilityShow;
					}
				}
			}
		}
	}

	// 新的一天
	.models-4{
		padding: 70px 0 90px;
		.new-day{
			display: flex;
			width: 1120px;
			padding-top: 70px;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			li{
				display: flex;
				white-space: nowrap;
				.info{
					display: flex;
					width: 560px;
					padding: 0 40px;
					box-sizing: border-box;
					align-items: center;
					justify-content: center;
					white-space: normal;
					flex-direction: column;
					text-align: center;
					.title{
						font-size: 36px;
					}
					p{
						padding-top: 30px;
						color: @textSecondColor;
						font-size: 18px;
						line-height: 42px;
					}
				}
				img{
					width: 560px;
					height: 391px;
				}
				&.even{
					flex-direction: row-reverse;
				}
			}
		}
	}
}


@media screen and (max-width: 720px) {
    .web{
		display: none;
	}

	#home{
		// 共享商务空间
		.models-1{
			&::before{
				display: none;
			}
			.logo{
				width: 77px;
				margin-bottom: 50px;
			}
			h2{
				padding-bottom: 15px;
				font-size: 20px;
				img{
					height: 27px;
					padding-right: 10px;
				}
			}
			span{
				font-size: 12px;
			}
		}	

		// 自由共享的商务时代需求
		.models-2{
			height: inherit;
			padding: 25px 0;
			ul{
				width: 100%;
				padding: 15px 10px 0;
				box-sizing: border-box;
				li{
					width: 100% / 3;
					margin: 0 5px;
					img{
						width: 100%;
					}
					.title{
						display: flex;
						font-size: 14px;
						line-height: 40px;
						flex-direction: column-reverse;
					}
					&:hover{
						.title{
							bottom: 0px;
							background-image:linear-gradient(-179deg, rgba(255,255,255,0.00) 0%, rgba(0,0,0,0.5) 65%, rgba(0, 0, 0, .88) 100%);
						}
					}
				}
			}
		}

		// WorkWork 全球化共享商务空间
		.mobile-workWork{
			.title{
				background-color: #bbb;
				font-size: 16px;
				line-height: 52px;
				text-align: center;
			}
			.nav-list{
				li{
					display: inline-block;
					width: 100% / 3;
					border-right: 1px solid #000;
					background-color: #333;
					box-sizing: border-box;
					color: @textThirdColor;
					font-size: 14px;
					line-height: 44px;
					text-align: center;
					&:last-child{
						border-right: none;
					}
					&.active{
						background-color: #000;
						color: #39bde8;
					}
				}
			}
			.info-list{
				padding: 25px 15px;
				background-color: #000;
				li{
					position: absolute;
					top: 0;
					left: 0;
					height: 0;
					color: @textThirdColor;
					font-size: 12px;
					line-height: 21px;
					.visibilityHide;
					img{
						width: 100%;
						padding-top: 5px;
					}
					&.active{
						position: static;
						height: auto;
						.visibilityShow;
					}
				}
			}
		}

		// 新的一天
		.models-4{
			padding: 30px 0 40px;
			.new-day{
				width: 100%;
				padding: 15px;
				box-sizing: border-box;
				li{
					.info{
						width: 50%;
						padding: 0 20px;
						.title{
							color: @textMainColor;
							font-size: 14px;
						}
						p{
							padding-top: 10px;
							color: @textSecondColor;
							font-size: 12px;
							line-height: 18px;
						}
					}
					img{
						width: 50%;
						height: inherit;
					}
				}
			}
		}
	}
	
}


</style>

