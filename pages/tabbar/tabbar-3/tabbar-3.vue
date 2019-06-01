<template>
	<view class="bg-white ">

		<!-- 轮播图 -->
		<selfAdertise class='margin-bottom-sm' :datalist='swiperList'></selfAdertise>



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
