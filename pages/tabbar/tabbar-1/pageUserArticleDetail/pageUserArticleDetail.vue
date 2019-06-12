<template>
	<view class="bg-gray">
		<!-- 状态栏 -->
		<view class="nav_bar"></view>
		<!-- 渐变导航栏 -->
		<!-- 导航栏 -->
		<view class="reNav_bar padding-lr-sm flex justify-between bg-white   solid-bottom ">
			<view class="barLeft flex  padding-tb-sm  align-center">
				<text class=" margin-left-xs text-bold text-black cuIcon-back_android " @tap="goBack"> </text>
			</view>
			<view class="barRight flex  justify-between padding-tb-sm   align-center text-black">
				<view class="margin-right-sm text-black cuIcon-moreandroid"></view>
			</view>
		</view>
		<!-- 文章图片部分  此处有透明 有被覆盖 不是很理解-->
		<!-- 临时填充 -->
		<view class="imgHelp">
			<image mode="aspectFill" src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg"></image>
		</view>

		<!-- 文章主体部分 -->
		<view class="articleMain bg-white">
			<!-- 内容标题加用户信息，标签 -->
			<view class="articMainTop padding">
				<view class="">
					<text class="cu-tag sm ljCutag bg-red margin-bottom-sm">精选</text>
					<text class="margin-left-xs text-xl text-bold">长城电脑长城电脑长城电脑长城电脑长城电脑长城电脑</text>
				</view>
				<view class="ljArticlePrice margin-tb-sm text-red ">232.56包邮 （需用券）</view>
				<view class="flex align-center">
					<view class="userAvatarHelp">
						<image mode="aspectFill" src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg"></image>
					</view>
					<view class="margin-left-xs text-sm text-gray">五月阿信 | 京东</view>
				</view>
				<view class="ljLate margin-top-lg ">30日内最低价</view>
			</view>
			<!-- 内容中间部分文章标题，内容 -->
			<view class="padding-lr">
				<!-- 标题 -->
				<view class="text-bold text-df">OLED面板，X1 UItimate芯片，荧幕声场。</view>
				<!-- 内容 -->
				<view class="ljArticleContent">
					晨钟暮鼓，催促我扬起远航的风帆，心却如一枚留恋故枝的叶子，踟蹰在昨日的风中，依依难从我做起舍。也知道不该贻误行程，却又无法摆脱情感的羁绊，无法将曾经有过的一切尘封在记忆的城堡中，重生日锁紧，每天走过日落月升，仿佛伫立于清澈的河流中，那清清的河水就是我拥有而且仅仅拥有一次的生命啊，我却有太多的时候是立在水中，任凭上游
					的水流过 我之后成为下游的水，任凭未来流经我的现在成为过去，我却因为过分沉迷于昨天而失去了今天和明天，于是一无所有。
					常常想象，当春华和秋实都成为历史之后，我披满头雪花坐在昨天的记忆中，咀嚼脸上每一道沟壑所深藏 的故事，该 是一种怎样
					的心境！本该是懂得很多便相信得很少，却依然一次次为“狼来了”的戏言所惑；本该是走过冬天更钟情于春天，却依然留恋“雪孩子”的童话。走过的路程似乎是一个圆，长途跋涉后又回到起点。于是很多时候是在做相同的事，就是寻找目标
				</view>
			</view>
			<!-- 广告展示 -->
			<view class="padding-lr margin-top-lg">
				<view class="adverHelp">
					<image mode="aspectFill" src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg"></image>
				</view>
			</view>
			<!-- 订单截图 -->
			<view class="margin-top-lg">
				<view class="cu-bar ">
					<view class="action">
						<text class=" text-black text-bold">订单截图</text>
					</view>
				</view>
				<!-- 截图 -->
				<view class="orderCutPicMain solid margin-left">
					<view class="orderCutPic ">
						<image mode="aspectFit" src="http://i8.hexunimg.cn/2013-02-03/150889748.jpg"></image>
					</view>
					<view class="cutPicMask text-center">查看原图</view>
				</view>
			</view>
			<!-- 发布时间，举报 -->
			<view class="padding-lr flex align-center justify-between margin-top-lg">
				<view class="text-sm text-gray">18:31发布 | 56分钟前自动检测 价格有效</view>
				<view class="text-red cuIcon-notice text-sm">
					<text class="margin-left-xs text-sm"> 优惠举报</text>
				</view>
			</view>
			<!-- 文章收录 -->
			<view class="margin-top-lg margin-bottom">
				<view class="cu-bar ">
					<view class="action">
						<text class=" text-black text-bold">本文收录在</text>
					</view>
				</view>
				<view class="margin-left  flex align-center">
					<view class="cu-capsule round bg-gray ">
						<view class='cu-tag '>
							<view class="Ljpadding-xs text-bold bg-white round">
								<text class='text-red cuIcon-shop'></text>
							</view>
						</view>
						<view class="ljRightText  text-df">
							京东
						</view>
					</view>
					<view class="margin-left-sm">
						<view class=" cu-capsule round bg-gray ">
							<view class='cu-tag '>
								<view class="Ljpadding-xs text-bold bg-white round">
									<text class='text-red cuIcon-cascades'></text>
								</view>
							</view>
							<view class="ljRightText  text-df">
								电烤箱
							</view>
						</view>
					</view>
					<view class="margin-left-sm">
						<view class="cu-capsule round bg-gray ">
							<view class='cu-tag '>
								<view class="Ljpadding-xs text-bold bg-white round">
									<text class='text-red cuIcon-tag'></text>
								</view>
							</view>
							<view class="ljRightText  text-df">
								Changdi/长帝
							</view>
						</view>

					</view>
				</view>
			</view>
			<!-- 文章末尾提示信息 -->
			<view class="margin-top-xl">
				<view class="margin-lr text-sm text-gray solid-top padding-tb-lg">好价消息来自热心值友爆料和商家自检，经小编和人工审核或小值机器人智能判断后发布。折扣价随时变化，请只有们购买前核实。</view>
			</view>
		</view>




		<!-- 信息目录 -->
		<view class="margin-top-sm padding-bottom bg-white">
			<!-- 文中商品 -->
			<view>
				<view class="cu-bar ">
					<view class="action">
						<text class=" text-black text-bold">文中商品</text>
					</view>
				</view>

				<view class="flex align-center padding-lr">
					<view>
						<view class="menu_productImg">
							<image mode="aspectFill" src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg"></image>
						</view>
					</view>
					<view class="margin-left-sm menu_right_center">
						<view class="text-bold text-black menu_pro_title padding-bottom-xs">长城电脑长城电脑长城电脑长城电脑最后结束</view>
						<view class="text-gray text-sm padding-top-xs">22历史好价 | 2文章</view>
					</view>
					<view class="">
						<view class="cu-tag round bg-red ">降价提醒</view>
					</view>
				</view>
			</view>

			<!-- 爆料人 -->
			<view class="margin-top-lg">
				<view class="cu-bar ">
					<view class="action">
						<text class=" text-black text-bold">爆料人</text>
					</view>
				</view>

				<view class="flex align-center padding-lr">
					<view>
						<view class="sm_menu_productImg">
							<image mode="aspectFill" src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg"></image>
						</view>
					</view>
					<view class="margin-left-sm sm_menu_right_center">
						<view class="text-bold text-black sm_menu_pro_title padding-bottom-xs flex">
							五月阿信 <view class="cu-tag sm bg-black text-xs margin-left-sm">LV80</view>
						</view>
						<view class="text-gray text-sm padding-top-xs">8827 爆料 | 1651 粉丝</view>
					</view>
					<view class="flex align-center ">
						<view class="cu-tag lj round line-red padding-lr">打赏</view>

						<view class="margin-left-sm cu-tag lj round bg-red">
							<text class=" cuIcon-add margin-top-xs"></text>关注
						</view>
					</view>
				</view>
			</view>
		</view>


		<!-- 评论区 -->
		<view class="margin-top-sm bg-white">
			<!-- 评论 标题 -->

			<view class="cu-bar ">
				<view class="action">
					<text class=" text-black text-bold">评论（3）</text>
				</view>
			</view>

			<!-- 评论列表 -->
			<view class="">
				<block v-for="(item,index) in 3" :key='index'>
					<!-- 单个评论项 -->
					<view class="solid-bottom padding-tb">
						<view class="margin-lr flex  ">
							<view class="">
								<view class="commentImg">
									<image mode="aspectFill" src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg"></image>
								</view>
							</view>

							<view class="margin-left-sm commentRight padding-right-xs">
								<view class="text-bold text-black flex align-center">我们家很穷
									<view class="margin-left">
										<view class=" cu-tag sm  bg-gray round text-red">认为值</view>
									</view>

								</view>

								<view class="margin-top-sm">我们治疗颈椎的名医，有意和该品牌联名出一款医疗显示器</view>

								<view class="margin-top-sm flex justify-between text-sm text-gray">
									<view>9小时前</view>
									<view>赞<text class="margin-left-xs cuIcon-appreciate"></text></view>
								</view>
							</view>
						</view>
					</view>

				</block>
				<view class="text-gray text-df text-center padding-tb-sm">查看全部9条评论</view>
			</view>
		</view>


		<!-- 相关推荐 -->

		<view class="margin-top-sm bg-white margin-bottom-xl">
			<!-- 推荐标题 -->
			<view class="cu-bar ">
				<view class="action">
					<text class=" text-black text-bold">相关推荐</text>
				</view>
			</view>
			<!-- 推荐列表商品 -->
			<view class="articleList ">
				<block v-for="(item,index) in 10" :key='index'>
					<view class="articleItem margin-top-sm  margin-lr-sm  padding-tb-sm padding-left-xs padding-right-sm bg-white  flex">
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
										<view class="cuIcon-message margin-right-lg"><text class="margin-left-xs">12</text> </view>
										<view class="cuIcon-redpacket"><text class="margin-left-xs">100%</text> </view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</block>
			</view>
		</view>




		<!-- 底部固定操作条 -->
		<view class="ljBottomOptionBar padding-lr flex solid-top shadow align-center justify-between bg-white padding-tb-sm">
			<view class="flex  text-center">

				<view class="padding-lr ljColom">
					<view class="cuIcon-activity lj_text-lg text-black text-bold "></view>
					<view class="ljBottomMargin text-xs ">88%</view>
				</view>
				<view class="padding-lr ljColom">
					<view class="cuIcon-favor lj_text-lg text-black text-bold "></view>
					<view class="ljBottomMargin text-xs ">5</view>
				</view>
				<view class="padding-lr ljColom">
					<view class="cuIcon-share lj_text-lg text-black text-bold "></view>
					<view class="ljBottomMargin text-xs ">分享</view>
				</view>
				<view class="padding-lr ljColom">
					<view class="cuIcon-comment lj_text-lg text-black text-bold "></view>
					<view class="ljBottomMargin text-xs ">9</view>
				</view>
			</view>
			<view class="">
				<view class="ljTagBtn bg-red">直达链接</view>
			</view>
		</view>



	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			goBack() {
				uni.navigateBack({

				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		height: 100%;
		margin-bottom: 180upx;
		background-color:#eee; 
	}

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
		top: var(--status-bar-height);
		z-index: 1;
		height: 88upx;

		.barLeft {
			font-size: 45upx;
		}

		.barRight {
			font-size: 40upx;
		}
	}

	// 文章顶部图片，此处临时填充
	.imgHelp {
		width: 100%;
		height: 300upx;

		image {
			width: 100%;
			height: 100%;
		}
	}

	.articleMain {
		width: 100%;

		.articMainTop {
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			.ljCutag {
				height: 40upx;
				font-size: 24upx;
				padding: 0upx 14upx;
				padding-top: 4upx;
				padding-bottom: 4upx;
				border-radius: 4upx;
				box-sizing: border-box;
				margin-top: 4upx;

			}

			.ljArticlePrice {
				font-size: 40upx;
			}

			.userAvatarHelp {
				height: 50upx;
				width: 50upx;

				image {
					width: 100%;
					height: 100%;
					border-radius: 50%;
				}
			}

			.ljLate {
				width: 180upx;
				padding-top: 10upx;
				padding-bottom: 10upx;
				font-size: 27upx;
				color: #555;
				border: 0.5upx solid #eeeeee;
				border-radius: 2upx;
				text-align: center;
				box-shadow: 2upx 2upx 2upx #eee;
			}
		}

		.ljArticleContent {
			margin-top: 20upx;
			font-size: 30upx;
			line-height: 48upx;
		}

		.adverHelp {
			height: 250upx;
			width: 100%;

			image {
				width: 100%;
				height: 100%;
				border-radius: 8upx;
			}
		}

		.orderCutPicMain {
			position: relative;
			width: 260upx;
			height: 180upx;

			.orderCutPic {
				width: 260upx;
				height: 180upx;

				image {
					width: 100%;
					height: 100%;

				}
			}

			.cutPicMask {
				position: absolute;
				bottom: 0px;
				left: 0px;
				right: 0px;
				width: 100%;
				background-color: #555;
				opacity: 0.6;
				color: white;

			}
		}
	}




	// 收录标签

	.classTag {

		.classImgHelp {}
	}

	.Ljpadding-xs {

		padding: 8upx;
		padding-bottom: 6upx;
		text-align: center;
	}

	.ljRightText {
		margin-top: 6upx;
		padding-right: 20upx;
	}




	// 文中商品
	.menu_productImg {
		width: 86upx;
		height: 86upx;

		image {
			width: 100%;
			height: 100%;

		}
	}

	.menu_right_center {
		width: 66%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		.menu_pro_title {
			width: 83%;
			white-space: nowrap;
			overflow: hidden;
			// display: -webkit-box;

			// height: 70upx;
			text-overflow: ellipsis;
		}
	}



	//报料人
	.sm_menu_productImg {
		width: 86upx;
		height: 86upx;

		image {
			width: 100%;
			height: 100%;
			border-radius: 50%;

		}
	}

	.sm_menu_right_center {
		width: 52%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;


		.sm_menu_pro_title {
			width: 83%;
			white-space: nowrap;
			overflow: hidden;
			// display: -webkit-box;

			// height: 70upx;
			text-overflow: ellipsis;
		}
	}




	// 评论列表
	.commentImg {

		width: 70upx;
		height: 70upx;

		image {
			width: 100%;
			height: 100%;
			border-radius: 50%;

		}
	}







	// 相关推荐下的商品列表
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




	// 底部操作条
	.ljBottomOptionBar {
		position: fixed;
		bottom: 0upx;
		left: 0upx;
		right: 0upx;
		z-index: 1;
		box-shadow: 0upx -4upx 4upx #eee;
		.ljColom{
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			// border: 2px solid red;
			.ljBottomMarginP {
			   
				margin-top: 8upx;
			}
			
		}
		.lj_text-lg {
			font-size: 40upx;
		}
		.ljTagBtn {
			padding-top: 12upx;
			padding-bottom: 12upx;
			padding-left: 30upx;
			padding-right: 30upx;
			font-size: 28upx;
			border-radius: 8upx;
		}
	}
</style>
