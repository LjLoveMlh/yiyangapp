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



		<!-- 发帖入口 -->
		<selfPostingEntry :datalist='postingEntryList'></selfPostingEntry>

	</view>
</template>

<script>
	// 轮播图
	import selfAdertise from '@/components/selfAdertise.vue';
	// 发帖功能入口列表
	import selfPostingEntry from '@/components/selfPostingEntry.vue';

	export default {
		components: { //2注册组件
			selfAdertise,
			selfPostingEntry
		},
		data() {
			return {
				active: false,
				swiperList: [],
				postingEntryList: []
			};
		},

		onLoad() {
			var _self = this
			// 初始化数据请求
			_self.initRequestData(_self);
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
			
			// 获取发帖功能入口列表
			getPostingEntryList(_self) {
				this.uniFly.get({
					url: 'postingEntryList',
					params: null
				}).then(function(response) {
					// console.log(response)
					_self.postingEntryList = response.data.data.postingEntryList
				}).catch(function(error) {
					// console.log(error)
				});
			},

			// 初始化数据请求	
			initRequestData(_self) {
				var _self = _self
				_self.getAdv(_self);
				_self.getPostingEntryList(_self);
			},
		}
	};
</script>

<style lang="scss" scoped>
	// 后来
</style>
