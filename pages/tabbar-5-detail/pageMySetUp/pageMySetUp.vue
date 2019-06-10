<template>
	<view>
		<!--各种设置选项 -->
		<view class="margin-tb-sm"> 
			<view class="cu-form-group">
				<view class="title">个人资料设置</view>
				<view class="action">
					<text class="cuIcon-right"> </text>
				</view>
			</view>
			<view class="cu-form-group">
				<view class="title">
					<view>推送设置</view>
					<view class=" text-sm">关注推送，每日精选推送，签到提醒，安静时间段等</view>
				</view>
				<view class="action">
					<text class="cuIcon-right"> </text>
				</view>
			</view>


			<view class="cu-form-group">
				<view class="title">辅助设置</view>
				<view class="action">
					<text class="cuIcon-right"> </text>
				</view>
			</view>

			<view class="cu-form-group">
				<view class="title">移动网络图片质量</view>
				<view class="action">
					高清<text class="margin-left-sm cuIcon-right"> </text>
				</view>
			</view>

			<view class="cu-form-group">
				<view class="title">账号与安全</view>
				<view class="action">
					<text class="cuIcon-right"> </text>
				</view>
			</view>


			<view class="cu-form-group">
				<view class="title">隐私设置</view>
				<view class="action">
					<text class="cuIcon-right"> </text>
				</view>
			</view>



			<view class="cu-form-group">
				<view class="title">清除缓存</view>
				<view class="action">
					<text>76.25MB</text>
				</view>
			</view>

			<view class="cu-form-group">
				<view class="title">辅助设置</view>
				<view class="action">
					<text class="cuIcon-right"> </text>
				</view>
			</view>

			<view class="cu-form-group">
				<view class="title">首页内容智能排序</view>
				<switch class='red' @change="SwitchB" :class="switchB?'checked':''" :checked="switchB?true:false"></switch>
			</view>

			<view class="cu-form-group">
				<view class="title">关于本产品</view>
				<view class="action">
					<text class="cuIcon-right"> </text>
				</view>
			</view>




		</view>



		<!-- 退出按钮 -->
		<view class="padding flex flex-direction shadow-lg">
			<button class="cu-btn lg bg-red margin-tb-sm">退出登录</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped="">
page{
	background-color: #b3b3b3;
}
</style>
