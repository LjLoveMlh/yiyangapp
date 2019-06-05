<template>
	<view>
		<view class="ljQuickLogin bg-white">
			<view class="quick_login_line">
				<view class="line" />
				<text class="text ">使用合作账号登录</text>
				<view class="line" />
			</view>
			<view class="quick_login_list">
				<image @tap="thirdLogin('weibo')" class="item" :src="imgInfo.weibo" />
				<image @tap="thirdLogin('wechat')" class="item" :src="imgInfo.wechat" />
				<image @tap="thirdLogin('qq')" class="item" :src="imgInfo.qq" />
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgInfo: {
					qq: '/static/img/loginReg/qq.png',
					wechat: '/static/img/loginReg/wechat.png',
					weibo: '/static/img/loginReg/weibo.png'
				},
			};
		},
		name: "selfCommonThirdLogin",
		props: {
			// datalist: {
			// 	type: Array,
			// 	default: () => []
			// }
		},
		created() {

		},
		methods:{
				thirdLogin(type) {
				console.log(type)
			},
		}
	}
</script>

<style lang="scss">
	// 第三方登录

	.ljQuickLogin {
		position: absolute;
		bottom:66px;
		width: 100%;
		.quick_login_line {
			margin-top: 40px;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;

			.line {
				height: 1px;
				width: 20%;
				margin-left: 20upx;
				margin-right: 20upx;
				background-color: rgba(211, 211, 213, 1);
			}

			.text {
				font-size: 12px;
				color: rgba(200, 200, 200, 1);
				margin: 2px;
			}
		}

		.quick_login_list {
			margin-top: 30upx;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;

			.item {
				width: 50px;
				height: 50px;
				margin: 20px;
			}
		}
	}
</style>
