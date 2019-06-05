<template>
	<view>
			<!-- 导航条 -->
		<scroll-view scroll-x class="bg-white nav  solid-bottom shadow shadow-l">
			<view class="   ljTab justify-around ">
				<view class="ljpadding-tb-sm  text-center" :class="index==TabCur?'text-red cur':''" v-for="(item,index) in datalist"
				 :key="index"  @tap="tabSelect" :data-id="index">
					{{item}}
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 导航条
				TabCur: 0,
				scrollLeft: 0,
		
			};
		},
		props: {
			datalist: {
				type: Array,
				default: () => []
			}
		},
		methods:{
				// 导航条
			tabSelect(e) {
			
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
			
		}
	}
</script>

<style lang="scss">
	// 导航栏
	.ljTab {
		display: flex;

		.cur {
			border-bottom: 3px solid #f43f3b;
		}

		.ljpadding-tb-sm {
			padding-top: 15upx;
			padding-bottom: 15upx;
		}
	}

</style>
