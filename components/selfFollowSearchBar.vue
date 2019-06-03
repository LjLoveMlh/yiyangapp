<template>
	<view>
			<view class="ljSearchBar bg-white">
			<view class="searchBarMain  flex justify-between">
				<view class="mainLeft text-df text-gray padding-sm">
					搜索您想关注的内容
				</view>
				<view class="mainRight bg-gradual-red text-lg text-bold padding-sm text-white text-center">
					<view class="cuIcon-search "> </view>
					<!-- <image style="z-index: 1;" src="/static/img/navbar/nav_home_search@3x.png" /> -->
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
		
		name: "selfFollowSearchBar",
		props: {
		},
	}
</script>

<style lang="scss">
	.ljSearchBar {
		margin: 50upx 40upx;
		height: 70upx;
		border-radius: 8upx;

		.searchBarMain {

			.mainLeft {
				margin-left: 10upx;
				height: 100%;
				display: flex;
				align-self: center;

			}

			.mainRight {
				overflow: hidden;
				height: 70upx;
				width: 70upx;
				border-radius: 0 8upx 8upx 0;

				image {
					height: 100%;
					width: 100%;
				}


			}
		}
	}
</style>
