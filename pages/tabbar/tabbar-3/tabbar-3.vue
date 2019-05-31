<template>
	<view class="bg-white ">
		<!-- <view class="content" :class="{'active':active}"> -->
		<!-- 		<image class="logo" :class="{'active':active}" src="../../../static/logo.png" mode="aspectFit"></image>
		<view class="tabbar-box-wrap">
			<view class="tabbar-box">
				<view class="tabbar-box-item" @click="goToPage('/pages/tabbar-3-detial/tabbar-3-release/tabbar-3-release')">
					<image class="box-image" src="../../../static/img/release.png" mode="aspectFit"></image>
					<text class="explain">发图文</text>
				</view>
				<view class="tabbar-box-item" @click="goToPage('/pages/tabbar-3-detial/tabbar-3-video/tabbar-3-video')">
					<image class="box-image" src="../../../static/img/video.png" mode="aspectFit"></image>
					<text class="explain">发视频</text>
				</view>
				<view class="tabbar-box-item" @click="goToPage('/pages/tabbar-3-detial/tabbar-3-qa/tabbar-3-qa')">
					<image class="box-image" src="../../../static/img/qa.png" mode="aspectFit"></image>
					<text class="explain">提问</text>
				</view>
			</view>
		</view> -->


		<!-- 轮播图 -->
		<selfAdertise :datalist='swiperList'></selfAdertise>

		<view class="wrap">
			<view class=" wrap_p">
				<view class="wrap-f border_bt ">
					<view class="wrap_pic">
						<view class="text-center pic-fu">
							<img src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg" alt="" />
						</view>
					</view>
					<view class="pic-mess" style="border-bottom:0.5upx solid   #F8F8F8;">
						<view class="mess-t "> 爆好价</view>
						<view class="mess-b">电商促销信息</view>
						<view class="cuIcon-right go_on">
						</view>
					</view>
				</view>
			</view>
			<view class="wrap_p">
				<view class="wrap-f ">
					<view class="wrap_pic">
						<view class="text-center pic-fu">
							<img src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg" alt="" />
						</view>
					</view>
					<view class="pic-mess">
						<view class="mess-t "> 写文章</view>
						<view class="mess-b">评测，经验，清单</view>
						<view class="cuIcon-right go_on">
						</view>
					</view>
				</view>
			</view>

		</view>

	</view>
</template>

<script>
	// 轮播图
	import selfAdertise from '@/components/selfAdertise.vue';


	export default {
		components: { //2注册组件
			selfAdertise
		},
		data() {
			return {
				active: false,
				swiperList:[]
			};
		},

		onLoad() {
			var _self = this
			// 初始化数据请求
			_self.initRequestData(_self)
		},
		onShow() {
			// setTimeout(() => {
			this.active = true;
			// }, 500);
		},
		onHide() {
			this.active = false;
		},
		methods: {
			// 获取轮播图
			getAdv(_self) {
				this.uniFly.get({
					url: 'social_adv',
					params: null
				}).then(function(response) {
					// console.log(response)
					_self.swiperList = response.data.data.swiperList
				}).catch(function(error) {
					// console.log(error)
				});
			},
			goToPage(url) {
				if (!url) return;
				uni.navigateTo({
					url
				});
			},
			// 初始化数据请求	
			initRequestData(_self) {
				var _self = _self
				_self.getAdv(_self);
			},
		}
	};
</script>

<style lang="scss" scoped>

// 	.content {
// 		display: flex;
// 		align-items: center;
// 		justify-content: center;
// 		width: 100%;
// 		/* #ifdef H5 */
// 		height: calc(100vh - var(--window-bottom) - var(--window-top));
// 		/* #endif */
// 		/* #ifndef H5 */
// 		height: 100vh;
// 		/* #endif */
// 		transition: opacity 0.3s;
// 		background: #999;
// 		opacity: 0;
// 
// 		&.active {
// 			opacity: 1;
// 		}
// 
// 		.logo {
// 			position: relative;
// 			margin-top: -400upx;
// 			width: 200upx;
// 			height: 200upx;
// 			// z-index: -1;
// 			opacity: 0;
// 			transition: opacity 0.3s;
// 
// 			&.active {
// 				opacity: 1;
// 			}
// 		}
// 	}
// 
// 	.tabbar-box-wrap {
// 		position: absolute;
// 		width: 100%;
// 		padding: 50upx;
// 		box-sizing: border-box;
// 		bottom: 0;
// 		left: 0;
// 
// 		.tabbar-box {
// 			position: relative;
// 			display: flex;
// 			width: 100%;
// 			background: #fff;
// 			border-radius: 20upx;
// 			padding: 15upx 20upx;
// 			box-sizing: border-box;
// 			z-index: 2;
// 			box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, 0.1);
// 
// 			&:after {
// 				content: '';
// 				position: absolute;
// 				bottom: -16upx;
// 				left: 0;
// 				right: 0;
// 				margin: auto;
// 				width: 50upx;
// 				height: 50upx;
// 				transform: rotate(45deg);
// 				background: #fff;
// 				z-index: 1;
// 				box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.1);
// 				border-radius: 2px;
// 			}
// 
// 			&:before {
// 				content: '';
// 				position: absolute;
// 				top: 0;
// 				left: 0;
// 				width: 100%;
// 				height: 100%;
// 				background: #ffffff;
// 				border-radius: 20upx;
// 				z-index: 2;
// 			}
// 
// 			.tabbar-box-item {
// 				// position: relative;
// 				width: 100%;
// 				z-index: 3;
// 				margin: 10upx;
// 				color: $uni-color-subtitle;
// 				text-align: center;
// 				font-size: $uni-font-size-base;
// 
// 				.box-image {
// 					width: 100%;
// 					height: $uni-img-size-lg;
// 				}
// 			}
// 		}
// 	}
// 



	// 后来
	.wrap {
		background-color: white;

		.wrap_p {
			padding: 10upx 30upx;

			.border_bt {
				padding: 10upx 0upx;
			}
		}

		.wrap_pic {
			display: inline-block;
			width: 16%;
		}

		.pic-fu {

			width: 100upx;
			height: 100upx;

			border-radius: 50%;
			background-color: #D6D6D6;
			vertical-align: bottom;

			img {
				width: 100%;
				height: 100%;
				border-radius: 50%;
			}
		}
		.pic-mess {
			position: relative;
			display: inline-block;
			margin-left: 20upx;
			vertical-align: bottom;
			width: 81%;
			padding: 16upx;
			.go_on {
				position: absolute;
				right: 0upx;
				top: 30upx;
			}
			.mess-t {
				font-weight: bold;

			}
			.mess-b {
				color: #D6D6D6;
			}
		}


	}
</style>
