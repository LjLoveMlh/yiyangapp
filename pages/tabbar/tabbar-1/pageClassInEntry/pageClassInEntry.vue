<template>
	<view>
		<!-- 筛选栏目 -->
		<view class="flex justify-around align-center  padding-lr-lg">
			<view class="flex align-center">
				综合 <view class="cuIcon-triangledownfill"> </view>
			</view>
			<view class="flex align-center">
				券后价 
				<view class="RightTrangle">
					<view class="cuIcon-triangleupfill"> </view>
					<view class="cuIcon-triangledownfill"> </view>
				</view>
			</view>
			<view class="flex align-center">
				销量
				<view class="RightTrangle">
					<view class="cuIcon-triangleupfill"> </view>
					<view class="cuIcon-triangledownfill"> </view>
				</view>
			</view>
			<view class="flex align-center">
				<view class="cuIcon-list"> </view>
				<!-- <view class="cuIcon-cascades"> </view> -->
			</view>
		</view>

		<!-- 内容列表 -->
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
			initData(title) {
				this.setNavgatBar(title);
			},
			setNavgatBar(title) {
				uni.setNavigationBarTitle({
					title: title
				});
			}
		},
		onLoad(options) {
			this.initData(options.title);
			// console.log(options)
		},

	}
</script>

<style lang="scss" scoped="">
.RightTrangle{
	height: 40upx;
	border: 2px solid red;
}
</style>
