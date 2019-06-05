<template>
	<view>
		<view class="cu-bar bg-white margin-top-xs">
			<view class="action">
				选择配图
			</view>
			<view class="action">
				{{imgList.length}}/9
			</view>
		</view>
		<view class="cu-form-group">
			<view class="grid col-3 grid-square flex-sub">
				<view class="bg-img" v-for="(item,index) in imgList" :key="index" @tap="ViewImage" :data-url="imgList[index]">
					<image :src="imgList[index]" mode="aspectFill"></image>
					<view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
						<text class='cuIcon-close'></text>
					</view>
				</view>
				<view class="solids" @tap="ChooseImage" v-if="imgList.length<9">
					<text class='cuIcon-cameraadd'></text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgList: [],
			};
		},
		name: "selfBHLchooseImg",
		props: {
			// datalist: {
			// 	type: Array,
			// 	default: () => []
			// }
		},
		created() {

		},
		methods: {
			ChooseImage() {
				uni.chooseImage({
					count: 9, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: (res) => {
						if (this.imgList.length != 0 && this.imgList.length < 9) {
							if (res.tempFilePaths.length <= 9 - this.imgList.length) {
								this.imgList = this.imgList.concat(res.tempFilePaths)
							} else {
								uni.showModal({
									title: '提示',
									content: '您选择的图片超过最大数量',
									confirmText:"我知道了",
									showCancel:false,
									success: function(res) {
										if (res.confirm) {
											// console.log('用户点击确定');
										} else if (res.cancel) {
											// console.log('用户点击取消');
										}
									}
								});
							}

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
					title: '提示',
					content: '确定删除该图片吗',
					cancelText: '点错了',
					confirmText: '确定删除',
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

<style lang="scss">

</style>
