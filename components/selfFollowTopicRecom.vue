<template>
	<view>
		<scroll-view scroll-x class=" nav ljmargin-top-xs">
		<view class="margin-lr-xs">
			<view class="lj_cu-item " v-for="(item,index) in datalist" :key="index" @tap="tabSelect" :data-id="index">
				<view class="itemAll shadow bg-white cu-card padding-tb text-center ">
					<view class="itemAvatar ">
						<image :src="item.avatar" mode="aspectFill"></image>
					</view>
					<view class="itemName margin-tb-sm">{{item.nickName}}</view>
					<view class="itemDesrc text-center text-gray margin-top-sm">{{item.desrc}}</view>
					<view class="itemButton margin-top-sm">
						<button class="cu-btn ljcu-btn  bg-gradual-red sm   ">
							<text class='cuIcon-add '> 关注</text>
						</button>
					</view>
				</view>
			</view>
		</view>
	</scroll-view>	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		name: "selfFollowTopicRecom",
		props: {
			datalist: {
				type: Object,
				default: () => {}
			}
		},
	}
</script>

<style lang="scss" scoped="">
.ljmargin-top-xs {
		margin-top: -10upx;
	}

	.nav .lj_cu-item {
		// height: 90upx;
		display: inline-block;
		// line-height: 90upx;
		// margin: 0 10upx;
		padding: 0 10upx;
	}

	.itemAll {
		width: 260upx;
		// border: 1px solid red;\
		border-radius: 4upx;

		.itemAvatar {
			width: 100upx;
			height: 100upx;
			margin-left: auto;
			margin-right: auto;

			image {
				width: 100%;
				height: 100%;
			}
		}
		.itemName {
			font-size: 26upx;
		}
		.itemDesrc {
			width: 80%;
			// height: 0upx;
			font-size: 24upx;
			overflow: hidden; //一定要写
			text-overflow: ellipsis; //超出省略号
			display: -webkit-box; //一定要写
			-webkit-line-clamp: 2; //控制行数
			-webkit-box-orient: vertical;
			white-space: pre-wrap;
			margin: auto;

		}

		.ljcu-btn {
			border-radius: 4upx;

		}
	}

</style>
