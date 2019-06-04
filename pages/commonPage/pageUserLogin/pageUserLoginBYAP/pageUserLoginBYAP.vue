<template>
	<view>
		<!-- 头部 -->
		<selfCommonLRHeader :datalist='headerList' />

		<!-- form表单 -->
		<selfCommonLoginByAP />

		<!-- 登录按钮 -->
	<!-- 	<selfCommonLoginButton /> -->

	</view>
</template>

<script>
	// 注册登录头部
	import selfCommonLRHeader from '@/components/selfCommonLRHeader.vue'
	// 账号密码登录组件
	import selfCommonLoginByAP from '@/components/selfCommonLoginByAP.vue'
	// 底部按钮
	import selfCommonLoginButton from '@/components/selfCommonLoginButton.vue'
	// selfCommonLoginByAP
	export default {
		components: { //2注册组件
			selfCommonLRHeader,
			selfCommonLoginByAP,
			selfCommonLoginButton
		},
		data() {
			return {
				headerList: {
					one: "账号密码登录",
					second: ""
				},
			};
		}

	}
</script>

<style lang="scss" scoped="">

</style>
