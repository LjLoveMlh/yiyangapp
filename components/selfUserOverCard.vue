<template>
	<view>
		<view class="LjCardHelp margin-top">
			<view class="padding-tb-sm  ljAround bg-white text-center flex  ">
				<view class="user flex-sub">
					<view class="text-bold">{{datalist.countLeft}}</view>
					<view class="padding-top-xs text-sm ">{{datalist.textLeft}}</view>
				</view>
				<view class="user flex-sub solid-left solid-right" @tap="goToFollowPage">
					<view class="text-bold">{{datalist.countCenter}}</view>
					<view class="padding-top-xs text-sm ">{{datalist.textCenter}}</view>
				</view>
				<view class="user flex-sub">
					<view class="text-bold">{{datalist.countRight}}</view>
					<view class="padding-top-xs text-sm ">{{datalist.textRight}}</view>
				</view>
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
		name: "selfUserOverCard",
		props: {
			datalist: {
				type: [Array,Object],
				default: () => []
			}
		},
		created() {
		
		},
		methods:{
			goToFollowPage(){
				uni.navigateTo({
					url:'/pages/tabbar-5-detail/pageMyFollow/pageMyFollow'
				})
			}
		}
	}
</script>
<style lang="scss">
	.LjCardHelp {
		position: absolute;
		width: 100%;
		
	}
	.ljAround {
		border-radius: 12upx;
		width: 93%;
		bottom: -100upx;
		border: 3upx solid #eee;
		margin: auto;
		box-shadow: 0 0.5upx 0.2upx #f5f5f5;

	}
</style>
