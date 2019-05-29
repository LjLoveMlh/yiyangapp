<template>
	<view class="bg-gray">


		<!-- 头部卡片 -->
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



		<!--用户文章  -->

		<block v-for="(userItem,userIndex) in userArticleList" :key="userIndex">
		<userArticleItem :datalist="userItem" />
	</block>
	</view>
</template>

<script>
	// 用户文章
	import userArticleItem from '@/components/userArticleItem/userArticleItem.vue'
	export default {
		components: { //2注册组件
			userArticleItem
		},
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
				],
				userArticleList: {}
			}
		},
		methods: {
			getUserArticleList(_self) {
				this.uniFly.get({
					url: 'userArticleList',
					params: null
				}).then(function(response) {
					// console.log(response)
					_self.userArticleList = response.data.data.userArticleList
				}).catch(function(error) {
					// console.log(error)
				});
			},

		},
		onLoad(){
			var that=this
			that.getUserArticleList(that)
		}
	}
</script>

<style lang="scss">
	.pic-zi {
		position: absolute;
		right: -2upx;
		bottom: 10upx;
	}

	.bot-pa {
		padding-bottom: 30upx;
	}

	.lj_margin_auto {
		margin: auto;
	}
</style>
