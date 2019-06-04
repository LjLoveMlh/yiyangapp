<template>
	<view class='bg-white'>
		<!-- 头部 背景-->
		<selfCommonLRHeader :datalist='headerList' />
		<!-- 表单部分 -->
		<selfCommonLRform />
		<!-- 第三方账号 -->
		<selfCommonThirdLogin />
		<!-- 底部登录按钮 -->
		<!-- <selfCommonLoginButton /> -->
	</view>
</template>

<script>
	// 注册登录头部
	import selfCommonLRHeader from '@/components/selfCommonLRHeader.vue'
	// 表单部分
	import selfCommonLRform from '@/components/selfCommonLRform.vue'
	// 第三方登录
	import selfCommonThirdLogin from '@/components/selfCommonThirdLogin.vue'
	
		// 底部按钮
	import selfCommonLoginButton from '@/components/selfCommonLoginButton.vue'
	
	// selfCommonLoginButton
	export default {
		components: { //2注册组件
			selfCommonLRHeader,
			selfCommonLRform,
			selfCommonThirdLogin,
			selfCommonLoginButton
		},

		data() {
			return {
			
				headerList:{
					one:"手机快捷登录",
					second:"账号密码登录"
				}
			};
		},
		methods: {
		
			
		}
	}
</script>

<style lang="scss">
	
</style>
