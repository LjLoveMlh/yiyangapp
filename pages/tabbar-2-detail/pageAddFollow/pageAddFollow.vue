<template>
	<view>

		<!-- 搜索框 -->
		<selfFollowSearchBar />

		<!-- 话题推荐 -->

		<!-- 话题推荐标题 -->
		<view class="cu-bar margin-top ">
			<view class="action">
				<text class=" text-black text-bold">话题推荐</text>
			</view>
		</view>
		<!-- 话题推荐滑块 -->
		<selfFollowTopicRecom :datalist='topicRecomList' />

		<!-- 关注推荐列表 -->
		<view class="ljcard-menu bg-white margin-top margin-lr-xs">
			<!-- 关注推荐标题 -->
			<view class="cu-bar  ">
				<view class="action">
					<text class=" text-black text-bold">推荐关注</text>
				</view>
			</view>
			<!--关注推荐内容 -->
			<selfFollowUserRecom :datalist='userRecomList' />

		</view>


	</view>
</template>

<script>
	// 搜索框组件
	import selfFollowSearchBar from '@/components/selfFollowSearchBar.vue'
	// 话题推荐组件
	import selfFollowTopicRecom from '@/components/selfFollowTopicRecom.vue'
	// 关注推荐组件
	import selfFollowUserRecom from '@/components/selfFollowUserRecom.vue'
	export default {
		components: { //2注册组件
			selfFollowSearchBar,
			selfFollowTopicRecom,
			selfFollowUserRecom
		},
		data() {
			return {
				scrollLeft: 0,
				topicRecomList: [],
				userRecomList: []
			};
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},

			// 初始化数据请求	
			initRequestData(_self) {

				var _self = _self
				_self.getTopicRecomList(_self);
				_self.getUserRecomList(_self);

			},

			// 请求话题推荐数据
			getTopicRecomList(_self) {
				this.uniFly.get({
					url: 'topicRecomList',
					params: null
				}).then(function(response) {
					// console.log(response)
					_self.topicRecomList = response.data.data.topicRecomList
				}).catch(function(error) {
					// console.log(error)
				});
			},

			// 请求关注推荐数据
			getUserRecomList(_self) {
				this.uniFly.get({
					url: 'userRecomList',
					params: null
				}).then(function(response) {
					// console.log(response)
					_self.userRecomList = response.data.data.userRecomList
				}).catch(function(error) {
					// console.log(error)
				});
			},
		},
		onLoad() {

			var _self = this
			// 初始化数据请求
			_self.initRequestData(_self)

		}
	}
</script>

<style lang="scss" scoped="">
	// 搜索框


	// 话题推荐



	// 关注推荐
	.ljcard-menu {
		// margin-right: 15upx;
		// margin-left: 15upx;
		border-radius: 4upx
	}
</style>
