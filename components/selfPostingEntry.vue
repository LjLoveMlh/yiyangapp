<template>
	<view>
		<view class="cu-list menu-avatar ">
			<block v-for="(item,index) in datalist" :key='index'>
				<view class="report_list" @tap="goToWritePage(item.title)">
					<view class="report_list_item">
						<view class="item_left">
							<view class="item_left_img">
								<image :src="item.url" mode="aspectFill"></image>
							</view>
						</view>
						<view class="item_right ">
							<view class="flex ljContentAll">
								<view class="content  ljContent">
									<view class="text-black mess-t">{{item.title}}</view>
									<view class="text-gray text-sm flex">
										<text class=" mess-b">
											{{item.desrc}}
										</text>
									</view>
								</view>
								<view class="ljAction  ">
									<view class="ljActionHelp">
										<view class="cuIcon-right text-gray"></view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		name: "selfPostingEntry",
		props: {
			datalist: {
				type: Array,
				default: () => []
			}
		},
		created() {

		},
		methods: {
			goToWritePage(e) {
				if (e == '爆好料') {
					uni.navigateTo({
						url: '/pages/tabbar-3-detial/pageWriteNews/pageWriteNews'
					});

				}
				// console.log(e)
			}
		}

	}
</script>

<style lang="scss" scoped="">
	page {

		background-color: #fff;

		.lj_margin-tb-lg {
			margin-top: -15upx;
			margin-bottom: -15upx;
		}
	}

	.report_list_item {
		display: flex;
		padding: 0 35upx;
		box-sizing: border-box;

		.item_left {
			margin: 16upx 0;

			.item_left_img {
				width: 96upx;
				height: 96upx;

				image {
					width: 100%;
					height: 100%;
					border-radius: 50%;
				}
			}
		}



		.item_right {
			width: calc(96% - 96upx);
			margin-left: 18upx;
			border-bottom: 1px solid #f5f5f5;

			.ljContentAll {
				height: 100%;

				.ljContent {
					width: 90%;
					margin: auto;
					padding-right: 10upx;
					margin-left: 0px;

					.mess-t {
						font-weight: bold;
						white-space: nowrap;
						overflow: hidden;
					}

					.mess-b {
						white-space: nowrap;
						overflow: hidden;
						margin-top: 4upx;
					}
				}

				.ljAction {
					height: 100%;
					margin-right: 0px;
					display: flex;

					.ljActionHelp {
						align-self: center;
					}
				}
			}
		}
	}

	.report_list {
		&:last-child {
			.item_right {
				border-bottom: none;
			}
		}
	}
</style>
