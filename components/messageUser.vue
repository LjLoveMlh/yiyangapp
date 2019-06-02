<template>
	<view>
		<view v-for="(item,index) in datalist">
			<!-- 用户基础信息部分 -->
			<view class="bg-gray margin-bottom-xs ">
				<view class="cu-list menu-avatar  ">
					<view class="cu-item ljPMBottom0">
						<view class="cu-avatar round ljlg" :style="{'background-image':'url('+item.avatar+')'}">
							<view class="pic-zi ">
								<image class="lj_tag_vip" src="/static/img/vip/vip_red.png">
								</image>
							</view>
						</view>
						<view class="content flex-sub">
							<!-- 用户名 -->
							<view class="text-grey flex justify-between">
								<view>
									<text class="text-black text-df"> {{item.nickName}}</text>
								</view>
								<view class="text-sm text-black"> 1天前</view>
							</view>
							<view class="text-gray text-xs flex justify-between ">
								{{item.doWhat}}
							</view>
						</view>
					</view>

					<!-- 评论内容及原文摘要 -->
					<view class="ljCommentAll padding-lr text-df bg-white padding-bottom-sm">
						<view class="ljUserCommentText text-df padding-bottom-xs text-cut ">
							我是评论内容我是评论内容我是评论内容我是评论内容 我是评论内容我是评论内容我是评论内容我是评论内容

						</view>
						<view class="ljUserArticleAll">
							<view class="articleImg">

								<!-- 文章封面 -->
								<view class="imgHelp">
									<image mode="aspectFill" :src="item.coverImg">文章封面</image>
								</view>

							</view>

							<view class="articleRight padding-lr-sm bg-gray">
								<!-- 原文作者 -->
								<view class="articleAuthor padding-tb-xs">
									@{{item.beNickName}}
								</view>
								<!-- 原文文章内容 -->
								<view class="articleContent text-grey">
									{{item.articleText}}
								</view>

							</view>
						</view>

					</view>

				</view>

			</view>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {

			};
		},
		name: "messageUser",
		props: {

			datalist: {
				type: Array,
				default: () => []
			}


		},

	}
</script>

<style lang="scss">
	.ljPMBottom0 {
		padding-bottom: 0px;
		margin-bottom: 0px;

		.ljlg {
			width: 90upx;
			height: 90upx;
		}
	}

	// 原文摘要卡片
	.ljCommentAll {
		display: flex;
		flex-direction: column;
		width: 100%;

		.ljUserCommentText {}

		.ljUserArticleAll {
			display: flex;
			flex-direction: row;

			.articleImg {
				.imgHelp {
					width: 140upx;
					height: 140upx;

					image {
						width: 100%;
						height: 100%;
					}
				}
			}

			.articleRight {
				width: 100%;

				.articleAuthor {}

				.articleContent {
					font-size: 24upx;
					// text-overflow: -o-ellipsis-lastline;
					overflow: hidden;
					// text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					line-clamp: 2;
					-webkit-box-orient: vertical;
					text-indent: 2em;
				}

			}
		}
	}




	.ljCuTag {
		font-size: 20upx;
		vertical-align: middle;
		position: relative;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
		padding: 0upx 16upx;
		height: 40upx;
		font-family: Helvetica Neue, Helvetica, sans-serif;
		white-space: nowrap;
	}

	.pic-zi {
		position: absolute;
		right: -2upx;
		bottom: -8upx;
		font-size: 38upx;
		color: orange;




		.lj_tag_vip {
			width: 30upx;
			height: 30upx;
			z-index: 1;
			border: 2upx solid white;
			border-radius: 50%;
		}
	}

	.cu-card .article .no-card .ljCuCard>.cu-item>.title>.text-cut {
		font-weight: normal;
		color: red;
	}
</style>
