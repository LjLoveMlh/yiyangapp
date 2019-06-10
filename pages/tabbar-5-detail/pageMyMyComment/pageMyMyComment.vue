<template>
	<view class="bg-gray">
		<!-- 评论内容及原文 -->
		<view class="margin-top-xs">
			<messageUser :datalist="usrCommonList" />
		</view>
	</view>
</template>

<script>
	// 用户文章评论列表
	import messageUser from "@/components/messageUser.vue"
	export default {
		components: {
			messageUser
		},
		data() {
			return {
				// 用户评论数据
				usrCommonList: [],
			};
		},
		methods: {
			// 初始化数据请求	
			initRequestData(_self) {
				var _self = _self
				_self.getUsrCommonList(_self);
			},



			// 获取用户评论数据
			getUsrCommonList(_self) {
				this.uniFly.get({
					url: 'usrCommonList',
					params: null
				}).then(function(response) {
					// console.log(response)
					_self.usrCommonList = response.data.data.usrCommonList
				}).catch(function(error) {
					// console.log(error)
				});
			},

		},
		onLoad() {
			var _self = this
			// 初始化数据请求
			_self.initRequestData(_self);
		}
	}
</script>

<style lang="scss">

</style>
