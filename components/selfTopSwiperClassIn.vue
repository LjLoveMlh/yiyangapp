<template>
	<view>
		<scroll-view scroll-x class="bg-white nav padding-tb solids-bottom " scroll-with-animation>
			<view class="ljIconTextAll margin-right-sm">
				<!--添加关注入口 -->
				<view class="ljIconTextItem text-center margin-left-lg" @tap="goToPageAddFollow">
					<view class="cu-avatar lj_lg round lj_margin_auto " style="background-image:url('/static/img/attention/icon_attention_add@3x.png')">
					</view>
					<view class="text-sm text-black margin-top-xs">添加关注</view>
				</view>
				<view class="ljIconTextItem text-center margin-left-lg" v-for="(item,index) in datalist" :key="index">
					<view class="cu-avatar lj_lg round lj_margin_auto " :style="{'background-image':'url('+item.url+')'}">
						<view class="pic-zi ">
							<image class="lj_tag_vip" src="/static/img/vip/vip_blue.png">
							</image>
						</view>
					</view>
					<view class="text-sm text-black margin-top-xs">{{item.name}}</view>
				</view>

			</view>

		</scroll-view>
	</view>
</template>

<script>
	import selfTopSwiperClassIn from "@/components/selfTopSwiperClassIn.vue";
	export default {
		data() {
			return {

			}
		},
		name: "selfTopSwiperClassIn",
		props: {
			datalist: {
				type: Array,
				default: () => []
			}
		},
		created() {

		},
		methods: {
			goToPageAddFollow() {
				uni.navigateTo({
			url:'/pages/tabbar-2-detail/pageAddFollow/pageAddFollow'
				})
			}

		}
	}
</script>

<style lang="scss">
	.ljIconTextAll {
		display: flex;
		flex-direction: row;

		.ljIconTextItem {
			// border: 2px solid red;
			display: flex;
			flex-direction: column;
		}


	}

	.ljIconTextAll>view:nth-last-child(1) {
		padding-right: 30upx;

	}

	.cu-avatar.lj_lg {
		width: 120upx;
		height: 120upx;
		font-size: 2em;
	}

	.pic-zi {
		position: absolute;
		right: -2upx;
		bottom: -8upx;
		font-size: 38upx;
		color: orange;


		.lj_tag_vip {
			width: 40upx;
			height: 40upx;
			z-index: 1;
			border: 2upx solid white;
			border-radius: 50%;
		}
	}
</style>
