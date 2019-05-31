<template>
	<view>
		<view class="wrap-top">
			<view>
				<view class="flex  padding justify-between">
					<block v-for="(item,index) in iconList">
						<view class="  margin-xs radius">
							<view class="cu-item " :key="index">
								<view class="cu-avatar round solid bg-white tutu">
									<!-- <view :class="['cuIcon-' + item.icon]"> -->
									<!-- </view> -->
									<img class='topImageList' src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg" alt="" />
								</view>

								<view class="text-center">{{item.dian}}</view>
							</view>
						</view>
					</block>

					<!-- 	<view class="bg-grey padding-sm margin-xs radius">

					</view>
					<view class="bg-grey padding-sm margin-xs radius">

					</view> -->
				</view>
			</view>
			<view class="cu-list menu-avatar">
				<view class="cu-item grayscale">
					<view class="cu-avatar lg round bg-white text-gray "><img class='topImageList round' src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg" alt="" style="width:100%;height:100%;"/></view>
					<view class="content">
						<view>
							<text class="text-cut">系统通知</text>
						</view>
						<view class="text-gray text-sm flex"> <text class="text-cut">您好，欢迎使用app</text></view>
					</view>
				</view>
				<view class="cu-item grayscale">
					<view class="cu-avatar lg round bg-white text-gray "><img class='topImageList round' src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg" alt="" style="width:100%;height:100%;"/></view>
					<view class="content">
						<view>
							<text class="text-cut">推送消息</text>
						</view>
						<view class="text-gray text-sm flex"> <text class="text-cut">618，全民狂欢节</text></view>
					</view>
				</view>
			</view>
		</view>


		<messageUser :datalist="userList" />
		<messageUser :datalist="userList" />
		<messageUser :datalist="userList" />
		<messageUser :datalist="userList" />
		<messageUser :datalist="userList" />



 
	</view>





</template>

<script>
	import messageUser from "@/components/messageUser.vue"
	export default {
		components: {
			messageUser
		},

		data() {
			return {

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

		}
	}
</script>

<style lang="scss">
	.wrap-top {
		background-color: white;
	}

	.tutu {
		width:100upx;
		height:100upx;
		
		img{
			width:100%;
			height:100%;
			border-radius:50%;
		}

	}

	.message-top {
		text-align: right;
		line-height: 80upx;

		text {
			margin-right: 16upx;
		}
	}



	/**.datatime {
		display: inline-block;
		float: right;
	}

	.textual {
		margin-top: 16upx;
		border: 2upx solid #D6D6D6;
		background-color: #F8F8F8;

		.text-left {
			margin-left: 16upx;
		}
	}
	* **/
</style>
