<script>
export default {
	onLaunch: function() {
		console.log('App Launch');
		// setTimeout(() => {
		// 	uni.setTabBarBadge({
		// 		index: 1,
		// 		text: '31'
		// 	});
		// 	uni.showTabBarRedDot({
		// 		index: 3
		// 	});
		// }, 1000);
		// 
		
		
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style>
	@import "colorui/main.css";
	@import "colorui/icon.css";
	@import "colorui/animation.css";
page{
	background-color: #fff;
}

.PH_articleTitle{
		font-size: 40upx;
		font-weight: bold;
		color: #ccc;
}

/*每个页面公共css */ 
</style>
