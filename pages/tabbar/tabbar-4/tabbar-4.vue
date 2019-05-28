<template>
	<view>
		<view class="wrap-top">
			<view class="message-top margin-lr-xs">
				<text class="cuIcon-settingsfill"></text>
				消息设置
			</view>
			<view>
				<view class="flex  padding justify-between">
					<block v-for="(item,index) in iconList">
						<view class="  margin-xs radius">
							<view class="cu-item" :key="index">
								<view class="cu-avatar radius solid bg-white tutu">
									<view :class="['cuIcon-' + item.icon]">
									</view>
								</view>

								<view class="text-center">{{item.dian}}</view>
							</view>
						</view>
					</block>

					<!-- 	<view class="bg-grey padding-sm margin-xs radius">

					</view>
					<view class="bg-grey padding-sm margin-xs radius">

					</view> -->
				</view>
			</view>
			<view class="cu-list menu-avatar">
				<view class="cu-item grayscale">
					<view class="cu-avatar lg round bg-white text-gray solids"><text class="cuIcon-noticefill"></text></view>
					<view class="content">
						<view>
							<text class="text-cut">系统通知</text>
						</view>
						<view class="text-gray text-sm flex"> <text class="text-cut">您好，欢迎使用app</text></view>
					</view>
				</view>
				<view class="cu-item grayscale">
					<view class="cu-avatar lg round bg-white text-gray solids"><text class="cuIcon-upload"></text></view>
					<view class="content">
						<view>
							<text class="text-cut">推送消息</text>
						</view>
						<view class="text-gray text-sm flex"> <text class="text-cut">618，全民狂欢节</text></view>
					</view>
				</view>
			</view>
		</view>
		<view class="cu-list menu-avatar comment solids-top">
			<view class="cu-item">
				<view class="cu-avatar round" @tap="showModal" data-target="Modal" style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png);"></view>
				<view class="content">
					<view class="text-grey">红尘货</view>
					<view class="text-gray text-content text-df">
						评论了你的文章
						<view class="datatime">1天前</view>
					</view>
					<view>有一章3元券可以叠加，本来不想下单的，结果...</view>
					<view class="textual padding-sm ">
						<text class="cuIcon-forwardfill"></text>
						<text class="text-left">原文：南国 开心椰球 榴莲味 100g</text>
					</view>

					<view>
						<view class="cu-modal" :class="modalName=='Modal'?'show':''">
							<view class="cu-dialog">
								<view class="cu-bar bg-white justify-end">
									<view class="content">Modal标题</view>
									<view class="action" @tap="hideModal">
										<text class="cuIcon-close text-red"></text>
									</view>
								</view>
								<view class="padding-xl">
									Modal 内容。
								</view>
							</view>
						</view>
					</view>

					<!--
					<view class="margin-top-sm flex justify-between">
						<view class="text-gray text-df">2018年12月4日</view>
						<view>
							<text class="cuIcon-appreciatefill text-red"></text>
							<text class="cuIcon-messagefill text-gray margin-left-sm"></text>
						</view>
					</view>
					* -->
				</view>
			</view>
			<view class="cu-item">
				<view class="cu-avatar round" @tap="showModal" data-target="Modal" style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png);"></view>
				<view class="content">
					<view class="text-grey">红尘货</view>
					<view class="text-gray text-content text-df">
						评论了你的文章
						<view class="datatime">1天前</view>
					</view>
					<view>有一章3元券可以叠加，本来不想下单的，结果...</view>
					<view class="textual padding-sm ">
						<text class="cuIcon-forwardfill"></text>
						<text class="text-left">原文：南国 开心椰球 榴莲味 100g</text>
					</view>

					<view>
						<view class="cu-modal" :class="modalName=='Modal'?'show':''">
							<view class="cu-dialog">
								<view class="cu-bar bg-white justify-end">
									<view class="content">Modal标题</view>
									<view class="action" @tap="hideModal">
										<text class="cuIcon-close text-red"></text>
									</view>
								</view>
								<view class="padding-xl">
									Modal 内容。
								</view>
							</view>
						</view>
					</view>

					<!--
					<view class="margin-top-sm flex justify-between">
						<view class="text-gray text-df">2018年12月4日</view>
						<view>
							<text class="cuIcon-appreciatefill text-red"></text>
							<text class="cuIcon-messagefill text-gray margin-left-sm"></text>
						</view>
					</view>
					* -->
				</view>
			</view>


			<view class="cu-item">
				<view class="cu-avatar round" @tap="showModal" data-name="liuxing" data-target="Modal" style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png);"></view>
				<view class="content">
					<view class="text-grey">红尘货</view>
					<view class="text-gray text-content text-df">
						评论了你的文章
						<view class="datatime">1天前</view>
					</view>
					<view>有一章3元券可以叠加，本来不想下单的，结果...</view>
					<view class="textual padding-sm ">
						<text class="cuIcon-forwardfill"></text>
						<text class="text-left">原文：南国 开心椰球 榴莲味 100g</text>
					</view>

					<view>
						<view class="cu-modal" :class="modalName=='Modal'?'show':''">
							<view class="cu-dialog">
								<view class="cu-bar bg-white justify-end">
									<view class="content">Modal标题</view>
									<view class="action" @tap="hideModal">
										<text class="cuIcon-close text-red"></text>
									</view>
								</view>
								<view class="padding-xl">
									Modal 内容。
								</view>
							</view>
						</view>
					</view>

					<!--
					<view class="margin-top-sm flex justify-between">
						<view class="text-gray text-df">2018年12月4日</view>
						<view>
							<text class="cuIcon-appreciatefill text-red"></text>
							<text class="cuIcon-messagefill text-gray margin-left-sm"></text>
						</view>
					</view>
					* -->
				</view>
			</view>



		</view>




	</view>
</template>

<script>
	export default {
		data() {
			return {
				modalName: null,
				iconList: [{
						icon: "appreciatefill",
						dian: "点赞"
					},
					{
						icon: "group",
						dian: "粉丝"
					},
					{
						icon: "messagefill",
						dian: "评论和@"
					}
				]
			}
		}
	,
	methods: {
		showModal(e) {
			console.log(e)
			this.modalName = e.currentTarget.dataset.target
		},
		hideModal(e) {
			this.modalName = null
		}
	}
	}
</script>

<style lang="scss">
	.wrap-top {
		background-color: white;
	}

	.tutu {
		padding:50upx;
		
	}

	.message-top {
		text-align: right;
		line-height: 80upx;
		text {
			margin-right: 16upx;
		}
	}

	

	.datatime {
		display: inline-block;
		float: right;
	}

	.textual {
		margin-top: 16upx;
		border: 2upx solid #D6D6D6;
		background-color:#F8F8F8;
		 .text-left {
			margin-left: 16upx;
		}
	}

</style>
