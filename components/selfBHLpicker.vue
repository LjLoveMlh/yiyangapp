<template>
	<view>
		<view class="cu-form-group margin-top-xs">
			<view class="title">选择分类</view>
			<picker @change="PickerChangeClass" :value="classIndex" :range="pickerClass">
				<!-- 	<view class="picker">
					{{classIndex>-1?[classIndex]:'请选择分类'}}
				</view> -->
				<view class="picker " :class="classIndex>-1?'':'text-gray'">
					{{classIndex>-1?pickerClass[classIndex]:'请选择分类'}}
				</view>
				<!-- <view class="picker text-gray" v-if="classIndex=-1">
					请选择分类
				</view> -->
			<!-- 	<view class="picker " v-if="classIndex>-1">
					{{pickerClass[topicIndex]}}
				</view> -->
			</picker>

		</view>
		<view class="cu-form-group " style="border-top: none;">
			<view class="title">选择话题</view>
			<picker @change="PickerChangeTopic" :value="topicIndex" :range="pickerTopic">
				<view class="picker " :class="topicIndex>-1?'':'text-gray'">
					{{topicIndex>-1?pickerTopic[topicIndex]:'请选择话题'}}
				</view>
				
			</picker>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				classIndex: -1,
				topicIndex: -1,
				pickerClass: ['','京东', '淘宝', '拼多多'],
				pickerTopic: ['','值得买', '好物分享', '白菜折扣价'],
			};
		},

		name: "selfBHLpicker",
		props: {
			// datalist: {
			// 	type: Array,
			// 	default: () => []
			// }
		},
		created() {

		},
		methods: {
			// 选择分类
			PickerChangeClass(e) {
				this.classIndex = e.detail.value
			},
			// 选择话题
			PickerChangeTopic(e) {
				this.topicIndex = e.detail.value
			},
		}
	}
</script>

<style lang="scss">

</style>
