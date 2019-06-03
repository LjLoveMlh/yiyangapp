<template>
	<view>

		<view class="bg-white">
			<!-- 爆料商品链接 -->
			<view class="ljTextAreaFa margin-lr  solid-bottom padding-bottom-sm">
				<!-- <textarea maxlength="-1" :disabled="modalName!=null" @input="textareaAInput" placeholder="在这里粘贴爆料商品链接"></textarea> -->

				<textarea placeholder-class='textPlaceHolder' class="ljTextArea align-center" auto-height='true' maxlength="-1"
				 placeholder="在这里粘贴爆料商品链接" rows=1 name=s1 cols=100 onpropertychange="this.style.posHeight=this.scrollHeight "></textarea>
			</view>


			<!-- 爆料内容分类 -->
			<view class="cu-form-group margin-top">
				<view class="title">普通选择</view>
				<picker @change="PickerChange" :value="index" :range="picker">
					<view class="picker">
						{{index>-1?picker[index]:'禁止换行，超出容器部分会以 ... 方式截断'}}
					</view>
				</picker>
			</view>

			<view class="cu-form-group margin-top">
				<view class="title">普通选择</view>
				<picker @change="PickerChange" :value="index" :range="picker">
					<view class="picker">
						{{index>-1?picker[index]:'禁止换行，超出容器部分会以 ... 方式截断'}}
					</view>
				</picker>
			</view>


			<view class="cu-bar bg-white margin-top">
				<view class="action">
					图片上传
				</view>
				<view class="action">
					{{imgList.length}}/4
				</view>
			</view>
			<view class="cu-form-group">
				<view class="grid col-4 grid-square flex-sub">
					<view class="bg-img" v-for="(item,index) in imgList" :key="index" @tap="ViewImage" :data-url="imgList[index]">
						<image :src="imgList[index]" mode="aspectFill"></image>
						<view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
							<text class='cuIcon-close'></text>
						</view>
					</view>
					<view class="solids" @tap="ChooseImage" v-if="imgList.length<4">
						<text class='cuIcon-cameraadd'></text>
					</view>
				</view>
			</view>
			<!-- 按钮和文本 -->
			<view class="box solid-top padding-tb-lg">

				<view class="cu-bar  flex justify-center">
					<button class="cu-btn   bg-red shadow round lg text-df">粘贴并获取信息</button>
				</view>
				<view class="flex-sub text-center">
					<view class=" text-df padding-tb-xs padding-lr">专注视觉的小程序组件库</view>
				</view>
				<view class="flex-sub text-center">
					<view class=" text-df text-red padding-lr padding-tb-xs">
						<view class="cuIcon-info"><text class="margin-left-sm">查看规则</text></view>
					</view>
				</view>
			</view>



			<!-- 爆料流程 -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				modalName: null,
				index: -1,
				picker: ['喵喵喵', '汪汪汪', '哼唧哼唧'],
				imgList: []
			};
		},
		methods: {

			// 粘贴文本
			textareaAInput(e) {
				this.textareaAValue = e.detail.value
			},

			// 选择分类
			PickerChange(e) {
				this.index = e.detail.value
			},
			ChooseImage() {
				uni.chooseImage({
					count: 4, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: (res) => {
						if (this.imgList.length != 0) {
							this.imgList = this.imgList.concat(res.tempFilePaths)
						} else {
							this.imgList = res.tempFilePaths
						}
					}
				});
			},
			ViewImage(e) {
				uni.previewImage({
					urls: this.imgList,
					current: e.currentTarget.dataset.url
				});
			},
			DelImg(e) {
				uni.showModal({
					title: '召唤师',
					content: '确定要删除这段回忆吗？',
					cancelText: '再看看',
					confirmText: '再见',
					success: res => {
						if (res.confirm) {
							this.imgList.splice(e.currentTarget.dataset.index, 1)
						}
					}
				})
			},
		}
	}
</script>

<style lang="scss" scoped="">
	// 顶部textArea
	.ljTextAreaFa {
		padding-top: 100upx;


		.ljTextArea {
			width: 100%;

		}

		.textPlaceHolder {
			font-size: 24upx;
		}
	}
</style>
