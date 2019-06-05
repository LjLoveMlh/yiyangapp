<template>
	<view class="bg-white">
		<!-- 状态栏 -->
		<view class="nav_bar"></view>

		<!-- 导航栏 -->
		<view class="reNav_bar padding-lr-sm flex justify-between bg-white   solid-bottom ">
			<view class="barLeft flex  padding-tb-sm  align-center">
				<text class=" margin-left-xs ljtext-xl text-bold cuIcon-back_android " @tap="goBack"> </text>
				<view class="margin-left ljtext-xl text-black">写文章</view>
			</view>
			<view class="barRight flex  justify-between padding-tb-sm  text-lg align-center text-black">
				<view class="margin-right-sm">保存</view>
				<view>下一步</view>
			</view>
		</view>


		<!--标题输入  -->
		<view class="bg-white ">
			<view class="ljTextAreaFa padding-tb-lg margin-lr   padding-bottom-sm " @tap="focusipt">
				<view class="margin-lr-xs solid-bottom padding-bottom-sm solids">
					<textarea @input="textareaAInput" placeholder-class='PH_articleTitle' :focus="isfocus" class="ljTextArea align-center  solids"
					 auto-height='true' maxlength="35" placeholder="输入标题18字左右阅读体验最佳" rows=1 name=s1 cols=2 onpropertychange="this.style.posHeight=this.scrollHeight "></textarea>
					<view class="text-right margin-top-sm text-sm">你还能输入<text class="text-red">35</text>字</view>
				</view>

			</view>
		</view>


		<!-- 分类选择 -->
		<view class="cu-form-group " style="border-top: none;">
			<view class="title">选择话题</view>
			<picker @change="PickerChangeTopic" :value="topicIndex" :range="pickerTopic">
				<view class="picker " :class="topicIndex>-1?'':'text-gray'">
					{{topicIndex>-1?pickerTopic[topicIndex]:'请选择话题'}}
				</view>

			</picker>
		</view>


		<!-- 编辑器 -->
		<view class="page-body ">
			<ly-markdown :showPreview="showPreview" :textareaData.sync="textareaData" :textareaHtml.sync="textareaHtml"></ly-markdown>
		</view>

	</view>
</template>

<script>
	import lyMarkdown from '@/components/ly-markdown/ly-markdown.vue'
	export default {
		components: {
			lyMarkdown
		},
		data() {
			return {
				textareaData: "",
				textareaHtml: "",
				showPreview: false,
				name: '七月_',


				textareaAValue: null,
				isfocus: false,

				classIndex: -1,
				topicIndex: -1,
				pickerClass: ['', '京东', '淘宝', '拼多多'],
				pickerTopic: ['', '值得买', '好物分享', '白菜折扣价'],
			};
		},
		watch: {
			"textareaData": function() {
				this.showPreview = true;
			}
		},
		methods: {
			goBack() {
				uni.navigateBack({

				})
			},
			focusipt() {
				this.isfocus = true;
			},
			// 粘贴文本
			textareaAInput(e) {
				this.textareaAValue = e.detail.value
			},



			// 选择分类
			PickerChangeClass(e) {
				this.classIndex = e.detail.value
			},
			// 选择话题
			PickerChangeTopic(e) {
				this.topicIndex = e.detail.value
			}
		}
	}
</script>

<style lang="scss" scoped="">
	// 导航-=
	.nav_bar {
		position: sticky;
		top: 0;
		height: var(--status-bar-height);
		background: #fff;
		z-index: 9999;
	}

	.reNav_bar {
		height: 88upx;

		.ljtext-xl {
			font-size: 40upx;
		}
	}


	// 文章标题
	// 顶部textArea
	.ljTextAreaFa {
		// padding-top: 80upx;
		height: 50upx;

		.ljTextArea {
			width: 100%;

		}


	}



	.input-content {
		width: 100%;
	}

	.input-content textarea {
		padding: 16upx 25upx 15upx 25upx;
		font-size: 30upx;
		min-height: 500upx;
		line-height: 1.5;
	}

	.preview {
		border-top: 1upx solid #e0e0e0;
		width: 100%;
	}

	.toolbar {
		width: 100%;
		border: none;
		box-shadow: 0 0upx 4upx rgba(0, 0, 0, 0.157), 0 0upx 4upx rgba(0, 0, 0, 0.227);
	}

	.toolbar .iconfont {
		display: inline-block;
		cursor: pointer;
		height: 61.6upx;
		width: 61.6upx;
		margin: 13upx 0 11upx 0upx;
		font-size: 33upx;
		padding: 10upx 13upx 11upx 8upx;
		color: #757575;
		border-radius: 11upx;
		text-align: center;
		background: none;
		border: none;
		outline: none;
		line-height: 2.2;
		vertical-align: middle;
	}
</style>
