<template>
	<view>
		<!-- 状态栏填充 -->
		<view class="nav_bar bg-red"></view>
		<view class="bg-red padding padding-tb-lg">
			<view class="text-xl cuIcon-close ljClose"  @tap="goBack"></view>
			<view class="flex justify-between margin-top align-end ">
				<view class="lj_text-xxl text-bold">{{datalist.one}}</view>
				<view class="text align-end"   @tap="goToPageUserReg(datalist.second)">{{datalist.second}}</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		name: "selfCommonLRHeader",
		props: {
			datalist: {
				type: Object,
				default: () => {}
			}
		},
		created() {

		},
		methods: {
			goBack() {
				uni.navigateBack({

				})
			},
			goToPageUserReg(e) {
				
				if (e != null) {
					uni.navigateTo({
						url: '/pages/commonPage/pageUserLogin/pageUserLoginBYAP/pageUserLoginBYAP'
					})
				}
			}

		}
	}
</script>

<style lang="scss" scoped="">
	
	
	.lj_text-xxl{
		font-size: 60upx; 
	}
	// 状态栏填充 
	.nav_bar {
		position: sticky;
		top: 0;
		height: var(--status-bar-height);
		background-color: transparent;
	}
	.ljClose{
		width: 80upx;
	}
</style>
