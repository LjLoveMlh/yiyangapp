<template>
	<view>
		<view class="articleList margin-bottom-xl">
			<block v-for="(item,index) in 10">
				<view class="articleItem margin-top-sm  margin-lr-sm shadow padding-tb-sm padding-left-xs padding-right-sm bg-white  flex">
					<view class="itemLeft ">
						<view class="imgHelp ">
							<image mode='aspectFill' src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg"></image>
						</view>
					</view>
					<view class="itemRight margin-left-sm ">
						<view class="flex-sub text-black ">
							<view class="rightText">在你心头看ffdf到覅书法在你心头看ffdf到覅书法家发生的雷锋精神多了附件是</view>
						</view>
						<view class="flex-sub rightBottm ">
							<view class="text-red ">未通过</view>
							<view class="text-xs">14:02</view>
						</view>
					</view>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		name: "selfMyMyArticleArticleList",
		props: {
			// datalist: {
			// 	type: Array,
			// 	default: () => []
			// }
		},
		created() {

		},
	}
</script>

<style lang="scss" scoped="">
	// 文章列表
	.articleItem {
		// height: 250upx;
		display: flex;
		flex-direction: row;

		.itemLeft {
			flex: 1;

			.imgHelp {
				width: 190upx;
				height: 190upx;
				display: flex;
				align-items: center;
				margin-left: 10upx;

				image {
					width: 100%;
					height: 100%;
					border-radius: 6upx;
				}
			}
		}

		.itemRight {
			flex: 2.4;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			width: 96%;

			.rightBottm {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
			}

			.rightText {
				font-size: 28upx;
				overflow: hidden;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				line-clamp: 2;
				height: 80upx;
				text-overflow: clip !important;
			}
		}
	}
</style>
