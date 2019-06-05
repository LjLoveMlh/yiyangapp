<template>
	<view>
			<!-- 底部登录按钮 -->
	<view class="ljBottomButton  ">
		<view class=" ljButtHelp flex justify-center bg-grey text-white text-center">
			登录
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

<style lang="scss">
// 底部按钮
	.ljBottomButton {
		left: 0;
		right: 0;
		font-size: 28upx;
		position: fixed;
		bottom: 0;
		display: flex;
		width: 100%;
		height: 44px;
		.ljButtHelp {
			width: 100%;
			height: 100%;
			background-color: #ccc;
			// opacity: 0.35;
		}

	}
</style>
