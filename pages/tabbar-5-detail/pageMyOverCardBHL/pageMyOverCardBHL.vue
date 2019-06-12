<template>
	<view class="bg-gray">
		<!-- 爆料Tab -->
		<scroll-view scroll-x class="bg-white nav shadow padding-lr-sm" :scroll-left="scrollLeft" scroll-with-animation>
			<view class=" ljCuItemFather text-sm">
				<view class=" ljCuItem" :class="index==TabCur?'bg-red':'bg-gray'" v-for="(item,index) in articleTabList" :key="index"
				 @tap="tabSelect" :data-id="index">
					{{item}}
				</view>
			</view>
		</scroll-view>





		<!-- 爆料List -->
		<view class="articleList margin-bottom-xl">
			<block v-for="(item,index) in 10" :key='index'>
				<view class="articleItem margin-top-sm  margin-lr-sm shadow padding-tb-sm padding-left-xs padding-right-sm bg-white  flex">
					<view class="itemLeft ">
						<view class="imgHelp ">
							<image mode='aspectFill' src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg"></image>
						</view>
					</view>
					<view class="itemRight margin-left-sm ">
						<view class="flex-sub text-black ">
							<view class="rightText text-bold">在你心头看ffdf到覅书法在书法在你心头看覅书法家发生的雷锋精神多了附件是</view>
						</view>
						<view class="flex-sub rightBottm ">
							<view class="text-red ">147.5元 (需用券，合49元/件)</view>
							<view class="flex text-xs justify-between">
								<view class="">京东 | 18-05-27</view>
								<view class="flex">
									<view class="cuIcon-message margin-right-lg"><text class="margin-left-xs">12</text></view>
									<view class="cuIcon-redpacket"><text class="margin-left-xs">100%</text></view>
								</view>
							</view>
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
