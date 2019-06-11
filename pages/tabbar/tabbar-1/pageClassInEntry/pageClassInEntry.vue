<template>
	<view>
		<view class="line"></view>
		<!-- 筛选栏目 -->
		<view class="filNavAll bg-white flex justify-between align-center  padding-lr-lg text-sm solid-bottom">
			<view class="flex align-center" :class="[flagMultple?'text-red':'']" @tap="funFiltMultiple">
				综合
				<view class="LJZongheCuIcon  cuIcon-triangledownfill margin-left-xs " :class="[flagMultple?'text-red':'text-gray']">
				</view>
			</view>
			<view class="flex align-center" :class="[flagAfterTicket?'text-red':'']" @tap="funFiltAfterTicket">
				券后价
				<view class="RightTrangle margin-left-xs ">
					<view class="trangleTop cuIcon-triangleupfill" :class="[flagAfterTicket&&flagAfterTicketUp?'text-red':'text-gray']">
					</view>
					<view class="trangleBottom cuIcon-triangledownfill" :class="[flagAfterTicket&&!flagAfterTicketUp?'text-red':'text-gray']">
					</view>
				</view>
			</view>
			<view class="flex align-center" :class="[flagSales?'text-red':'']" @tap="funFiltSales">
				销量
				<view class="RightTrangle margin-left-xs ">
					<view class="trangleTop  cuIcon-triangleupfill text-xs" :class="[flagSales&&flagSalesUp?'text-red':'text-gray']">
					</view>
					<view class="trangleBottom cuIcon-triangledownfill text-xs" :class="[flagSales&&!flagSalesUp?'text-red':'text-gray']">
					</view>
				</view>
			</view>
			<view class="flex align-center text-xl" @tap="funFiltListPic">
				<view :class="[flagListPic?'cuIcon-list':'cuIcon-cascades']"> </view>
			</view>
		</view>
		<!-- 综合隐藏的部分 -->
		<view class="maskAll" v-show="flagMultipleMask" @touchmove.stop.prevent="moveHandle">
			<view class="bg-white ljMultipleMask">
				<view class="ljMultiList padding-left">
					<block v-for="(item,index) in multipleList" :key='index'>
						<view class="padding-tb-sm" :data-index='index' :data-text='item' :class="[index==curMultiIndex?'text-red':'text-gray']"
						 @tap="chooseMultiItem"> {{item}}</view>
					</block>
				</view>
			</view>
			<view class="maskAllBottom" @tap.stop="funCloseMask"></view>
		</view>
		<!-- 内容列表 列表样式 -->
		<view class="ljProductListList" v-if="flagListPic">
			<block v-for="(item,index) in 10" :key='index'>
				<view class="ljProductItemList flex padding-lr-sm">
					<view class="list_itemLeft padding-sm">
						<view class="imgHelp">
							<image mode="aspectFill" src="https://img.alicdn.com/bao/uploaded/i3/2075384612/O1CN01XZ44O41jwLBgqNaAg_!!0-item_pic.jpg"></image>
						</view>
					</view>
					<view class="list_itemRight padding-tb-sm">
						<view class="list_itmeTitle  ">
							<text class="ljCutag ">
								天猫</text>
							自信仅仅是相信自己，相信自己是相信人的力量的力量的力量的力量如此说人的一生其实就是这么简单。
						</view>
						<view class='list_itemCenter padding-bottom'>
							<view class="padding-bottom-sm">
								<text class="text-df text-bold text-red">￥7.9</text>
								<text class="text-gray text-sm margin-left-xs">
									天猫价￥12.9</text></view>
							<view class="text-gray text-sm">已售 1.53万</view>
						</view>
						<view class="LJcuTicket bg-red">
							<view class="">5元券</view>
						</view>
					</view>
				</view>
			</block>
		</view>
		<!-- 内容列表 图文样式 -->
		<view class="ljProductListPic bg-gray" v-if="!flagListPic">
			<!-- 瀑布流，每行两个item 自动向下 -->
			<block v-for="(item,index) in 20" :key='index'>
				<view class="ljProductItemPic bg-white">
					<view class="picItemImg">
						<image mode="aspectFill" src="https://img.alicdn.com/bao/uploaded/i3/2075384612/O1CN01XZ44O41jwLBgqNaAg_!!0-item_pic.jpg"></image>
					</view>
					<view class="pic_list_itemRight padding-sm">
						<view class="pic_list_itmeTitle  ">
							<text class="pic_ljCutag ">
								天猫</text>
							自信仅仅是相信自己，相信自己是相信人的力量的力量的力量的力量如此说人的一生其实就是这么简单。
						</view>
						<view class='pic_list_itemCenter padding-tb-sm'>
							<view class="">
								<text class="text-df text-bold text-red">￥7.9</text>
								<text class="ljThorwPrice text-gray text-sm margin-left-xs">
									￥12.9</text></view>
							<view class="text-gray text-sm">已售 1.53万</view>
						</view>
						<view class="pic_LJcuTicket bg-red">
							<view class="">5元券</view>
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
				isOneCondition: true,
				flagMultple: true,
				flagAfterTicket: false,
				flagAfterTicketUp: false,
				flagSales: false,
				flagSalesUp: false,
				flagListPic: false,
				flagMultipleMask: false,
				multipleList: ['综合排序', '优惠券面值由高到低', '优惠券面值由低到高', '预估收益由高到低'],
				curMultiIndex: 0,
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
			},
			// 筛选
			//综合
			funFiltMultiple() {
				this.flagAfterTicket = false;
				this.flagSales = false;
				this.flagMultple = true;
				this.flagMultipleMask = !this.flagMultipleMask;
			},
			// 券后价
			funFiltAfterTicket() {
				this.removeAllTapStyle();
				this.flagAfterTicket = true;
				this.flagAfterTicketUp = !this.flagAfterTicketUp
			},
			// 销量
			funFiltSales() {
				this.removeAllTapStyle();
				this.flagSales = true;
				this.flagSalesUp = !this.flagSalesUp;
			},
			// 图文列表转化
			funFiltListPic() {
				// this.removeAllTapStyle();
				this.flagListPic = !this.flagListPic;
			},
			// 清除所有效果
			removeAllTapStyle() {
				this.flagMultple = false;
				this.flagAfterTicket = false;
				this.flagSales = false;
				this.flagMultipleMask = false;
				// this.flagListPic = false;
			},
			// 综合Item 点击事件
			chooseMultiItem(e) {
				this.curMultiIndex = e.currentTarget.dataset.index;
				this.flagMultipleMask = false;
			},

			// 关闭蒙层

			funCloseMask() {

				this.flagMultipleMask = false;

			},
			// 解决蒙层滚动问题
			moveHandle() {
				return;
			}

		},
		onLoad(options) {
			this.initData(options.title);
			// console.log(options)
		},
	}
</script>

<style lang="scss" scoped="">
	page {
		height: 100%;
	}
// 遮罩层
	.maskAll {
		position: absolute;
		left: 0px;
		right: 0px;
		top: 70upx;
		height: 100%;
		z-index: 1;

		.ljMultipleMask {
			z-index: 1;
		}

		.maskAllBottom {
			height: 100%;
			background-color: #000;
			opacity: 0.6;
		}
	}
	// 筛选框
	.filNavAll {
		position: sticky;
		top: 0px;
		padding-top: 20upx;
		padding-bottom: 20upx;
		z-index: 2;
		.LJZongheCuIcon {
			font-size: 28upx;
		}
		.RightTrangle {
			font-size: 28upx;
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-top: -14upx;
			.trangleTop {
				width: 15upx;
				height: 15upx;
			}
			.trangleBottom {
				width: 15upx;
				height: 15upx;
				margin-top: -4upx;
			}
		}

	}
	// 产品列表，列表样式
	.ljProductListList {
		.ljProductItemList {

			.list_itemLeft {
				.imgHelp {
					width: 250upx;
					height: 250upx;

					image {
						width: 100%;
						height: 100%;
						border-radius: 4upx;
					}
				}


			}

			.list_itemRight {
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				.list_itemCenter {
					display: flex;
					flex-direction: column;
					justify-content: space-between;

				}

				.list_itmeTitle {
					overflow: hidden;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					line-clamp: 2;
					height: 83upx;
					text-overflow: clip !important;

					.ljCutag {
						padding: 1upx 4upx;
						padding-top: 4upx;
						color: #f43f3b;
						font-weight: bold;
						border-radius: 1upx;
						font-size: 20upx;
						margin-left: 4upx;
						margin-right: 8upx;
						margin-top: 0px !important;
						border: 0.01upx solid #f43f3b;
					}
				}

				.LJcuTicket {
					font-size: 20upx;
					width: 80upx;
					border-radius: 2upx;
					padding: 4upx;

					view {
						margin: auto;
						text-align: center;
					}
				}
			}
		}
	}



	// 产品列表 图文样式

	.ljProductListPic {

		display: flex;
		flex-direction: row;
		flex-wrap: wrap;

		.ljProductItemPic {
			margin: auto;
			margin-top: 20upx;
			width: 48%;

			.picItemImg {
				width: 100%;
				height: 350upx;

				image {
					width: 100%;
					height: 100%;
				}
			}

			.pic_list_itemRight {
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				.pic_list_itemCenter {
					display: flex;
					flex-direction: column;
					justify-content: space-between;

					.ljThorwPrice {
						text-decoration: line-through;
					}
				}

				.pic_list_itmeTitle {
					overflow: hidden;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					line-clamp: 2;
					height: 83upx;
					text-overflow: clip !important;

					.pic_ljCutag {
						padding: 1upx 4upx;
						padding-top: 4upx;
						color: #f43f3b;
						font-weight: bold;
						border-radius: 1upx;
						font-size: 20upx;
						margin-left: 4upx;
						margin-right: 8upx;
						margin-top: 0px !important;
						border: 0.01upx solid #f43f3b;
					}
				}

				.pic_LJcuTicket {
					font-size: 20upx;
					width: 80upx;
					border-radius: 2upx;
					padding: 4upx;

					view {
						margin: auto;
						text-align: center;
					}
				}
			}
		}
	}
</style>
