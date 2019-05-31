<template>
	<view>
		<view class="wrap-top">
			<!-- 顶部分类入口 -->
			<view>
				<view class="flex solids-top  solids-bottom padding justify-between">
					<block v-for="(item,index) in iconList">
						<view class="  margin-xs radius">
							<view class="cu-item " :key="index">
								<view class="cu-avatar round solid bg-white tutu">
									<!-- <view :class="['cuIcon-' + item.icon]"> -->
									<!-- </view> -->
									<img class='topImageList' src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg" />

									<view class="cu-tag badge"></view>
								</view>

								<view class="text-center">{{item.dian}}</view>
							</view>
						</view>
					</block>
				</view>
			</view>



			<!-- 系统通知，消息推送，（发帖入口组件） -->
			<selfPostingEntry :datalist='messageTypeList' />
		</view>






		<messageUser :datalist="usrCommonList" />





	</view>





</template>

<script>
	//通知列表入口，发帖入口
	import selfPostingEntry from "@/components/selfPostingEntry.vue"


	// 用户文章评论列表
	import messageUser from "@/components/messageUser.vue"
	export default {
		components: {
			messageUser,
			selfPostingEntry
		},

		data() {
			return {
				//消息通知入口
				messageTypeList: [],
				// 用户评论数据
				usrCommonList: [],


				iconList: [{
						icon: "appreciatefill",
						dian: "点赞"
					},
					{
						icon: "group",
						dian: "粉丝"
					},
					{
						icon: "messagefill",
						dian: "评论和@"
					}
				],
				userList: [{
					user: "红尘货",
					userComment: "评论了你的文章",
					userCommentSays: "有一张3元券可以叠加，本来不想下单的，结果...",
					originText: "原文：南国 开心椰球 榴莲味 100g",
					dataTime: "1天前",
					pic: "https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png"
				}]
			}
		},
		methods: {
			// 初始化数据请求	
			initRequestData(_self) {
				var _self = _self
				_self.getMessageTypeList(_self);
				_self.getUsrCommonList(_self);
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
		},

		onLoad() {
			var _self = this
			// 初始化数据请求
			_self.initRequestData(_self);
		}
	}
</script>

<style lang="scss">
	.wrap-top {
		background-color: white;
	}

	.tutu {
		width: 100upx;
		height: 100upx;

		img {
			width: 100%;
			height: 100%;
			border-radius: 50%;
		}

	}

	.message-top {
		text-align: right;
		line-height: 80upx;

		text {
			margin-right: 16upx;
		}
	}
</style>
