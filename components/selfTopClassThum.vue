<template>
	<view>
		<view class="bg-white flex solids-top solid-bottom padding-lr-lg  padding-tb-xs justify-between">
			<block v-for="(item,index) in datalist">
				<view class="margin-xs radius">
					<view class="cu-item " :key="index">
						<view class="cu-avatar round solid bg-white tutu">
							<img class='topImageList' :src="item.url" />
							<view class="cu-tag badge ">{{item.notice}}+</view>
						</view>
						<view class="text-center text-sm margin-top-xs">{{item.text}}</view>
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
		name: "selfTopClassThum",
		props: {
		
			datalist: {
				type: Array,
				default: () => []
			}
		
		
		},
		
	}
</script>

<style lang="scss">
	.tutu {
		width: 98upx;
		height: 98upx;

		img {
			width: 100%;
			height: 100%;
			border-radius: 50%;
		}
	}
</style>
