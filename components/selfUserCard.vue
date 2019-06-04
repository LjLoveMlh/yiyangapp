<template>
	<view>
		<view class="cu-list menu-avatar " @tap="goToPageLogin">
			<view class="cu-item ">
				<view class="cu-avatar round lg ljAvatar"  :style="{'background-image':'url('+datalist.avatar+')'}">
					<view class="pic-zi ">
						<image class="lj_tag_vip" src="/static/img/vip/vip_red.png">
						</image>
					</view>
				</view>
				<view class="content flex-sub text-white">
					<!-- 用户名 -->
					<view class="text-grey flex justify-between">
						<view>
							<text class="text-white text-df">{{datalist.nickName}}</text>
							<!-- 用户标签 -->
							<view class='cu-tag ljCuTag bg-white round line-red lj_margin_left10 '>{{datalist.tag}}</view>
						</view>
					</view>
					<view class="text-white text-sm flex justify-between ">
					{{datalist.desrc}}
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
		name: "selUserCard",
		props: {
			datalist: {
				type: [Array,Object],
				default: () => []
			}
		},
		created() {

		},
		methods:{
			goToPageLogin(){
				uni.navigateTo({
					url:'/pages/commonPage/pageUserLogin/pageUserLogin'
				})
			}
		}
		
	}
</script>

<style lang="scss">
	.cu-list.menu-avatar>.cu-item {
		background-color: transparent !important;
	}

	.ljAvatar {
		width: 98upx;
		height: 98upx;
	}

	.lj_text-xs {
		padding-top: 4upx;
		font-size: 14upx;
	}
	
	// 上面的个人信息部分
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
			width: 30upx;
			height: 30upx;
			z-index: 1;
			border: 2upx solid white;
			border-radius: 50%;
		}
	}
</style>
