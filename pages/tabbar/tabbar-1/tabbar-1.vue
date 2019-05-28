<template>
	<view class="bg-white">
		<!-- 搜索框 -->
		<view class="cu-bar search bg-white">
			<view class="search-form  ">
				<text class="cuIcon-search"></text>
				<input @focus="InputFocus" @blur="InputBlur" :adjust-position="false" type="text" placeholder="快来搜索你想要的吧"
				 confirm-type="search"></input>
			</view>
			<!-- <view class="action">
				<button class="cu-btn bg-green shadow-blur round">搜索</button>
			</view> -->
		</view>



		<!-- 轮播图 -->
		<swiper class="card-swiper bg-white" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" :circular="true"
		 :autoplay="true" interval="5000" duration="500" @change="cardSwiper" indicator-color="#8799a3"
		 indicator-active-color="#0081ff">
			<swiper-item v-for="(item,index) in swiperList" :key="index" :class="cardCur==index?'cur':''">
				<view class="swiper-item">
					<image :src="item.bannerurl" mode="aspectFill" v-if="item.type=='image'"></image>
					<!-- <video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video> -->
				</view>
			</swiper-item>
		</swiper>


		<!-- 宫格列表 -->
		<view>
			<swiper class="" style="height: 480upx;">


				<swiper-item class="cu-list grid no-border col-5 lj_class_in">
					<view class="cu-item" v-for="(item,index) in class_in" :key="index" v-if="index<10">
						<!-- 		<view :class="['cuIcon-' + item.icon,'text-' + item.color]">
					<view class="cu-tag badge" v-if="item.badge!=0">
						<block v-if="item.badge!=1">{{item.badge>99?'99+':item.badge}}</block>
					</view>
				</view> -->
						<view class="cu-avatar xl round lj_margin_auto " :style="{'background-image':'url('+item.icon+')'}"></view>
						<text>{{item.name}}</text>
					</view>
				</swiper-item>

				<swiper-item class="cu-list grid no-border col-5 lj_class_in">
					<view class="cu-item" v-for="(item,index) in class_in" :key="index" v-if="index>10&&index<20">
						<!-- 		<view :class="['cuIcon-' + item.icon,'text-' + item.color]">
					<view class="cu-tag badge" v-if="item.badge!=0">
						<block v-if="item.badge!=1">{{item.badge>99?'99+':item.badge}}</block>
					</view>
				</view> -->
						<view class="cu-avatar xl round lj_margin_auto" :style="{'background-image':'url('+item.icon+')'}"></view>
						<text>{{item.name}}</text>
					</view>
				</swiper-item>
			</swiper>
		</view>





		<!-- 四张图片比例布局 -->
		<view class="grid col-2 margin-top-xs">
			<view class="bg-img padding-bottom-xl " style="background-image: url('https://ossweb-img.qq.com/images/lol/web201310/skin/big10007.jpg');height: 207upx;">
				<!-- <view class="bg-shadeTop padding padding-bottom-xl">
					上面开始
				</view> -->
			</view>
			<view class="bg-img padding-top-xl flex align-end " style="background-image: url('https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg');height: 207upx;">
				<!-- <view class="bg-shadeBottom padding padding-top-xl flex-sub">
					下面开始
				</view> -->
			</view>
			<view class="bg-img padding-bottom-xl " style="background-image: url('https://ossweb-img.qq.com/images/lol/web201310/skin/big10007.jpg');height: 207upx;">
				<!-- <view class="bg-shadeTop padding padding-bottom-xl">
					上面开始
				</view> -->
			</view>
			<view class="bg-img padding-top-xl flex align-end " style="background-image: url('https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg');height: 207upx;">
				<!-- <view class="bg-shadeBottom padding padding-top-xl flex-sub">
					下面开始
				</view> -->
			</view>
		</view>



		<!-- 选项卡导航 -->
		<scroll-view scroll-x class="bg-white nav" scroll-with-animation :scroll-left="scrollLeft">
			<view class="cu-item text-df" :class="index==TabCur?'text-orange cur':''" v-for="(item,index) in class_nav" :key="index"
			 @tap="tabSelect" :data-id="index">
				{{item.text}}
			</view>
		</scroll-view>


		<!-- 对应显示的内容 -->
		<view v-for="(item,index) in class_nav" :key="index" v-if="index==TabCur" class="bg-white   ">

			<block v-for="(userItem,userIndex) in userArticleList" :key="userIndex">
				<view class="cu-list menu-avatar">
					<view class="cu-item">
						<view class="cu-avatar round lg" :style="{'background-image':'url('+userItem.avatar+')'}"></view>
						<view class="content flex-sub">
							<!-- 用户名 -->
							<view class="text-grey flex justify-between">
								<view>{{userItem.nickName}}
									<!-- 用户标签 -->
									<view class='cu-tag round line-red lj_margin_left10'>{{userItem.tag}}</view>
								</view>
								<!-- 右侧关注 -->
								<view class="cu-capsule round ">
									<view class='cu-tag bg-gradual-orange'>
										<text class='cuIcon-add '></text>
									</view>
									<view class="cu-tag line-orange">
										关注
									</view>
								</view>
							</view>
							<view class="text-gray text-sm flex justify-between">
								{{userItem.desrc}}
								<!-- <view class="text-gray text-sm">
								<text class="cuIcon-attentionfill margin-lr-xs"></text> 10
								<text class="cuIcon-appreciatefill margin-lr-xs"></text> 20
								<text class="cuIcon-messagefill margin-lr-xs"></text> 30
							</view> -->
							</view>
						</view>
					</view>
				</view>
				<!-- 内容部分 -->
				<view class="text-content bg-white ">
					<view class="margin-lr-sm">
						<text class="text-blue " v-for="(topicItem,topicIndex) in userItem.topic">{{topicItem}} </text>
						{{userItem.contentText}}
					</view>
				</view>
				<!-- 用户发布图片部分 -->

				<view class="grid flex-sub padding-top  margin-lr-xs  grid-square bg-white col-2">
					<view v-for="(imgItem,imgIndex) in userItem.imgList" class="bg-img " :style="{'background-image':'url('+imgItem+')'}">
					</view>
				</view>
				<!-- 分享评论居中 -->
				<view class="text-gray text-lg text-center margin-lr-xs flex justify-between bg-white">
					<view><text class="cuIcon-forwardfill "></text> 分享</view>
					<view><text class="margin-lr-xs">3900</text> 评论</view>
					<view><text class=" margin-lr-xs">3900</text> 点赞</view>

				</view>
				<!-- 分享评论在右 -->

			</block>
		</view>


	</view>
</template>

<script>
	import uniFly from 'unifly';
	uniFly.baseUrl = 'https://www.easy-mock.com/mock/5cbaae65d5d33710e0cc47aa/yiyangapp/';
	// uniFly.headers.common['Authorization'] = AUTH_TOKEN;
	uniFly.headers['Content-Type'] = 'application/x-www-form-urlencoded';
	export default {
		data() {
			return {
				shenf: {},
				// 轮播图数据
				cardCur: 0,
				swiperList: [],
				dotStyle: false,

				// 宫格列表数据
				class_in: [],

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

			// 搜索框
			InputFocus(e) {
				this.InputBottom = e.detail.height
			},
			InputBlur(e) {
				this.InputBottom = 0
			},
			// 选项卡
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
				// 数据请求
			initRequestData(_self){
				var _self=_self
					// 请求轮播图
				var request_advList = uniFly
					.get({
						url: 'social_adv',
						params: null
					})
					.then(function(response) {
						// console.log(response)
						_self.swiperList = response.data.data.swiperList
					})
					.catch(function(error) {
						// console.log(error)
					});
				
				
				// 请求class_in
				var request_classIn = uniFly
					.get({
						url: 'class_in',
						params: null
					})
					.then(function(response) {
						// console.log(response)
						_self.class_in = response.data.data.class_in
					})
					.catch(function(error) {
						// console.log(error)
					});
				
				
				// 请求分类导航
				var request_classNav = uniFly
					.get({
						url: 'class_in',
						params: null
					})
					.then(function(response) {
						// console.log(response)
						_self.class_nav = response.data.data.class_nav
					})
					.catch(function(error) {
						// console.log(error)
					});
				
				//请求某nav下用户文章   !!!!!!!!遇到问题 就是不渲染到页面
				var request_userArticleList = uniFly
					.get({
						url: 'userArticleList',
						params: null
						
					})
					.then(function(response) {
						// console.log(response)	
						_self.userArticleList = response.data.data.userArticleList
						console.log(_self.userArticleList)
					})
					.catch(function(error) {
						console.log(error)
					});
				
				
			},
			
			
			
		},
		
	
		
		
		onLoad(e) {
			var _self = this
	
			// 数据请求
			_self.initRequestData(_self)
			
		
			// 请求class_in
			// uni.request({
			// 	url: "https://www.easy-mock.com/mock/5cbaae65d5d33710e0cc47aa/yiyangapp/class_in", //仅为示例，并非真实接口地址。
			// 	method: "GET",
			// 	header: {
			// 		'content-type': 'application/json' //自定义请求头信息
			// 	},
			// 	success: (res) => {
			// 		this.class_in = res.data.data.class_in
			// 	}
			// });

			// 请求分类
			// return new Promise((res,rej)=>{
			// 	
			// })
			// 			uni.request({
			// 				url: "https://www.easy-mock.com/mock/5cbaae65d5d33710e0cc47aa/yiyangapp/class_nav", //仅为示例，并非真实接口地址。
			// 				method: "GET",
			// 				header: {
			// 					'content-type': 'application/json' //自定义请求头信息
			// 				},
			// 				success: (res) => {
			// 					var result = res.data;
			// 					result.code == 200;
			// 					// resres.data.data.swiperList
			// 					// console.log(res)
			// 					this.class_nav = res.data.data.class_nav
			// 
			// 				}
			// 			});
			//请求某nav下用户文章
			// uni.request({
			// 	url: "https://www.easy-mock.com/mock/5cbaae65d5d33710e0cc47aa/yiyangapp/userArticleList", //仅为示例，并非真实接口地址。
			// 	method: "GET",
			// 	header: {
			// 		'content-type': 'application/json' //自定义请求头信息
			// 	},
			// 	success: (res) => {
			// 		var result = res.data;
			// 		result.code == 200;
			// 		// resres.data.data.swiperList
			// 		// console.log(res)
			// 		this.userArticleList = res.data.data.userArticleList
			// 	}
			// });
		},
	}
</script>

<style lang="scss">
	.box {
		margin: 20upx 0;
	}

	.box view.cu-bar {
		margin-top: 20upx;
	}

	.lj_margin_auto {
		margin: auto;


	}

	.lj_margin_left10 {
		margin-left: 10upx;
	}

	.lj_grid_pic {
		margin: 5upx;
	}

	.lj_class_in {
		margin-top: 0px;
		box-sizing: border-box;
	}
</style>
