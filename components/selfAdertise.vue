<template>
	<view>
		<!-- 轮播图 -->
		<swiper class="lj_adver_heght  square-dot " :indicator-dots="true" :circular="true" :autoplay="true" interval="5000"
		 duration="500">
			<swiper-item v-for="(item,index) in datalist" :key="index">
				<image class="lj_adver_heght" :src="item.bannerurl" mode="aspectFill"></image>
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
		name: "selfAdertise",
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
	// 轮播图
	.lj_adver_heght {
		height: 300upx;
		width: 100%;
		display: block;
	}
</style>
