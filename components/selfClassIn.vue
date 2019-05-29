<template>
	<view>		
			<swiper class="" style="height: 320upx;">
		
		
				<swiper-item class="cu-list grid no-border col-5 lj_class_in ">
					<view class=" cu-item " style="	padding-top: 0upx;
		padding-bottom: 10upx;" v-for="(item,index) in datalist" :key="index"
					 v-if="index<10">
						<view class="cu-avatar lg round lj_margin_auto " :style="{'background-image':'url('+item.icon+')'}"></view>
						<text class="text-sm text-black">{{item.name}}</text>
					</view>
				</swiper-item>
		
		
				<swiper-item class="cu-list grid no-border col-5 lj_class_in ">
					<view class="cu-item" style="	padding-top: 0upx;
		padding-bottom: 10upx;" v-for="(item,index) in datalist" :key="index"
					 v-if="index>10&&index<20">
						<view class="cu-avatar lg round lj_margin_auto" :style="{'background-image':'url('+item.icon+')'}"></view>
						<text class="text-sm text-blue">{{item.name}}</text>
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
				type: Object,
				default: () => {}
			}
		},
		created() {
		
		}
	}
</script>

<style lang="scss">
.lj_class_in {
		margin-top: 0px;
		box-sizing: border-box;
	}
</style>
