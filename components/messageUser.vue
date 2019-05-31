<template>
	<view>
		<view class="cu-list menu-avatar comment solids-top">
			<view class="cu-item" v-for="item in datalist">
				<view class="cu-avatar round" :style="{'background-image':'url('+item.pic+')'}"></view>
				<view class="content">
					<view class="text-grey">{{item.user}}</view>
					<view class="text-gray text-content text-df">
						{{item.userComment}}
						<view class="datatime">{{item.dataTime}}</view>
					</view>
					<!-- <view>{{item.userCommentSays}}</view> -->


					<!-- 原文文章摘要 -->
					<!-- 	<view class="textual padding-sm ">
						<text class="cuIcon-forwardfill"></text>
						<text class="text-left">{{item.originText}}</text>
					</view> -->
					<view class="cu-card article no-card" >
						<view class="cu-item shadow">
							<view class="title">
								<view class="text-cut">{{item.userCommentSays}}</view>
							</view>
							<view class="content">
								<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg" mode="aspectFill"></image>
								<view class="desc">
									<view class="text-content"> {{item.originText}}</view>
									<view>
										<view class="cu-tag bg-red light sm round">正义天使</view>
										<view class="cu-tag bg-green light sm round">史诗</view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
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

			datalist: {
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
