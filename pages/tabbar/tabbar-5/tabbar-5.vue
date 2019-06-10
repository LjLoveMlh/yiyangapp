<template>
	<view class="bg-white">
		<!-- 个人信息 顶部 -->
		<view class="top_bg" style="background-image: url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);">
			
		</view>
		<!-- 状态栏填充 -->
		<view class="nav_bar"></view>
		<!-- 导航栏 -->
		<view class="cu-bar  search">
			<view></view>
			<view class="content text-white text-df text-bold">
				个人中心
			</view>
			<view class="action" @tap="goToPageMySetup">
				<view class="imageHelp">
					<image src="/static/img/navbar/setting.png"></image>
				</view>
			</view>
		</view>

		<view class="wrap_top  ">
			<!-- 用户信息卡片 -->
			<selfUserCard  :datalist='userCenterData.userInfo' />

			<!-- 层叠卡片 -->
			<selfUserOverCard :datalist='userCenterData.overCard' />
		</view>

		<!--功能面板2行4列-->
		<selfUserFunList :datalist='userCenterData.funList' />


	</view>
</template>

<script>
	// 用户信息卡片组件
	import selfUserCard from '@/components/selfUserCard.vue'

	// 层叠卡片组件
	import selfUserOverCard from '@/components/selfUserOverCard.vue'

	// 功能列表组件
	import selfUserFunList from '@/components/selfUserFunList.vue'
	export default {
		components: {
			selfUserCard,
			selfUserOverCard,
			selfUserFunList
		},
		data() {
			return {
				userCenterData: []
			}
		},
		methods: {
			// 初始化数据请求	
			initRequestData(_self) {
				var _self = _self
				_self.getUserCenterData(_self);
			},

			// 请求用户中心所有数据
			getUserCenterData(_self) {
				this.uniFly.get({
					url: 'userCenterData',
					params: null
				}).then(function(response) {
					// console.log(response)
					_self.userCenterData = response.data.data.userCenterData
				}).catch(function(error) {
					// console.log(error)
				});
			},
			
			
			
			goToPageMySetup(){
				uni.navigateTo({
					url:'/pages/tabbar-5-detail/pageMySetUp/pageMySetUp'
				})
			}

		},
		onLoad() {
			var _self = this
			// 初始化数据请求
			_self.initRequestData(_self)
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #fff;

		// 头部整体
		.top_bg {
			// background: red;
			position: absolute;
			border-radius: 0 0 10% 10%;
			height: 350upx;
			width: 100%;
		}

		// 状态栏填充 
		.nav_bar {
			position: sticky;
			top: 0;
			height: var(--status-bar-height);
			background-color: transparent;

		}


		.wrap_top {
			position: relative;
			padding-bottom: 80upx;

			width: 100%;

		}

		.lx_auto {
			margin: auto;
			width: 86upx;
			height: 86upx;

			image {
				width: 100%;
				height: 100%;
				border-radius: 50%;
			}
		}

		.lj_margin-top-xl {
			margin-top: 10%;
		}
	}
	
	.imageHelp{
		width: 50upx;
		height: 50upx;
		image{
			width: 100%;
			height: 100%;
		}
	}
</style>
