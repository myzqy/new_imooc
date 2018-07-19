<template>
	<div class="lazy-img" :class="{imgNoBg}" @click="handleClick" :style="{height: imgHeight}">

		<img v-if="!imgMiddle" class="img" ref="box" v-lazy="url" :alt="alt" :style="{width: imgWidth}">

		<!-- 图片保持居中 -->
		<img v-if="imgMiddle"
			class="img img-middle"
			ref="box" v-lazy="url" :alt="alt"
			:style="{
				width: imgWidth,
				height: imgHeight
			}"
		>

		<!-- 图片数据 -->
		<!-- :class="{show: loaded}" -->
		<div class="img-info" v-if="loaded">
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Img',
	props: {
		imgNoBg: '',// 图片不是背景图
		url: '', // 图片链接
		alt: '', // 图片说明
		name: '', // 跳转链接的name
		link: '', // 跳转链接
		imgWidth: '', // 图片高度
		imgHeight: '', // 图片高度
		imgMiddle: false, // 图片保持居中
		screenMiddle : {}, // 居中样式  一般可设置 height
	},
  	data() {
    	return {
			loaded: false
		}
	},
	created() {
		this.$nextTick(() => {
			// 加载完毕回调
			this.loadedBack();
		})
	},
	methods: {
		// 加载完毕回调
		loadedBack() {
			this.time = setInterval(() => {
				if(this.$refs.box && this.$refs.box.attributes['lazy'] && this.$refs.box.attributes['lazy'].value === 'loaded'){
					clearInterval(this.time);
					this.loaded = true;
				}
			}, 100);
		},

		// 点击
		handleClick() {
			// 有name 跳转页面
			this.name && this.$router.push({name: this.name});

			// 有link 跳转页面
			this.link && window.open(this.link);

			// 回调
			this.$emit('clickBack', this.url, this.name, this.alt);
		}
	}
}
</script>

<style scoped lang="less">
@import '../../assets/less/var.less';

.lazy-img{
	overflow: hidden;
	position: relative;
	min-width: @pageWidth;
	box-sizing: border-box;
	&.imgNoBg{
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column-reverse;
		.img-info{
			position: static;
			height: auto;
			padding-bottom: 50px;
		}
		&.small-info{
			.img-info{
				padding-bottom: 30px;
				p{
					padding-top: 20px;
					line-height: 36px;
				}
			}

		}
	}
}



.img{
	display: block;
	width: 100%;
	margin: 0 auto;
}
.img-info{
    position: relative;
    z-index: 2;
	box-sizing: border-box;
}

// 图片保持居中
.img-middle{
	position: relative;
	left: 50%;
	width: 1920px;
	height: 800px;
	margin-left: -960px;
}

/* 信息居中 */
.img-info-middle{
	.img-info{
		display: flex;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		color:#fff;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
        span{
            font-size: 18px;
        }
        .on-the-left{
            text-align: left;
        }
	}
}
// 深色背景
.dark-img{
	.img-info{
        span{
            color: #fff;
        }
    }
}


@media screen and (max-width: 720px) {
    .lazy-img{
		min-width: inherit;
	}
	
}
</style>
