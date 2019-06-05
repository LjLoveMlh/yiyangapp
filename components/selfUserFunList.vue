<template>
	<view class="funBg bg-white">
		<view class="cu-list grid no-border col-4 lj_margin-top-xl padding-top-lg">
			<view class="cu-item " v-for="(item,index) in datalist" :key="index" @tap="goToPage(item.text)">
				<view class="cu-avatar xl round lx_auto">
					<image :src="item.icon"></image>

				</view>
				<view class="text-center text-sm padding-top-xs">{{item.text}}</view>
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

		name: "selfUserFunList",
		props: {
			datalist: {
				type: Array,
				default: () => []
			}
		},
		created() {

		},
		methods: {
			goToPage(e) {

				switch (e) {
					case '我的文章':
						uni.navigateTo({
							url: '/pages/tabbar-5-detail/pageMyMyArtilcle/pageMyMyArtilcle'
						})
						break;
					case '我的评论':
						uni.navigateTo({
							url: '/pages/tabbar-5-detail/pageMyMyComment/pageMyMyComment'
						})
						break;
					case '我的点赞':
						uni.navigateTo({
							url: '/pages/tabbar-5-detail/selfMyMyThumb/selfMyMyThumb'
						})
						break;
					case '我的爆料':
						uni.navigateTo({
							url: '/pages/tabbar-5-detail/pageMyBHL/pageMyBHL'
						})
						break;
					case '邀请有利':
						uni.navigateTo({
							url: '/pages/tabbar-5-detail/pageMyInvite/pageMyInvite'
						})
						break;
					case '我要赚钱':
						uni.navigateTo({
							url: '/pages/tabbar-5-detail/pageMyEarnMoney/pageMyEarnMoney'
						})
						break;
					case '联系客服':
						uni.navigateTo({
							url: '/pages/tabbar-5-detail/pageMyService/pageMyService'
						})
						break;
					case '关于我们':
						uni.navigateTo({
							url: '/pages/tabbar-5-detail/pageMyAbout/pageMyAbout'
						})
				}
			}

		}
	}
</script>

<style lang="scss">
	.funBg {
		height: 100%;

		.lx_auto {
			margin: auto;
			width: 86upx;
			height: 86upx;

			image {
				width: 100%;
				height: 100%;
				border-radius: 50%;
			}
		}

		.lj_margin-top-xl {
			margin-top: 15%;
		}
	}
</style>
