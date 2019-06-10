<template>
	<view>
		<swiper class="" style="height: 320upx;">
			<swiper-item class="cu-list grid no-border col-5 lj_class_in ">
				<view class=" cu-item " style="	padding-top: 0upx; 
		padding-bottom: 10upx;" v-for="(item,index) in datalist" :key="index"
				 v-if="index<10" @tap="goToPageClassInEntry(item.name)">
					<view class="cu-avatar lg round lj_margin_auto " :style="{'background-image':'url('+item.icon+')'}"></view>
					<text class="text-sm " style="color:#000000;">{{item.name}}</text>
				</view>
			</swiper-item>
			<swiper-item class="cu-list grid no-border col-5 lj_class_in ">
				<view class="cu-item" style="	padding-top: 0upx;
		padding-bottom: 10upx;" v-for="(item,index) in datalist" :key="index"
				 v-if="index>10&&index<20" @tap="goToPageClassInEntry(item.name)">
					<view class="cu-avatar lg round lj_margin_auto" :style="{'background-image':'url('+item.icon+')'}"></view>
					<text class="text-sm " style="color:#000000;">{{item.name}}</text>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		name: "selfClassIn",
		props: {
			datalist: {
				type: Array,
				default: () => []
			}
		},
		created() {

		},
		methods: {
			goToPageClassInEntry(e) {
				var title = e
				uni.navigateTo({
					url: '/pages/tabbar/tabbar-1/pageClassInEntry/pageClassInEntry?title=' + title
				})
			}

		}
	}
</script>

<style lang="scss">
	.lj_class_in {
		margin-top: 0 !important;
		box-sizing: border-box;
	}

	.lj_margin_auto {
		margin: auto;
	}
</style>
