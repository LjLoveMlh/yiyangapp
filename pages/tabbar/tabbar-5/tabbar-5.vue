<template>
	<view class="bg-white">
		<!-- 个人信息 顶部 -->
		<view class="top_bg">
			<!-- 状态栏填充 -->
			<view class="nav_bar"></view>
			<!-- 导航栏 -->
			<view class="cu-bar  search">
				<view></view>
				<view class="content text-white text-df text-bold">
					个人中心
				</view>
				<view class="action">
					<text class="cuIcon-settingsfill"></text>
				</view>
			</view>

			<view class="wrap_top  ">
				<!-- 用户基本信息 -->
				<view class="cu-list menu-avatar ">
					<view class="cu-item ">
						<view class="cu-avatar round lg ljAvatar" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);background-color:transparent">
							<view class="pic-zi ">
								<image class="lj_tag_vip" src="/static/img/vip/vip_red.png">
								</image>
							</view>
						</view>
						<view class="content flex-sub text-white">
							<!-- 用户名 -->
							<view class="text-grey flex justify-between">
								<view>
									<text class="text-white text-df">败家女孩橙子</text>
									<!-- 用户标签 -->
									<view class='cu-tag ljCuTag bg-white round line-red lj_margin_left10 text-xs'>时尚达人</view>
								</view>
							</view>
							<view class="text-white lj_text-xs flex justify-between ">
								专业败家，三年资深搭配师
							</view>
						</view>
					</view>
				</view>



				<!-- 层叠卡片 -->
				<view class="LjCardHelp">
					<view class="padding-tb-sm  ljAround bg-white text-center flex  ">
						<view class="user flex-sub">
							<view class="text-bold">100</view>
							<view class="padding-top-xs text-xs ">爆料</view>
						</view>
						<view class="user flex-sub solid-left solid-right">
							<view class="text-bold">50</view>
							<view class="padding-top-xs text-xs ">关注</view>
						</view>
						<view class="user flex-sub">
							<view class="text-bold">199</view>
							<view class="padding-top-xs text-xs ">粉丝</view>
						</view>
					</view>

				</view>



			</view>


		</view>



		<!--功能面板2行4列-->

		<view class="cu-list grid no-border col-4 lj_margin-top-xl padding-top-lg">
			<view class="cu-item ljFuHelp" v-for="(item,index) in iconList" :key="index">
				<view class="cu-avatar xl round lx_auto">
					<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg"></image>

				</view>
				<view class="text-center text-sm padding-top-xs">{{item.name}}</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				iconList: [{
					icon: 'cardboardfill',


					name: '我的文章'
				}, {
					icon: 'recordfill',


					name: '我的评论'
				}, {
					icon: 'picfill',


					name: '我的点赞'
				}, {
					icon: 'noticefill',


					name: '我的爆料'
				}, {
					icon: 'upstagefill',


					name: '邀请有利'
				}, {
					icon: 'clothesfill',


					name: '我要赚钱'
				}, {
					icon: 'discoverfill',


					name: '联系客服'
				}, {
					icon: 'questionfill',


					name: '关于我们'
				}],

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	page {

		// 头部整体
		.top_bg {
			background-image: url('/static/img/user/user_bg.jpg');
			z-index: -1;
			border-radius: 0 0 10% 10%;
			height: 300upx;

			// background: linear-gradient(#2CBAF9, #04A9F4);
			.cu-list.menu-avatar>.cu-item {
				background-color: transparent !important;

			}

			.ljAvatar {
				width: 98upx;
				height: 98upx;
			}

			.lj_text-xs {
				padding-top: 4upx;
				font-size: 14upx;
			}
		}

		// 状态栏填充 
		.nav_bar {
			position: sticky;
			top: 0;
			height: var(--status-bar-height);
			background: #fff;
			z-index: 9999;

		}

		// 上面的个人信息部分
		.lj_margin_left10 {
			margin-left: 10upx;
		}

		.ljCuTag {
			font-size: 20upx;
			vertical-align: middle;
			position: relative;
			display: inline-flex;
			align-items: center;
			justify-content: center;
			box-sizing: border-box;
			padding: 0upx 16upx;
			height: 40upx;
			font-family: Helvetica Neue, Helvetica, sans-serif;
			white-space: nowrap;
		}

		.pic-zi {
			position: absolute;
			right: -2upx;
			bottom: -8upx;
			font-size: 38upx;
			color: orange;

			.lj_tag_vip {
				width: 30upx;
				height: 30upx;
				z-index: 1;
				border: 2upx solid white;
				border-radius: 50%;
			}
		}


		.wrap_top {
			position: relative;
			padding-bottom: 80upx;

			width: 100%;

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
				box-shadow: 1upx 1upx 1upx #f05b72;

				.user {
					display: inline-block;
				}

				.user_b {
					float: left;

				}

				.user_f {
					float: right;
				}
			}

		}

		.lx_auto {
			margin: auto;
			width: 86upx;
			height: 86upx;
			image{
				width: 100%;
				height: 100%;
				border-radius: 50%;
			}
		}
.lj_margin-top-xl{
	margin-top: 10%;
}
	}
</style>
