<template>
	<view>

		<view class="bg-gray margin-top-xs">
			<view class="grid  flex-sub  bg-gray  col-2">
				<view v-for="(item,index) in datalist" :key="index" class=" lj_imgItem_width">
					<view class="bg-img " style="height: 207upx;" :style="{'background-image':'url('+item.url+')'}">
		
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
		name: "selfFourAdver",
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
	.lj_imgItem_width{
		width: 48%;
	}
	
	.col-2>view:nth-child(1) {
		padding-right: 4upx;

	}

	.col-2>view:nth-child(2) {
		padding-left: 4upx;
	
	}

	.col-2>view:nth-child(3) {
			padding-right: 4upx;
			margin-top: 8upx;
	
	}

	.col-2>view:nth-child(4) {
		margin-top: 8upx;
		padding-left: 4upx;

	}
</style>
