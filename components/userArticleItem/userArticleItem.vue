<template>
	<view>
		<!-- 用户基础信息部分 -->
		<view class="bg-gray">
			<view class="cu-list menu-avatar  margin-top-sm">
				<view class="cu-item">
					<view class="cu-avatar round lg" :style="{'background-image':'url('+datalist.avatar+')'}">
						<view class="pic-zi ">
							<text class="cuIcon-vip  ">
							</text></view>

					</view>
					<view class="content flex-sub">
						<!-- 用户名 -->
						<view class="text-grey flex justify-between">
							<view>
								{{datalist.nickName}}
								<!-- 用户标签 -->
								<view class='cu-tag round line-red lj_margin_left10 margin-bottom-xs'>{{datalist.tag}}</view>
							</view>



						</view>
						<view class="text-gray text-sm flex justify-between ">
							{{datalist.desrc}}

						</view>
					</view>

					<!-- 右侧关注 -->

					<view class='cu-tag line-red margin-right-sm'>
						<text class='cuIcon-add '> 关注</text>
					</view>
				</view>
			</view>
			<!-- 内容部分 -->
			<view class="text-content bg-white ">
				<view class="margin-lr-sm">
					<text class="text-blue " v-for="(topicItem,index) in datalist.topic" :key="index">{{topicItem}} </text>
					{{datalist.contentText}}
				</view>
			</view>
			<!-- 用户发布图片部分 -->
			<view class="bg-white">
				<view class="grid flex-sub padding-top-xs  margin-lr-xs  grid-square bg-white col-3 solids-bottom">
					<view v-for="(imgItem,index) in datalist.imgList" :key="index" class="bg-img " :style="{'background-image':'url('+imgItem+')'}">
					</view>
				</view>
			</view>

			<!-- 分享评论居中 -->
			<view class="text-gray text-df text-df text-center padding-tb-sm flex justify-around bg-white margin-bottom-sm">
				<view><text class="cuIcon-forwardfill margin-right-xs"></text> 43</view>
				<view><text class="cuIcon-comment margin-right-xs"></text>{{datalist.comment}} </view>
				<view><text class="cuIcon-appreciate margin-right-xs"></text>{{datalist.thumbsUp}} </view>

			</view>
			<!-- 分享评论在右 -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},

		name: "userArticleItem",
		props: {
			datalist: {
				type: Object,
				default: () => {}
			}
		},
		created() {

		}

	}
</script>

<style lang="scss">
	.lj_margin_left10 {
		margin-left: 10upx;
	}

	.pic-zi {
		position: absolute;
		right: -2upx;
		bottom:-5upx;
		font-size: 38upx;
		color: orange;
		z-index: 999;
	}
</style>
