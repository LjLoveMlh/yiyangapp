<template>
	<view class="bg-gray">
		<!-- 		<view class="wrap-top"> -->
		<!-- 顶部分类入口 -->
		<selfTopClassThum :datalist='topClassThumbList'></selfTopClassThum>
		<!-- 系统通知，消息推送，（发帖入口组件） -->
		<view class="padding-tb-xs bg-white ">
			<selfPostingEntry :datalist='messageTypeList' />
		</view>
		<!-- 评论内容及原文 -->
		<view class="margin-top-xs">
			<messageUser :datalist="usrCommonList" />
		</view>
	</view>
</template>

<script>
	// 顶部分类入口
	import selfTopClassThum from "@/components/selfTopClassThum.vue"

	//通知列表入口，发帖入口
	import selfPostingEntry from "@/components/selfPostingEntry.vue"


	// 用户文章评论列表
	import messageUser from "@/components/messageUser.vue"
	export default {
		components: {
			messageUser,
			selfPostingEntry,
			selfTopClassThum
		},

		data() {
			return {
				//消息通知入口
				messageTypeList: [],
				// 用户评论数据
				usrCommonList: [],
				//顶部分类入口 
				topClassThumbList: [],
			}
		},
		methods: {
			// 初始化数据请求	
			initRequestData(_self) {
				var _self = _self
				_self.getMessageTypeList(_self);
				_self.getUsrCommonList(_self);
				_self.getTopClassThumbList(_self);
			},

			// 获取通知列表入口
			getMessageTypeList(_self) {
				this.uniFly.get({
					url: 'messageTypeList',
					params: null
				}).then(function(response) {
					// console.log(response)
					_self.messageTypeList = response.data.data.messageTypeList
				}).catch(function(error) {
					// console.log(error)
				});
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
			// 获取顶部分类入口数据
			getTopClassThumbList(_self) {
				this.uniFly.get({
					url: 'topClassThumbList',
					params: null
				}).then(function(response) {
					// console.log(response)
					_self.topClassThumbList = response.data.data.topClassThumbList
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
			width: 35upx;
			height: 35upx;
			z-index: 1;
			border: 2upx solid white;
			border-radius: 50%;
		}
	}
</style>
