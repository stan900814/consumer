<template>
	<view>
		<view class="header padding">
			<view class="text-df margin">
				<text>成都市政府发福利啦</text>
			</view>
			<view class="text-lg margin">
				<text>礼享成都2000万优惠券</text>
				
			</view>
			<view class="text-sm margin">
				<text>主板单位：成都市人民政府</text>
				
			</view>
			<view class="text-xs margin">
				<text @tap="rule">活动规则 ></text>
				
			</view>
		</view>
		<view class="main">
			<view class="wrapper bg-white">
			<text class="text-xsl text-red cuIcon-goods align-center text-center"></text>
			<view class="">
				<text>零售消费券</text>
			</view>
			<view class="">
				<text>满100减20</text>
			</view>
			</view>
			<view class="wrapper bg-white">
			<text class=" text-red cuIcon-goods align-center text-center"></text>
			<view class="">
				<text>零售消费券</text>
			</view>
			<view class="">
				<text>满100减20</text>
			</view>
			</view>
			<view class="wrapper bg-white">
			<text class=" text-red cuIcon-goods align-center text-center"></text>
			<view class="">
				<text>零售消费券</text>
			</view>
			<view class="">
				<text>满100减20</text>
			</view>
			</view>
			<view class="wrapper bg-white">
			<text class=" text-red cuIcon-goods align-center text-center"></text>
			<view class="">
				<text>零售消费券</text>
			</view>
			<view class="">
				<text>满100减20</text>
			</view>
			</view>
		</view>
		<view class="getVolume cu-btn" v-if="!result">
			<button @tap="getVolume">报名预约</button>
		</view>
		<view v-else class="getResult cu-btn">
			<button @tap="getResult">获取预约结果</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				result:false
			}
		},
		onLoad() {

		},
		methods: {
			getVolume(){
				let _this = this
				uni.showToast({
					icon:'success',
					title:'预约成功',
					duration:1500,
					success:function(){
						_this.result = true
					}
				})
			},
			rule(){},
			getResult(){
				uni.navigateTo({
					url:'../result'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.header{
		height: 30vh;
		// background-image: url();
	}
	.margin{
		margin: 30rpx 20rpx;
	}
	.padding{
		padding-top: 30rpx;
	}
	.main{
		height: 30vh;
		display: flex;
		flex-wrap: wrap;
	}
	.wrapper{
		text-align: center;
		height: 80%;
		width: 40%;
		margin: 20rpx;
		border: 1px solid bg-white;
		border-radius: 20rpx;
	}
	.getVolume{
		position: fixed;
		left:0;
		right: 0;
		bottom:0;
		display: flex;
		align-items: center;
		justify-content: center;
			}
	.getResult{
		position: fixed;
		left:0;
		right: 0;
		bottom:0;
		position: fixed;
		display: flex;
		align-items: center;
		justify-content: center;
		
	}
</style>
