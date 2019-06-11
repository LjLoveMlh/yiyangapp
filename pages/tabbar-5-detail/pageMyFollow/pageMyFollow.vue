<template>
	<view class="bg-gray">
		<!-- 关注类型Tab -->
		<scroll-view scroll-x class="bg-white nav shadow padding-lr-sm" :scroll-left="scrollLeft" scroll-with-animation>
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
				<view class="articleItem margin-top-sm  margin-lr-sm shadow padding-tb-sm padding-lr-sm  bg-white  flex" @tap="goToPageUserDetail">
					<view class="itemLeft ">
						<view class="imgHelp ">
							<image mode='aspectFill' src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg"></image>
						</view>
					</view>
					<view class="itemRight  ">
						<view class="flex-sub rightBottm ">
							<view class="flex align-center">
								<text class="text-black text-bold">哆嗦的卡卡西</text>
								<text class="ljCUtag   solid   ">用户</text>
							</view>
							<view class="cuIcon-notice_forbid_fill text-gray ljCenterText "> | 爆料 文章</view>
						</view>
						<view class="flex-sub text-black flex align-end">
							<!-- 空格不删除 -->
							<view class="itemRightBottom text-gray">60 文章 0 爆料 154 评论</view>
						</view>
					</view>
					<view class="itemEnd">
						<view class="cuIcon-moreandroid text-gray" :data-id="index" @tap.stop="funMoreOptions"></view>
					</view>




					<!-- 能用但是点击事件弄不好 -->
					<!-- 弹出蒙层 -->
					<!-- <block >
						<view class="grayItem" :class="[index===itemCur?'animation-fade':'']" v-show='index===itemCur' @tap.stop="itemCur=-1">
							<view class="grayItemMain  ">
								<block v-for="(item,index) in maskList" :key='index'>
									<view class="grayReItem bg-white  ">{{item}}</view>
								</block>
							</view>
						</view>
					</block> -->
				</view>
			</block>
		</view>


		<!-- 悬浮按钮 -->
		<view class="circle-float">
			<button class="cu-btn padding-tb-lg padding-lr  bg-red round  text-bold">
				<view class=" btn_add_text margin-right-xs cuIcon-add"></view>
				添加关注
			</button>
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


				isItemHidden: true,
				itemCur: -1,
				maskList: ['开启推送', '订阅设置', '取消关注']
			};
		},
		methods: {
			// 导航条
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
			funMoreOptions(e) {
				// uni.showToast({
				// 	title: '点击生效'
				// })
				this.itemCur = +e.currentTarget.dataset.id;
				console.log(this.itemCur)
				// this.isItemHidden = false;
			},

			goToPageUserDetail() {
				uni.navigateTo({
					url: '/pages/tabbar-5-detail/pageMyFollow/pageUserDetail/pageUserDetail'
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

		.grayItem {
			position: absolute;
			left: 20upx;
			right: 20upx;
			height: 160upx;
			margin-top: -20upx;
			background-color: #000;
			opacity: .6;
			border-radius: 4upx;
			display: flex;
			align-items: center;

			.grayItemMain {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				width: 100%;
				margin-left: 21%;
				margin-right: 21%;

				.grayReItem {
					width: 100upx;
					height: 100upx;
					padding-left: 16upx;
					padding-right: 16upx;
					border-radius: 50%;
					font-size: 24upx;
					display: flex;
					align-items: center;
					text-align: center;
				}
			}
		}

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
					margin-left: 24upx;
					padding: 0upx 6upx;
					font-size: 18upx;
					border-radius: 4upx;
					color: #b3b3b3;
				}

				.ljCenterText {
					margin-top: 8upx;
					font-size: 22upx;

				}
			}

			.itemRightBottom {
				font-size: 22upx;
			}
		}

		.itemEnd {
			flex: 1;
			display: flex;
			align-items: center;
			font-size: 40rpx;
		}
	}

	// 悬浮按钮
	.circle-float {
		position: fixed;
		left: 50%;
		bottom: 70rpx;
		transform: translate(-50%, -50%);
		/* 50%为自身尺寸的一半 */
		-webkit-transform: translate(-50%, -50%);

		.btn_add_text {
			font-size: 40upx;
			font-weight: bold;
		}
	}
</style>
