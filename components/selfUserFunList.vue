<template>
	<view class="funBg bg-white">
		<view class="cu-list grid no-border col-4 lj_margin-top-xl padding-top-lg">
			<view class="cu-item " v-for="(item,index) in datalist" :key="index">
				<view class="cu-avatar xl round lx_auto">
					<image :src="item.icon"></image>

				</view>
				<view class="text-center text-sm padding-top-xs">{{item.text}}</view>
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
	
		name: "selfUserFunList",
		props: {
			datalist: {
				type: Array,
				default: () => []
			}
		},
		created() {
		
		}
	}
</script>

<style lang="scss">
	
	.funBg{
		height: 100%;
		
			.lx_auto {
				margin: auto;
				width: 86upx;
				height: 86upx;
		
				image {
					width: 100%;
					height: 100%;
					border-radius: 50%;
				}
			}
		
			.lj_margin-top-xl {
				margin-top: 15%;
			}
	}

</style>
