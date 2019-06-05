<template>
	<view>
		<view class="padding">
			<!-- 手机号表单 -->
			<view class="margin">
				<view class="flex  align-center">
					<view class="flex-twice padding-bottom-sm ljsolid-bottom ljInputPhoneN">
						<input placeholder="请输入手机号码" :focus="isFocus_phone" name="input" @input="phoneInput" :value="value_phone"
						 placeholder-class="text-gray"></input>
					</view>
					<view class="flex-sub">
						<button class='cu-btn lj_cu-btn bg-red '>获取验证码</button>
					</view>
				</view>

				<view class="flex  align-center margin-top-sm">
					<view class="flex-sub padding-bottom-sm ljsolid-bottom ljInputPhoneN">

						<input placeholder="请输入验证码" @input="tokenInput" :value="value_token" :focus="isFocus_token" name="input"
						 placeholder-class="text-gray"></input>
					</view>

				</view>

				<!-- 登录注册协议 -->
				<view class="flex-sub text-center">
					<view class=" text-xs padding padding-lr-xs">
						<text class="text text-gray"> 未注册的手机号登陆时将自动注册，且代表您已同意<text class="ljUserXy">用户协议</text></text>
					</view>

				</view>
			</view>
		</view>
		<!-- 底部登录按钮 -->
		<view class="ljBottomButton  ">
			<view class=" ljButtHelp flex justify-center bg-grey text-white text-center">
				登录
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value_phone: "",
				value_token: "",
				isFocus_phone: false,
				isFocus_token: false
			};
		},
		name: "selfCommonLRform",
		props: {
			// datalist: {
			// 	type: Array,
			// 	default: () => []
			// }
		},
		created() {

		},
		methods: {
			phoneInput(e) {
				this.isFocus_phone=true;
				this.value_phone = e.detail.value;
			},
			tokenInput(e) {
				this.isFocus_token=true;
				this.value_token = e.detail.value;
			}
		}
	}
</script>

<style lang="scss">
	// 手机号
	.ljInputPhoneN {
		margin-right: 28upx;
	}

	.ljUserXy {
		text-decoration: underline; //下划线

		// text-decoration:line-through;//删除线
	}

	.lj_cu-btn {

		border-radius: 4upx;
	}

	.ljsolid-bottom {
		border-bottom: 1px solid #eee;
	}

	// 底部按钮
	.ljBottomButton {
		left: 0;
		right: 0;
		font-size: 28upx;
		position: fixed;
		bottom: 0;
		display: flex;
		width: 100%;
		height: 50px;

		.ljButtHelp {
			width: 100%;
			height: 100%;
			background-color: #ccc;
			display: flex;
			align-items: center;
			// opacity: 0.35;
		}

	}
</style>
