<template>
	<view>
		<view class="cu-list menu-avatar  bg-white">
			<block v-for="(item,index) in datalist">
				<view class="cu-item margin-0">
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
								<view class='cu-tag ljCuTag radius  line-red lj_margin_left10 grayscale'>{{item.tag}}</view>
							</view>
						</view>
						<view class="text-gray text-xs justify-between articleContent">
							{{item.desrc}}
						</view>
					</view>
					<!-- 右侧关注 -->
					<button class="cu-btn ljcu-btn bg-red sm  margin-right-sm ">
						<text class='cuIcon-add '> 关注</text>
					</button>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

				// 定义 type 
				// 0=达人 1=话题 2=分类 3=品牌
				// userRecomList

			};
		},
		name: "selfFollowUserRecom",
		props: {
			datalist: {
				type: [Object, Array],
				default: () => []
			}
		},
	}
</script>

<style lang="scss" scoped="">
	.ljCuTag {
		font-size: 20upx;
		vertical-align: middle;
		position: relative;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
		padding: 0upx 16upx;
		height: 36upx;
		font-family: Helvetica Neue, Helvetica, sans-serif;
		white-space: nowrap;


	}

	.lj_margin_left10 {
		margin-left: 10upx;
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

	.articleContent {
		// white-space: nowrap;
		width: 74%;
		// overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		word-break: break-all;

		// white-space: nowrap;
	}

	.ljcu-btn {
		border-radius: 4upx;
	}
</style>
