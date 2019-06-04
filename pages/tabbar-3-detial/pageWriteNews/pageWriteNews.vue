<template>
	<view>
		<!-- 爆料商品链接 -->

		<selfBHLtextarea />


		<!-- 爆料内容分类picker -->
		<selfBHLpicker />



		<!-- 爆料配图 -->
		<selfBHLchooseImg />
		<!-- 按钮和文本 -->
		<selfBHLbuttonText />



		<!-- 爆料流程 -->

		<selfBHLsteps />

	</view>
	</view>
</template>

<script>
	// 粘贴文本组件
	import selfBHLtextarea from '@/components/selfBHLtextarea.vue'

	// 爆料picker组件
	import selfBHLpicker from '@/components/selfBHLpicker.vue'
	// 爆料img选择组件
	import selfBHLchooseImg from '@/components/selfBHLchooseImg.vue'
	// 爆料按钮和文本组件
	import selfBHLbuttonText from '@/components/selfBHLbuttonText.vue'
	// 爆料流程组件
	import selfBHLsteps from '@/components/selfBHLsteps.vue'


	export default {
		components: { //2注册组件
			selfBHLsteps,
			selfBHLtextarea,
			selfBHLpicker,
			selfBHLchooseImg,
			selfBHLbuttonText
		},
		data() {
			return {
				modalName: null,

				basicsList: [{
					icon: 'usefullfill',
					name: '复制链接'
				}, {
					icon: 'radioboxfill',
					name: '完善信息'
				}, {
					icon: 'roundclosefill',
					name: '等待审核'
				}]
			};
		},
		methods: {





		}
	}
</script>

<style lang="scss" scoped="">


</style>
