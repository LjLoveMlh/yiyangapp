<template>
	<view>
		<block v-for="(userItem,userIndex) in userArticleList" :key="userIndex">
			<userArticleItem :datalist="userItem" />
		</block>

	</view>
</template>

<script>
	// 用户文章
	import userArticleItem from '@/components/userArticleItem.vue'
	export default {
		components: {
			userArticleItem
		},
		data() {
			return {
				// 导航卡下面的所有数据
				userArticleList: []
			};
		},
		methods: {
			// 初始化数据请求	
			initRequestData(_self) {
				var _self = _self
				_self.getUserArticleList(_self);
			},

			// 请求某nav下用户文章
			getUserArticleList(_self) {
				this.uniFly.get({
					url: 'userArticleList',
					params: null
				}).then(function(response) {
					// console.log(response)
					_self.userArticleList = response.data.data.userArticleList
				}).catch(function(error) {
					// console.log(error)
				});
			},
		},

		onLoad(e) {
			var _self = this
			// 初始化数据请求
			_self.initRequestData(_self)



		},

	}
</script>

<style lang="scss">

</style>
