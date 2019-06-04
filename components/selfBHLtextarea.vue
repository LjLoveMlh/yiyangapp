<template>
	<view>
		<view class="bg-white">
			<view class="ljTextAreaFa margin-lr  solid-bottom padding-bottom-sm " @tap="focusipt">
				<textarea @input="textareaAInput" placeholder-class='textPlaceHolder' :focus="isfocus" class="ljTextArea align-center" auto-height='true' maxlength="-1"
				 placeholder="在这里粘贴爆料商品链接" rows=1 name=s1 cols=100 onpropertychange="this.style.posHeight=this.scrollHeight "></textarea>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				textareaAValue:null,
				isfocus:false,
			};
		},
		name: "selfBHLtextarea",
		props: {
			// datalist: {
			// 	type: Array,
			// 	default: () => []
			// }
		},
		created() {
		
		},
		methods:{
			focusipt(){
				this.isfocus=true;
			},
				// 粘贴文本
			textareaAInput(e) {
				this.textareaAValue = e.detail.value
			},
		}
		
	}
</script>

<style lang="scss"  scoped="">
// 顶部textArea
	.ljTextAreaFa {
		padding-top: 200upx;


		.ljTextArea {
			width: 100%;

		}

		.textPlaceHolder {
			font-size: 24upx;
		}
	}
</style>
