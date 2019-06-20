<template>
	<view class="bg-gray main_content">
		<!-- 导航条 -->
		<selfTabNav :datalist='tabList' :NavTabCur='cur_swiper' @change="change" />
		<!-- swiper -->
		<view class="margin-top bg-white LJAllSwiper">
			<swiper class="swiper-box" :current="cur_swiper" :duration="500" @change='swiperChange'>
				<block v-for="(item,index) in tabList.length" :key='index'>
					<swiper-item>
						<scroll-view class="list"  scroll-y>
							<view class="swiper-item">
								<block v-for="(item,index) in contenList" :key='index'>
									<view class="margin-left-sm flex justify-between align-center contentItem padding-tb-sm padding-right-sm solid-bottom">
										<view class="itemLeft ">{{item.content}}</view>
										<view class="itemRight ">
											<view class="cuIcon-right"></view>
										</view>
									</view>
								</block>
							</view>
						</scroll-view>
					</swiper-item>
				</block>
			</swiper>
		</view>
	</view>
</template>

<script>
	//tabnav导航条
	import selfTabNav from '@/components/selfTabNav.vue';
	export default {
		components: {
			selfTabNav,

		},
		data() {
			return {
				// 导航条
				TabCur: 0,
				scrollLeft: 0,
				tabList: ['通知公告', '关于我们', '新手上路', '支付方式'],
				cur_swiper: 0,
				contenList: [{
					content: '我是通知公告公告公告'
				}, {
					content: '我是通知公告公告公告'
				}, {
					content: '我是通知公告公告公告我是通知公告公告公告我是通知公告公告公告'
				}, {
					content: '我是通知公告公告公告我是通知公告公告公告我是通知公告公告公告'
				}, {
					content: '我是通知公告公告公告我是通知公告公告公告我是通知公告公告公告'
				}, {
					content: '我是通知公告公告公告我是通知公告公告公告我是通知公告公告公告'
				}, {
					content: '我是通知公告公告公告我是通知公告公告公告我是通知公告公告公告'
				}, {
					content: '我是通知公告公告公告我是通知公告公告公告我是通知公告公告公告'
				}, {
					content: '我是通知公告公告公告我是通知公告公告公告我是通知公告公告公告'
				}, {
					content: '我是通知公告公告公告我是通知公告公告公告我是通知公告公告公告'
				}]
			}
		},
		methods: {
			// 来自子组件得值
			change(a) {
				// console.log(a);
				this.cur_swiper = a;
			},
			// 滑块
			swiperChange(e) {
				// console.log(e)		
				this.cur_swiper = e.detail.current;
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		height: 100%;
	}

	.main_content {
		height: 100%;
	}

	.LJAllSwiper {
		height: calc(100% - 50px);
	}

	
		.swiper-box {
			height:100%;
			
			.list{
				height: 100%;
			}
			
			
			.itemLeft{
				width: 85%;
			}
		}
</style>
