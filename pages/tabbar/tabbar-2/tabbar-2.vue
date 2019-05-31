<template>
	<view class="bg-gray">


		<!-- 头部卡片导航 -->
		<selfTopSwiperClassIn :datalist='selfTopSwiperClassIn' />
		<!--用户文章  -->
		<view>
			<block v-for="(userItem,userIndex) in userArticleList" :key="userIndex">
				<userArticleItem :datalist="userItem" />
			</block>

			<!-- 正常的话应该是写再user Article中 -->
		</view>
		<view v-for="(item, index) in newsList"  :key="index">{{item}}</view>
		<uni-load-more :loadingType="loadingType" :contentText="contentText">
		</uni-load-more>

	</view>
</template>

<script>
	// 下拉刷新
	import uniLoadMore from '@/components/uni-load-more.vue';
	var _self,
		page = 1,
		timer = null;


	// 顶部滑动图文导航
	import selfTopSwiperClassIn from '@/components/selfTopSwiperClassIn.vue'


	// 用户文章
	import userArticleItem from '@/components/userArticleItem.vue'
	export default {
		components: { //2注册组件
			userArticleItem,
			selfTopSwiperClassIn,
			uniLoadMore
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
				userArticleList: {},
				selfTopSwiperClassIn: []
			}
		},
		methods: {


			// 获取用户文章信息
			getUserArticleList(_self) {
				this.uniFly.get({
					url: ' userArticleList',
					params: null
				}).then(function(response) {
					// console.log(response)
					_self.userArticleList = response.data.data.userArticleList
				}).catch(function(error) {
					// console.log(error)
				});
			},


			// 获取顶部图文导航
			getTopSwiperClassIn(_self) {
				this.uniFly.get({
					url: 'selfTopSwiperClassIn',
					params: null
				}).then(function(response) {
					// console.log(response)
					_self.selfTopSwiperClassIn = response.data.data.selfTopSwiperClassIn
				}).catch(function(error) {
					// console.log(error)
				});
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
						console.log(JSON.stringify(res));
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
			},

			// 初始化数据请求	
			initRequestData(_self) {
				var _self = _self
				_self.getUserArticleList(_self);
				_self.getTopSwiperClassIn(_self);
			},

		},
		onLoad() {
			var _self = this
			// 初始化请求
			_self.initRequestData(_self)
		},

		//下拉刷新，加载数据
		onPullDownRefresh() {
			var _self = this;
			page = 1;
			_self.loadingType = 1;
			//  获取数据	
			_self.getUserArticleList(_self)
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
	.pic-zi {
		position: absolute;
		right: -2upx;
		bottom: -5upx;
		font-size: 38upx;
		color: orange;
		z-index: 999;
	}

	.bot-pa {
		padding-bottom: 30upx;
	}

	.lj_margin_auto {
		margin: auto;
	}
</style>
