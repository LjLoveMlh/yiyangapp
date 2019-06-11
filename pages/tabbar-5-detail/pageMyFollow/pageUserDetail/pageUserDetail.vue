<template>
	<view class="bg-gray">
		<!-- 状态栏 -->
		<view class="nav_bar"></view>

		<!-- 导航栏 -->
		<view class="reNav_bar padding-lr-sm flex justify-between bg-white   solid-bottom ">
			<view class="barLeft flex  padding-tb-sm  align-center">
				<text class=" margin-left-xs ljtext-xl text-bold cuIcon-back_android " @tap="goBack"> </text>
				<view class="margin-left ljtext-xl text-black">Ta的主页</view>
			</view>
			<view class="barRight flex  justify-between padding-tb-sm  text-lg align-center text-black">
				<view class="margin-right-sm">已关注</view>
			</view>
		</view>


		<!-- 用户信息 -->
		<view class="usreInfoAll padding-tb-lg bg-white">
			<view class="userInfoTop">
				<view class="padding ljTagHelp ">
					<view class="usreAvatar ">
						<image mode="aspectFill" src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg">
						</image>
						<view class="pic-zi">
							<image class="lj_tag_vip" src="/static/img/vip/vip_red.png">
							</image>
						</view>
					</view>
				</view>
				<view class="userRight padding-tb">
					<view class="RightNickName  flex align-center">
						<view class="text-bold text-lg ">眼角眉梢-格格</view>
						<view class='Ljcu-tag bg-black margin-left-sm'>LV25</view>
						<view class="cuIcon-activity margin-left-sm"></view>
					</view>
					<view class="RightDesrc">什么值得买生活家</view>
				</view>
			</view>
			<view class=" userInfoBottom">
				<view class="flex  ">
					<view>关注<text class="margin-left-sm">0</text></view>
					<view class="margin-left-xl">粉丝 <text class="margin-left-sm">0</text></view>
				</view>
				<view class="flex justify-between margin-top-sm">
					<view class="cuIcon-album"> <text class="margin-left-sm">1K</text></view>
					<view class="cuIcon-album"> <text class="margin-left-sm">12k</text></view>
					<view class="cuIcon-album"> <text class="margin-left-sm">2k</text></view>
				</view>
			</view>
		</view>


		<!-- 导航条-->
		<scroll-view scroll-x class="bg-white nav solid-bottom padding-lr-sm ljStcky" :scroll-left="scrollLeft"
		 scroll-with-animation>
			<view class=" ljCuItemFather text-sm">
				<view class="nav_list text-center" :class="index==TabCur?'text-red':''" v-for="(item,index) in articleTabList" :key="index"
				 @tap="tabSelect" :data-id="index">
					<view :class="index==TabCur?'text-red':'text-black'">{{item.text}}</view>
					<view :class="[index==TabCur?'text-red':'text-gray',index==0&&index!=TabCur&&'text-black']">{{item.num}}</view>
				</view>
			</view>
		</scroll-view>



		<!-- 内容 由于swiper在手机上并不能显示出来，暂且 不弄-->
		<view class="bg-gray">
			<block v-for='(item,index) in 10' :key='index'>
				<view class="margin-top-sm bg-white">
					<view class="sm_userInfoTop">
						<view class="padding sm_ljTagHelp ">
							<view class="sm_usreAvatar ">
								<image mode="aspectFill" src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg">
								</image>
								<!-- <view class="sm_pic-zi">
									<image class="sm_lj_tag_vip" src="/static/img/vip/vip_red.png">
									</image>
								</view> -->
							</view>
						</view>
						<view class="sm_userRight padding-tb">
							<view class="sm_RightNickName  flex align-center justify-between">
								<view class="text-bold  ">眼角眉梢-格格</view>
								<view class="text-gray padding-right">05-30</view>
							</view>
							<view class="sm_RightDesrc">发布了文章</view>
						</view>
					</view>
					<view class="padding-bottom-xl">
						<view class="sm_userBottom margin-right solid shadow">
							<view class="article_img">
								<image mode="aspectFill" src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg"></image>
							</view>
							<view class="article_text padding-sm text-black">
								虽然不推荐使用HTML标签，但实际上如果开发者写了div等标签，也
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
				articleTabList: [{
						text: '全部',
						num: "动态"
					},
					{
						text: '文章',
						num: 72
					}, {
						text: '讨论',
						num: 72
					}, {
						text: '百科',
						num: 72
					}, {
						text: '评论',
						num: 72
					}, {
						text: '轻晒单',
						num: 72
					}, {
						text: '文章',
						num: 72
					}
				]
			};
		},
		methods: {

			goBack() {
				uni.navigateBack({

				})
			},
			// 导航条
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
		}
	}
</script>
<style lang="scss" scoped="">
	// 状态栏-=
	.nav_bar {
		position: sticky;
		top: 0;
		height: var(--status-bar-height);
		background: #fff;
		z-index: 9999;
	}

	.reNav_bar {
		position: sticky;
		top:var(--status-bar-height);
		z-index: 1;
		height: 88upx;
		.ljtext-xl {
			font-size: 40upx;
		}
	}

	// 用户信息卡片
	.usreInfoAll {
		display: flex;
		flex-direction: column;

		.userInfoBottom {
			margin-left: 180upx;
			width: 50%;
		}

		.userInfoTop {
			display: flex;
			flex-direction: row;

			.Ljcu-tag {
				color: #fff;
				padding: 2upx 8upx;
				border-radius: 4upx;
				font-size: 24upx;
				display: flex;
				align-items: center;
			}

			.usreAvatar {
				width: 110upx;
				height: 110upx;
				position: relative;

				image {
					width: 100%;
					height: 100%;
					border-radius: 50%;
				}

				.pic-zi {
					position: absolute;
					right: -2upx;
					bottom: -8upx;
					font-size: 38upx;
					color: orange;

					.lj_tag_vip {
						width: 40upx;
						height: 40upx;
				
						border: 2upx solid white;
						border-radius: 50%;
					}

				}
			}

			.userRight {
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				.RightDesrc {
					font-size: 26upx;
				}
			}
		}
	}
	// 导航条、
	.ljStcky {
		position: sticky;
		top:calc(var(--status-bar-height) + 44px);
		z-index: 1;
	}

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




	// 内容部分
	.sm_userInfoTop {
		display: flex;
		flex-direction: row;

		.sm_Ljcu-tag {
			color: #fff;
			padding: 2upx 8upx;
			border-radius: 4upx;
			font-size: 24upx;
			display: flex;
			align-items: center;
		}

		.sm_usreAvatar {
			width: 84upx;
			height: 84upx;
			position: relative;

			image {
				width: 100%;
				height: 100%;
				border-radius: 50%;
			}

			.sm_pic-zi {
				position: absolute;
				right: -2upx;
				bottom: -8upx;
				font-size: 38upx;
				color: orange;

				.sm_lj_tag_vip {

					width: 40upx;
					height: 40upx;
					z-index: 1;
					border: 2upx solid white;
					border-radius: 50%;
				}

			}
		}

		.sm_userRight {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			width: 100%;

			.sm_RightDesrc {
				font-size: 24upx;
			}

			.sm_RightNickName {
				width: 100%;
			}
		}
	}

	.sm_userBottom {
		margin-top: 5upx;
		margin-left: 145upx;
		box-shadow: 2upx 3upx 1upx #ccc;
		border-radius: 4upx;

		.article_img {
			width: 100%;
			height: 220upx;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.article_text {}
	}
</style>
