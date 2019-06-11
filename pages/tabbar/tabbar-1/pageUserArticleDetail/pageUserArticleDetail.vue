<template>
	<view>
		<!-- 状态栏 -->
		<view class="nav_bar"></view>
		
		<!-- 渐变导航栏 -->
		
				<!-- 导航栏 -->
		<view class="reNav_bar padding-lr-sm flex justify-between bg-white   solid-bottom ">
			<view class="barLeft flex  padding-tb-sm  align-center">
				<text class=" margin-left-xs ljtext-xl text-bold cuIcon-back_android " @tap="goBack"> </text>
				<view class="margin-left ljtext-xl text-black">Ta的主页</view>
			</view>
			<view class="barRight flex  justify-between padding-tb-sm  text-lg align-center text-black">
				<view class="margin-right-sm">已关注</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped>
	// 状态栏-=
	.nav_bar {
		position: sticky;
		top: 0;
		height: var(--status-bar-height);
		background: #fff;
		z-index: 9999;
	}
	
	
	.reNav_bar {
		position: sticky;
		top:var(--status-bar-height);
		z-index: 1;
		height: 88upx;
		.ljtext-xl {
			font-size: 40upx;
		}
	}
</style>
