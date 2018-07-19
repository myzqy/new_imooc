<template>
	<header id="header">
		<div class="container">
			<img id="LOGO" :src="LOGO"/>
		</div>
	</header>
</template>

<script>
export default {
	name: 'Header',
  	data() {
    	return {
			LOGO: require('../../assets/images/public/logo.png')
		}
	},
	created() {

	},
	methods: {
		
	}


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../../assets/less/var.less';

#header {
	
}

#LOGO{
	position: absolute;
	top:30px;
	left: 30px;
	z-index: 5;
	width: 50px;
}
</style>
