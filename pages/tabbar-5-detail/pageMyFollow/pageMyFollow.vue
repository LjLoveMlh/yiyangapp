<template>
	<view class="bg-gray">
		<!-- 关注类型Tab -->
		<scroll-view scroll-x class="bg-white nav  padding-lr-sm" :scroll-left="scrollLeft" scroll-with-animation>
			<view class=" ljCuItemFather text-sm">
				<view class=" ljCuItem" :class="index==TabCur?'bg-red':'bg-gray'" v-for="(item,index) in articleTabList" :key="index"
				 @tap="tabSelect" :data-id="index">
					{{item}}
				</view>
			</view>
		</scroll-view>


		<!-- 关注列表 -->

		<view class="articleList ">
			<block v-for="(item,index) in 10">
				<view class="articleItem margin-top-sm  margin-lr-sm shadow padding-tb-sm padding-left-xs padding-right-sm bg-white  flex">
					<view class="itemLeft ">
						<view class="imgHelp ">
							<image mode='aspectFill' src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg"></image>
						</view>
					</view>
					<view class="itemRight  ">

						<view class="flex-sub rightBottm ">
							<view class="">
								<text class="text-black text-bold">哆嗦的卡卡西</text>
								<text class="ljCUtag  text-gray solids radius  ">用户</text>
							</view>
							<view class="cuIcon-notice_forbid_fill text-gray ljCenterText"> | 爆料 文章</view>
						</view>
						<view class="flex-sub text-black flex align-end">
							<!-- <view class="rightText"></view> -->
							<view class=" text-sm text-gray">60文章 0爆料 154评论</view>
						</view>

					</view>
					<view class="itemEnd">
						<view class="cuIcon-moreandroid text-gray" @tap="funMoreOptions"></view>
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
				// 导航条
				TabCur: 0,
				scrollLeft: 0,
				articleTabList: ['全部', '话题', '达人', '分类', '品牌', '商品', '关键词', '商城'],
			};
		},
		methods: {
			// 导航条
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
			funMoreOptions(){
				uni.showToast({
					title:'点击生效'
				})
			}
		}
	}
</script>

<style lang="scss" scoped="">
	.ljCuItemFather {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-top: 4upx;
		margin-right: 20upx;

		.ljCuItem {
			margin: 14upx 10upx;
			height: 50upx;
			padding: 4upx 20upx;
			display: flex;
			align-items: center;
			border-radius: 4upx;
		}
	}


	// 关注列表
	.articleItem {
		display: flex;
		flex-direction: row;

		.itemLeft {
			flex: 2.34;

			.imgHelp {
				width: 120upx;
				height: 120upx;
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
			flex: 7;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			width: 96%;

			.rightBottm {
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				.ljCUtag {
					margin-left: 40upx;
					padding:6upx 14upx;
					font-size: 20upx;
				}
				.ljCenterText{
					margin-top: 4upx;
					font-size: 18upx;
					
				}
			}

			// .rightText {
			// 	font-size: 24upx;
			// 	font-weight: bold;
			// }
		}

		.itemEnd {
			flex: 1;
			display: flex;
			align-items: center;
			font-size: 40rpx;
		}
	}
</style>
