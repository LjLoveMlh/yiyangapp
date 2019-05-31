<template>
	<view>
		<view class="cu-list menu-avatar" v-for="(item,index) in datalist">


			<view class="cu-item ">
				<view class="cu-avatar round lg" :style="{'background-image':'url('+item.url+')'}"></view>
				<view class="content  ">
					<view class="text-black mess-t">{{item.title}}</view>
					<view class="text-gray text-sm flex">
						<text class=" mess-b">
							{{item.desrc}}
						</text>
					</view>
				</view>
				<view class="action ">
					<view class="cuIcon-right text-gray"></view>
				</view>
			</view>
<!-- 			<view class="LineFather margin-top-sm" v-if="datalist.length-1!=index">
				<view class="LineAvatar"></view>
				<view class="LineMain"></view>
				<view class="LineLast"></view>
			</view> -->



		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		name: "selfPostingEntry",
		props: {
			datalist: {
				type: Array,
				default: () => []
			}
		},
		created() {

		}
	}
</script>

<style lang="scss">
	page {
		background-color: #fff;

		.mess-t {
			font-weight: bold;
			white-space: nowrap;
			overflow: hidden;

		}

		.mess-b {
			white-space: nowrap;
			overflow: hidden;
		}

		.LineFather {
			
			display: flex;
			flex-direction: row;

			// border: 2px solid red;
			.LineAvatar {
				flex: 1;
				// border-bottom: 2upx solid  #eee;
				// border: 2px solid red;
			}

			.LineMain {
				flex: 3.8;
				border-bottom: 2upx solid #eee;
				// border: 2px solid blue;
			}

			.LineLast {
				flex: 0.4;
			}
		}



	}
</style>
