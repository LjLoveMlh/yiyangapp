<template>
	<view class="bg-gray">
		<view class="nav_bar"></view>
		<!-- <view v-for="(item, index) in newsList" class="newslist">{{item}}</view> -->

		<!-- 搜索框 -->
		<view class="cu-bar search bg-white index_search">
			<view class="search-form round ">

				<view class="margin-left-lg text-gray">复制宝贝标题查找优惠券</view>
			</view>
			<view class="action">
				<view class="cuIcon-search text-df"> </view>
			</view>
		</view>

		<!-- 轮播图 -->
		<selfAdertise :datalist='swiperList' />




		<!-- 宫格列表 -->
		<selfClassIn :datalist='class_in' />




		<!-- 四张图片比例布局 -->
		<selfFourAdver :datalist='fourAdverList' />


		<!-- 选项卡导航 -->
		<scroll-view 
			scroll-x 
			class="bg-white nav margin-top-xs solids-bottom class_in" 
			scroll-with-animation 
			:scroll-left="scrollLeft">
			<view class="cu-item text-df" :class="index==TabCur?'text-red ':''" v-for="(item,index) in class_nav" :key="index"
			 @tap="tabSelect(index)">
				{{item.text}}
			</view>
		</scroll-view>


		<!-- 对应显示的内容 -->
		<view v-for="(item,index) in class_nav" :key="index" v-if="index==TabCur">

			<block v-for="(userItem,userIndex) in userArticleList" :key="userIndex">
				<userArticleItem :datalist="userItem" />
			</block>
			<!-- 正常的话应该是写再user Article中 -->
			<view 
				v-for="(item, index) in newsList" 
				:key="index">
				{{item}}
			</view>
			<uni-load-more :loadingType="loadingType" :contentText="contentText">
			</uni-load-more>

		</view>




	</view>





</template>

<script>
	// 轮播图
	import selfAdertise from '@/components/selfAdertise.vue'

	// 分类入口classin
	import selfClassIn from '@/components/selfClassIn.vue'

	// 四张广告
	import selfFourAdver from '@/components/selfFourAdver.vue'

	// 下拉刷新
	import uniLoadMore from '@/components/uni-load-more.vue';
	// 用户文章
	import userArticleItem from '@/components/userArticleItem.vue'
	// 定义全局参数,控制数据加载
	var _self,
		page = 1,
		timer = null;

	export default {
		components: { //2注册组件
			uniLoadMore,
			userArticleItem,
			selfAdertise,
			selfClassIn,
			selfFourAdver
		},


		data() {
			return {
				// 上拉下拉参数
				newsList: [],
				loadingText: '加载中...',
				loadingType: 0, //定义加载方式 0---contentdown  1---contentrefresh 2---contentnomore
				contentText: {
					contentdown: '上拉显示更多',
					contentrefresh: '正在加载...',
					contentnomore: '没有更多数据了'
				},
				// 轮播图数据
				cardCur: 0,
				swiperList: [],
				// 宫格列表数据
				class_in: [],
				// 四张广告图
				fourAdverList: [],
				// 导航卡
				TabCur: 0,
				scrollLeft: 0,
				class_nav: [],

				// 导航卡下面的所有数据
				userArticleList: []
			}
		},
		methods: {

			// 轮播图
			DotStyle(e) {
				this.dotStyle = e.detail.value
			},
			// cardSwiper
			cardSwiper(e) {
				this.cardCur = e.detail.current
			},
			// towerSwiper



			// 选项卡
			tabSelect(index) {
				this.TabCur =index;
				this.scrollLeft = (index - 1) * 60
			},



			// 获取轮播图
			getAdv(_self) {
				this.uniFly.get({
					url: 'social_adv',
					params: null
				}).then(function(response) {
					// console.log(response)
					_self.swiperList = response.data.data.swiperList
				}).catch(function(error) {
					// console.log(error)
				});
			},

			// 请求分类入口class_in
			getClassIn(_self) {
				this.uniFly.get({
					url: 'class_in',
					params: null
				}).then(function(response) {
					// console.log(response)
					_self.class_in = response.data.data.class_in
				}).catch(function(error) {
					// console.log(error)
				});
			},


			// 请求分类导航class_nav
			getClassNav(_self) {
				this.uniFly.get({
					url: 'class_nav',
					params: null
				}).then(function(response) {
					// console.log(response)
					_self.class_nav = response.data.data.class_nav
				}).catch(function(error) {
					// console.log(error)
				});
			},

			// 请求四张图广告fourAdverList
			getFourAdverList(_self) {
				this.uniFly.get({
					url: 'fourAdverList',
					params: null
				}).then(function(response) {
					// console.log(response)
					_self.fourAdverList = response.data.data.fourAdverList
				}).catch(function(error) {
					// console.log(error)
				});
			},

			// 请求某nav下用户文章
			getUserArticleList(_self) {
				this.uniFly.get({
					url: 'userArticleList',
					params: null
				}).then(function(response) {
					// console.log(response)
					_self.userArticleList = response.data.data.userArticleList
				}).catch(function(error) {
					// console.log(error)
				});
			},




			// 初始化数据请求	
			initRequestData(_self) {

				var _self = _self
				_self.getAdv(_self);
				_self.getClassIn(_self);
				_self.getClassNav(_self);
				_self.getUserArticleList(_self);
				_self.getFourAdverList(_self);

			},
			// 上拉加载
			getmorenews(_self) {
				var _self = _self;
				if (_self.loadingType !== 0) { //loadingType!=0;直接返回
					return false;
				}
				_self.loadingType = 1;
				uni.showNavigationBarLoading(); //显示加载动画
				uni.request({
					url: 'https://demo.hcoder.net/index.php?user=hcoder&pwd=hcoder&m=list1&page=' + page,
					method: 'GET',
					success: function(res) {
						// console.log(JSON.stringify(res));
						if (res.data == null) { //没有数据
							_self.loadingType = 2;
							uni.hideNavigationBarLoading(); //关闭加载动画
							return;
						}
						page++; //每触底一次 page +1
						_self.newsList = _self.newsList.concat(res.data.split('--hcSplitor--')); //将数据拼接在一起
						_self.loadingType = 0; //将loadingType归0重置
						uni.hideNavigationBarLoading(); //关闭加载动画
					}
				});
			}
		},




		onLoad(e) {
			var _self = this
			// 初始化数据请求
			_self.initRequestData(_self)



		},

		//下拉刷新，加载数据
		onPullDownRefresh() {
			var _self = this;
			page = 1;
			_self.loadingType = 1;
			//  获取数据	
			_self.getUserArticleList(_self);
			setTimeout(() => {
				uni.stopPullDownRefresh();
			}, 500)


		},
		onReachBottom() {
			var _self = this;
			//触底的时候请求数据，即为上拉加载更多
			//为了更加清楚的看到效果，添加了定时器
			if (timer != null) {
				clearTimeout(timer);
			}
			timer = setTimeout(function() {
				_self.getmorenews(_self);
			}, 1000);

			// 正常应为:
			// _self.getmorenews();
		}



	}
</script>

<style lang="scss">
	.box {
		margin: 20upx 0;
	}

	.box view.cu-bar {
		margin-top: 20upx;
	}

	// 宫格
	.lj_cu-item {
		padding-top: 10upx;
		padding-bottom: 10upx;
		box-sizing: border-box;
	}

	.cu-bar .search-form {
		line-height: normal !important;
		display: flex;
		align-items: center;
	}

	.nav_bar {
		position: sticky;
		top: 0;
		height: var(--status-bar-height);
		background: #fff;
		z-index: 9999;
	}

	.class_in {
		position: sticky;
		top: var(--status-bar-height);
		z-index: 1;
	}
</style>
