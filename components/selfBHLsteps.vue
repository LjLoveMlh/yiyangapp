<template>
	<view>
		<view class=" bg-white margin-top ">
			<!-- 如何爆料标题 -->
			<view class="cu-bar  ">
				<view class="action">
					<text class=" text-black text-bold">如何爆料</text>
				</view>
			</view>
			<!-- 如何爆料内容 -->
			<view class="bg-white    margin-top-xs  padding-tb-lg">
				<view class="BLHelpAll padding-bottom-lg">
					<!-- 步骤 -->
					<view class="cu-steps steps-arrow  ljSetp margin-left-lg">
						<view class="cu-item text-gray " v-for="(item,index) in basicsList" :key="index">
		
							<view class="text-center">
								<view class="setpImg">
									<image src="../../../static/img/qa.png"></image>
								</view>
								<view class="margin-top-xs">{{item.name}}</view>
							</view>
						</view>
					</view>
					<!-- 右箭头 -->
					<view class=" text-xl  text-grey flex align-center margin-right-sm">
						<text class="cuIcon-right"></text>
					</view>
				</view>
			</view>
		
		
			<!--更多问题 -->
			<view class="flex-sub text-center">
				<view class=" text-df  text-black text-bold padding-bottom-xl padding-lr">更多问题解答点击这里</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				basicsList: [{
					icon: 'usefullfill',
					name: '复制链接'
				}, {
					icon: 'radioboxfill',
					name: '完善信息'
				}, {
					icon: 'roundclosefill',
					name: '等待审核'
				}]
			};
		},
		name: "selfBHLsteps",
		props: {
			// datalist: {
			// 	type: Array,
			// 	default: () => []
			// }
		},
		created() {
		
		}
	}
</script>

<style lang="scss" scoped="">
.setpImg {
		width: 80upx;
		height: 80upx;
		margin: auto;

		image {
			width: 100%;
			height: 100%;
			border-radius: 50%;
		}
	}


	.BLHelpAll {
		display: flex;
		flex-direction: row;

		.ljSetp {
			width: 90%;

		}
		
			
		.ljAction{
		}
	}
</style>
