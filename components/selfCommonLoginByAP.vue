<template>
	<view>

		<view class="padding">
			<!-- 手机号表单 -->
			<view class="margin">
				<view class="flex  align-center">
					<view class="flex-sub flex justify-between padding-bottom-sm ljsolid-bottom ljInputPhoneN">
						<view class="flex-treble">
							<input placeholder="请输入手机号/邮箱" :value="user_account" @input="phoneOrEmailInput" name="input" placeholder-class="text-gray"></input>
						</view>
						<view class="flex-sub  text-right  padding-right-xs">
							<view :hidden="UA_emptyHidden" @tap="emptyInput('account')" class=" margin-top-sm  text-lg text-gray cuIcon-roundclosefill"></view>
						</view>
					</view>


				</view>

				<view class="flex  align-center  margin-top-sm">
					<view class="flex-sub justify-between flex padding-bottom-sm ljsolid-bottom ljInputPhoneN">
						<view class="flex-treble">
							<input placeholder="请输入密码" :password="!isEyeOn" type="text" :value="user_paswd" @input="paswdInput" name="input"
							 placeholder-class="text-gray"></input>
						</view>
						<!-- 		<view class="flex-sub flex justify-between text-right  ">
							<view :hidden="UP_emptyHidden" @tap="emptyInput('paswd')" class=" margin-top-sm   text-lg text-gray cuIcon-roundclosefill"></view>
							<view class="ljPawd " @tap="changeEyeStatus">
								<image mode="" :src="isEyeOn?eyeList.on:eyeList.off" />
							</view>
						</view> -->
						<view class="ljPawd " @tap="changeEyeStatus">
							<image mode="" :src="isEyeOn?eyeList.on:eyeList.off" />
						</view>
					</view>
				</view>

				<!-- 登录注册协议 -->
				<view class="flex-sub text-right">
					<view class=" text-xs padding padding-lr-sm">
						<text class="text " @tap="forgetPaswd">忘记密码</text>
					</view>

				</view>
			</view>
		</view>

		<!-- 底部登录按钮 -->
		<view class="ljBottomButton  ">
			<view class=" ljButtHelp flex justify-center  text-white text-center padding-tb" 
			:class="enableLogin?'bg-red':''">
				登录
			</view>
		</view>
	</view>
</template>

<script>
	export default {

		name: "selfCommonLoginByAP",

		created() {

		},
		props: {

		},
		data() {
			return {

				isEyeOn: false,
				eyeList: {
					on: '/static/img/loginReg/eye_on.png',
					off: "/static/img/loginReg/eye-closed.png"
				},
				user_account: "",
				user_paswd: "",
				UA_emptyHidden: true,
				UP_emptyHidden: true,
				enableLogin: false
			};
		},
		mounted() {

		},
		methods: {
			// 密码可见不可见
			changeEyeStatus() {
				this.isEyeOn = !this.isEyeOn;

			},
			phoneOrEmailInput(e) {
				this.user_account = e.detail.value;
				if (this.user_account.length > 0) {
					this.UA_emptyHidden = false
				} else {
					this.UA_emptyHidden = true;
				}

			},
			paswdInput(e) {
				this.user_paswd = e.detail.value;
				if (this.user_paswd.length > 0) {
					this.UP_emptyHidden = false;
				} else {
					this.UP_emptyHidden = true;
				}

				if (this.user_account.length > 0 && this.user_paswd.length > 0) {
			
					this.enableLogin = true
							console.log(this.enableLogin)
				} else {
					this.enableLogin = false
				}

			},
			emptyInput(e) {
				if (e == 'account') {
					this.user_account = "";
					this.UA_emptyHidden = true;
				} else {
					this.user_paswd = "";
					this.UP_emptyHidden = true;
				}
				this.enableLogin = false
			},
			forgetPaswd() {
				uni.showToast({
					title: "忘记密码被点击"
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #fff;
	}

	// 手机号
	.ljInputPhoneN {
		margin-right: 28upx;
	}

	.ljUserXy {
		text-decoration: underline; //下划线
	}

	.lj_cu-btn {
		border-radius: 4upx;
	}

	.ljsolid-bottom {
		border-bottom: 1px solid #eee;


	}

	.ljPawd {
		width: 45upx;
		height: 45upx;
		margin-top: 10upx;
		padding-top: 4upx;

		image {
			width: 100%;
			height: 100%;
		}
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
		height: 44px;
		.ljButtHelp {
			width: 100%;
			height: 100%;
			background-color: #ccc;
			// opacity: 0.35;
		}

	}
</style>
