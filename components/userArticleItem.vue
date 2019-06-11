<template>
	<view>
		<!-- 用户基础信息部分 -->
		<view class="bg-gray margin-bottom-xs " @tap="goToPageUserArticleDetail">
			<view class="cu-list menu-avatar  ">
				<view class="cu-item">
					<view class="cu-avatar round lg" :style="{'background-image':'url('+datalist.avatar+')'}">
						<view class="pic-zi ">
							<image class="lj_tag_vip" v-if="datalist.level==0" src='/static/img/vip/vip_blue.png'></image>
							<image class="lj_tag_vip" v-if="datalist.level==1" src='/static/img/vip/vip_yellow.png'></image>	
							<image class="lj_tag_vip" v-if="datalist.level==2" src='/static/img/vip/vip_red.png'></image>
						</view>
					</view>
					<view class="content flex-sub">
						<!-- 用户名 -->
						<view class="text-grey flex justify-between">
							<view>
								<text class="text-black text-df"> {{datalist.nickName}}</text>
								<!-- 用户标签 -->
								<view class='cu-tag ljCuTag  round line-red lj_margin_left10 '>{{datalist.tag}}</view>
							</view>
						</view>
						<view class="text-gray text-xs flex justify-between ">
							{{datalist.desrc}}
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
					<text class="text-blue " v-for="(topicItem,index) in datalist.topic" :key="index">#{{topicItem}}# </text>
					{{datalist.contentText}}
				</view>
			</view>

			<!-- 用户发布图片部分 -->
			<view class="bg-white cu-card dynamic no-card">
				<view class="cu-item shadow">
					<view class="grid flex-sub padding-top-xs  margin-lr-xs  grid-square bg-white flex justify-between solids-bottom "
					 :class="{'col-1 ljCol1Heght':datalist.imgList.length==1,'col-2':datalist.imgList.length==2,'col-3':datalist.imgList.length>2}">
						<view class="bg-img " v-for="(imgItem,index) in datalist.imgList" :key="index" @tap="viewimg(datalist.imgList,imgItem)">
							<image mode='aspectFill' :src="imgItem" @tap="viewimg(datalist.imgList,imgItem)"></image>
						</view>
					</view>
				</view>
			</view>
			<!-- 分享评论居中 -->
			<view class="text-gray text-df text-df text-center padding-tb-sm flex justify-around bg-white ">
				<view><text class="cuIcon-forwardfill margin-right-xs"></text> 43</view>
				<view><text class="cuIcon-comment margin-right-xs"></text>{{datalist.comment}} </view>
				<view><text class="cuIcon-appreciate margin-right-xs"></text>{{datalist.thumbsUp}} </view>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			basicLevelUrl:'/static/img/vip/'
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

		},
		methods: {
			viewimg(list, current) {
				uni.previewImage({
					current: current,
					urls: list
				});
			},
			goToPageUserArticleDetail(){
				uni.navigateTo({
					url:'/pages/tabbar/tabbar-1/pageUserArticleDetail/pageUserArticleDetail'
				})
			}
		}

	}
</script>

<style lang="scss">
	$imgheight:250upx;

	// 文章1张图片时候的高度
	.ljCol1Heght {
		height: 420upx;
	}

	.lj_margin_left10 {
		margin-left: 10upx;
	}

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

	.user_item_imgwrap {
		display: flex;
		flex-wrap: wrap;

		.item_img1 {
			width: 100%;

			image {
				width: 100%;
				height: 320upx;
			}
		}

		.item_img2 {
			width: calc(100% - 10upx);

			&:not(:nth-child(2n)) {
				margin-right: 10upx;
			}

			image {
				width: 100%;
				height: $imgheight;
			}
		}

		.item_img3 {
			width: calc(calc(100% - 20upx)/3);

			&:not(:nth-child(3n)) {
				margin-right: 10upx;
			}

			image {
				width: 100%;
				height: $imgheight;
			}
		}
	}
</style>
