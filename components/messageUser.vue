<template>
<view v-for="(item,index) in datalist">
		<!-- 用户基础信息部分 -->
		<view class="bg-gray margin-bottom-xs ">
			<view class="cu-list menu-avatar  ">
				<view class="cu-item">
					<view class="cu-avatar round lg" :style="{'background-image':'url('+item.avatar+')'}">
						<view class="pic-zi ">
							<image class="lj_tag_vip" src="/static/img/vip/vip_red.png">
							</image>
						</view>
					</view>
					<view class="content flex-sub">
						<!-- 用户名 -->
						<view class="text-grey flex justify-between">
							<view>
								<text class="text-black text-df"> {{item.nickName}}</text>
								<!-- 用户标签 -->
								<view class='cu-tag ljCuTag  round line-red lj_margin_left10 '>{{item.tag}}</view>
							</view>
						</view>
						<view class="text-gray text-xs flex justify-between ">
							{{item.desrc}}
						</view>
					</view>
					<!-- 右侧关注 -->
					<button class="cu-btn line-red sm  margin-right-sm ">
						<text class='cuIcon-add '> 关注</text>
					</button>
				</view>
			</view>
			<!-- 内容部分 -->
			<view class="text-content bg-white ">
				<view class="margin-lr-sm">
					<text class="text-blue " v-for="(topicItem,index) in item.topic" :key="index">#{{topicItem}}# </text>
					{{item.contentText}}
				</view>
			</view>

			<!-- 用户发布图片部分 -->
			<view class="bg-white cu-card dynamic no-card">
					<view class="cu-item shadow">
				<view class="grid flex-sub padding-top-xs  margin-lr-xs  grid-square bg-white flex justify-between solids-bottom "
				 :class="{'col-1 ljCol1Heght':item.imgList.length==1,'col-2':item.imgList.length==2,'col-3':item.imgList.length>2}">
					<view class="bg-img "  v-for="(imgItem,index) in item.imgList" :key="index" @tap="viewimg(item.imgList,imgItem)">
						<image mode='aspectFill'  :src="imgItem" @tap="viewimg(item.imgList,imgItem)"></image>
					</view>
				</view>
					</view>
			</view>
			<!-- 分享评论居中 -->
			<view class="text-gray text-df text-df text-center padding-tb-sm flex justify-around bg-white ">
				<view><text class="cuIcon-forwardfill margin-right-xs"></text> 43</view>
				<view><text class="cuIcon-comment margin-right-xs"></text>{{item.comment}} </view>
				<view><text class="cuIcon-appreciate margin-right-xs"></text>{{item.thumbsUp}} </view>
			</view>

		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {

			};
		},
		name: "messageUser",
		props: {

			item: {
				type: Array,
				default: () => []
			}


		},

	}
</script>

<style lang="scss">
	// 原文摘要卡片
	.cu-card.article>.cu-item .content>image {
		width: 200upx;
		height: 200upx;
		margin-right: 20upx;
		border-radius: 6upx;
	}
	
	.datatime {
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
</style>
