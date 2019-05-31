<template>
	<view class="bg-white">
		<!--顶部-->
		<view class="wrap_top ">
			<view class="cu-list menu-avatar">
				<view class="cu-item">
					<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
					<view class="content flex-sub">
						<!-- 用户名 -->
						<view class="text-grey flex justify-between">
							<view>败家女孩橙子
								<!-- 用户标签 -->
								<view class='cu-tag round line-red lj_margin_left10'>时尚达人</view>
							</view>
							<!-- 右侧关注 -->
							<view class="cu-capsule round">
								<text class='cuIcon-settingsfill '></text>
							</view>
						</view>
						<view class="text-gray text-sm flex justify-between">
							专业败家，3年资深搭配师
						</view>
					</view>
				</view>
			</view>
			<view class="padding  text-center  ">
				<view class="padding padding-lr-xl  around bg-white ">
					<view class="user user_b text-center">
						<view>100</view>
						<view>爆料</view>
					</view>
					<view class="user user_g">
						<view>50</view>
						<view>关注</view>
					</view>
					<view class="user user_f text-center">
						<view>199</view>
						<view>粉丝</view>
					</view>
				</view>
			</view>
		</view>


		<view class="cu-list grid no-border " :class="['col-' + 4]" style="padding-top:70px;">
			<view class="cu-item" v-for="(item,index) in iconList" :key="index" >
				<!-- 		<view :class="['cuIcon-' + item.icon,'text-' + item.color]">
					<view class="cu-tag badgea" v-if="item.badge!=0">
						<block v-if="item.badge!=1">{{item.badge>99?'99+':item.badge}}</block>
					</view>
				</view> -->
				<view class="cu-avatar xl round lx_auto"  style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg);" >
					
				</view>
				<view class="text-center">{{item.name}}</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
              iconList: [{
              	icon: 'cardboardfill',
              	
              
              	name: '我的文章'
              }, {
              	icon: 'recordfill',
              	
              	
              	name: '我的评论'
              }, {
              	icon: 'picfill',
              	
              	
              	name: '我的点赞'
              }, {
              	icon: 'noticefill',
              	
              	
              	name: '我的爆料'
              }, {
              	icon: 'upstagefill',
              	
              	
              	name: '邀请有利'
              }, {
              	icon: 'clothesfill',
              	
              	
              	name: '我要赚钱'
              }, {
              	icon: 'discoverfill',
              	
              	
              	name: '联系客服'
              }, {
              	icon: 'questionfill',
              	
              	
              	name: '关于我们'
              }
              ],
              
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	
	.wrap_top {
		position: relative;
		padding-bottom: 80upx;
		border-bottom: 3upx solid #D6D6D6;

		.around {
			border-radius: 40upx;
			width: 92%;
			position: absolute;
			bottom: -60upx;
			border: 3upx solid #D6D6D6;

			.user {
				display: inline-block;
			}

			.user_b {
				float: left;

			}

			.user_f {
				float: right;
			}
		}

	}
	.lx_auto{
		margin:auto;
	}
</style>
