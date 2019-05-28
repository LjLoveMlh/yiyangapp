<template>
	<view class="bg-white">
		<view class="">
			<view class=" cu-list col-4 grid no-border radius bg-white solids" style="padding-bottom:0upx;">
				<view class="cu-item text-center " v-for="(item,index) in iconList">
					<view class="cu-avatar xl round lj_margin_auto pic-fu ">
						<view :class="['cuIcon-' + item.icon]">
						</view>
						<view class="pic-zi ">
							<text :class="['cuIcon-' + item.iconf]">
							</text>
						</view>
					</view>
					<view class="text-center">
						<text>{{item.name}}</text>
					</view>
				</view>
			</view>
		</view>


		<view class="bg-white">
			<view class="cu-list menu-avatar">
				<view class="cu-item">
					<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
					<view class="content flex-sub">
						<!-- 用户名 -->
						<view class="text-grey flex justify-between">
							<view>败家女孩橙子
								<!-- 用户标签 -->
								<view class='cu-tag round line-red lj_margin_left10'>时尚达人</view>
							</view>
							<!-- 右侧关注 -->
							<view class="cu-capsule round">
								<view class="cu-tag bg-gradual-orange">
									<text class='cuIcon-add '></text>
								</view>
								<view class="cu-tag line-orange">
									关注
								</view>
							</view>
						</view>
						<view class="text-gray text-sm flex justify-between">
							专业败家，3年资深搭配师
							<!-- <view class="text-gray text-sm">
								<text class="cuIcon-attentionfill margin-lr-xs"></text> 10
								<text class="cuIcon-appreciatefill margin-lr-xs"></text> 20
								<text class="cuIcon-messagefill margin-lr-xs"></text> 30
							</view> -->
						</view>
					</view>
				</view>
			</view>
		</view>


		<!-- 内容部分 -->
		<view class="text-content bg-white ">
			<view class="margin-lr-sm">
				<text class="text-blue "> #麦迪娜生子# </text>
				今天姜潮微博官宣布喜讯爱妻麦迪娜顺利产子，图2中姜潮和麦迪娜手比成心将宝宝的小手放在中间，满屏的幸福感！！！话说宝宝好会挑
			</view>
		</view>
		<view class="grid flex-sub padding-top  margin-lr-xs  grid-square bg-white col-3">
			<view class="bg-img " style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"
			 v-for="(item,index) in 3" :key="index">
			</view>


			<!-- 分享评论居中 -->
		</view>
		<view class="text-gray text-lg text-center margin-lr-xs flex justify-between bg-white bot-pa">
			<view><text class="cuIcon-forwardfill "></text> 分享</view>
			<view><text class="margin-lr-xs">3900</text> 评论</view>
			<view><text class="margin-lr-xs">3900</text> 评论</view>
		</view>


		<view class="bg-white">
			<view class="cu-list menu-avatar">
				<view class="cu-item">
					<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
					<view class="content flex-sub">
						<!-- 用户名 -->
						<view class="text-grey flex justify-between">
							<view>败家女孩橙子
								<!-- 用户标签 -->
								<view class='cu-tag round line-red lj_margin_left10'>时尚达人</view>
							</view>
							<!-- 右侧关注 -->
							<view class="cu-capsule round">
								<view class="cu-tag bg-gradual-orange">
									<text class='cuIcon-add '></text>
								</view>
								<view class="cu-tag line-orange">
									关注
								</view>
							</view>
						</view>
						<view class="text-gray text-sm flex justify-between">
							专业败家，3年资深搭配师
							<!-- <view class="text-gray text-sm">
								<text class="cuIcon-attentionfill margin-lr-xs"></text> 10
								<text class="cuIcon-appreciatefill margin-lr-xs"></text> 20
								<text class="cuIcon-messagefill margin-lr-xs"></text> 30
							</view> -->
						</view>
					</view>
				</view>
			</view>
		</view>


		<!-- 内容部分 -->
		<view class="text-content bg-white ">
			<view class="margin-lr-sm">
				<text class="text-blue "> #麦迪娜生子# </text>
				今天姜潮微博官宣布喜讯爱妻麦迪娜顺利产子，图2中姜潮和麦迪娜手比成心将宝宝的小手放在中间，满屏的幸福感！！！话说宝宝好会挑
			</view>
		</view>
		<view class="grid flex-sub padding-top  margin-lr-xs  grid-square bg-white col-3">
			<view class="bg-img " style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"
			 v-for="(item,index) in 3" :key="index">
			</view>


			<!-- 分享评论居中 -->
		</view>
		<view class="text-gray text-lg text-center margin-lr-xs flex justify-between bg-white bot-pa">
			<view><text class="cuIcon-forwardfill "></text> 分享</view>
			<view><text class="margin-lr-xs">3900</text> 评论</view>
			<view><text class="margin-lr-xs">3900</text> 评论</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				iconList: [{
						icon: "add",
						iconf: "",
						name: "添加关注"
					},
					{
						icon: "picfill",
						iconf: "peoplefill",
						name: "败家女孩橙子"
					},
					{
						icon: "picfill",
						iconf: "peoplefill",
						name: "京东"
					},
					{
						icon: "picfill",
						iconf: "peoplefill",
						name: "羊毛党"
					}
				]
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.pic-zi {
		position: absolute;
		right: -2upx;
		bottom: 10upx;

	}
    .bot-pa{
		padding-bottom:30upx;
	}
	.lj_margin_auto {
		margin: auto;
	}
</style>
