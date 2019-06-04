<template>
	<view>
		<view class="box solid-top padding-tb-lg bg-white margin-top-xs">
			<view class="cu-bar  flex justify-center">
				<button class="cu-btn   bg-red shadow round lg text-df ">确认爆料</button>
			</view>
			<view class="flex-sub text-center">
				<view class=" text-df padding-tb-xs padding-lr">您的用户等级为LV0，好价本周还可爆料0条</view>
			</view>
			<view class="flex-sub text-center">
				<view class=" text-df text-red padding-lr padding-tb-xs">
					<view class="cuIcon-info"><text class="margin-left-xs">查看规则</text></view>
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
		name: "selfCommonLRHeader",
		props: {
			// datalist: {
			// 	type: Array,
			// 	default: () => []
			// }
		},
		created() {

		},

	}
</script>

<style lang="scss">

</style>
