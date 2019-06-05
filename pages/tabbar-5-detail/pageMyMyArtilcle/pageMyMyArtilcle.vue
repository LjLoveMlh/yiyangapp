<template>
	<view class="main_content">
		<!-- 导航条 -->
		<selfTabNav :datalist='tabList' />
		<swiper current="0" class="ljmargin-top-xs" duration="300">
			<swiper-item>
				<!-- 文章类型Tab -->
				<scroll-view scroll-x class="bg-white nav  padding-lr-sm" :scroll-left="scrollLeft" scroll-with-animation>
					<view class=" ljCuItemFather text-sm">
						<view class=" ljCuItem" :class="index==TabCur?'bg-red':'bg-gray'" v-for="(item,index) in articleTabList" :key="index"
						 @tap="tabSelect" :data-id="index">
							{{item}}
						</view>
					</view>
				</scroll-view>
				<!-- 文章item -->
				<selfMyMyArticleArticleList />
			</swiper-item>
			<swiper-item></swiper-item>
			<swiper-item></swiper-item>
		</swiper>

		<!-- 悬浮按钮 -->
		<view class="circle-float">
			<view class="cuIcon-add"></view>
		</view>
	</view>
</template>

<script>
	//tabnav导航条
	import selfTabNav from '@/components/selfTabNav.vue';
	// 文章列表组件
	import selfMyMyArticleArticleList from '@/components/selfMyMyArticleArticleList.vue'
	export default {
		components: {
			selfTabNav,
			selfMyMyArticleArticleList
		},
		data() {
			return {
				// 导航条
				TabCur: 0,
				scrollLeft: 0,
				tabList: ['文章', '讨论', '好价爆料', '百科点评'],
				articleTabList: ['全部', '已发布', '待审核', '待修改', '草稿', '未通过', '待修改', '待修改'],
			};
		},
		methods: {
			// 导航条
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
		}
	}
</script>

<style lang="scss" scoped="">
	.main_content {
		height: 100%;
	}
	.ljmargin-top-xs {
		flex: 1;
		width: 100%;
		height: 1000px;
		// height: calc(100% - 200upx);
		margin-top: 2upx;
	}
	.ljCuItemFather {
		// width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-top: 4upx;
		// margin-left: 100upx;
		margin-right: 20upx;
		.ljCuItem {
			margin: 14upx 10upx;
			height: 50upx;
			padding: 4upx 20upx;
			display: flex;
			align-items: center;
			border-radius: 4upx;
		}
	}
	// 悬浮按钮
	.circle-float {
		color: #ffffff;
		position: fixed;
		display: flex;
		align-items: center;
		justify-content: center;
		bottom: 30rpx;
		right: 30rpx;
		width: 90rpx;
		height: 90rpx;
		border-radius: 50%;
		font-size: 60rpx;
		background: #f43f3b;
		box-shadow: 0px 5px 10px #bbb;
	}
</style>
