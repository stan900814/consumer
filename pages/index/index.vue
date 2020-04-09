<template>
	<view>
		<view class="header padding bg-img">
			<view class="text-df margin text-black text-bold ">
				<text>成都市政府发福利啦</text>
			</view>
			<view class="text-lg margin text-bold ">
				<text>礼享成都2000万优惠券</text>
				
			</view>
			<view class="text-sm margin text-bold ">
				<text>主板单位：成都市人民政府</text>
				
			</view>
			<view class="text-xs margin text-bold ">
				<text @tap="rule">活动规则 ></text>
				
			</view>
		</view>
		<view class="text-center" v-show="result">
			<view>
				<text >结果公布时间</text>
			</view>
			<view >
				<text>{{formattime}}</text>	
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
				<text>满200减50</text>
			</view>
			</view>
			<view class="wrapper bg-white">
			<text class=" text-red cuIcon-goods align-center text-center" ></text>
			<view class="">
				<text>零售消费券</text>
			</view>
			<view class="">
				<text>满500减80</text>
			</view>
			</view>
			<view class="wrapper bg-white">
			<text class=" text-red cuIcon-goods align-center text-center"></text>
			<view class="">
				<text>零售消费券</text>
			</view>
			<view class="">
				<text>满1000减100</text>
			</view>
			</view>
		</view>
		<view class="getVolume cu-btn" v-if="!result">
			<button class="cu-btn bg-red  lg shadow" @tap="getVolume">报名预约</button>
		</view>
		<view v-else class="getResult cu-btn">
			<button class="cu-btn bg-red  lg shadow" @tap="getResult">获取预约结果</button>
		</view>
	</view>
</template>

<script>
	import {formatDate} from '../../untils/time.js'
	export default {
		data() {
			return {
				result:false,
				isLogin:true,
			}
		},
		computed:{
			formattime:function(){
				let date = new Date()
				return date
			}
		},
		onLoad() {
			uni.showModal({
				title:'微信小程序申请获取您授权登录信息',
				content:'',
				showCancel:true,
				cancelText:'拒绝',
				confirmText:'允许',
				success(res) {
					if(res.confirm)
						uni.login({
							provider:"weixin",
							success() {
								uni.showToast({
									title:"登录成功",
									icon:"success",
								})
							}
						})
				}
			})
				// uni.login({
				// 	provider:"weixin",
				// 	success:function(res){
				// 		let userInfo = res
				// 		uni.showToast({
				// 			title:'登录成功',
				// 			icon:"none",			
				// 			success:function(data){
				// 				uni.setStorage({
				// 					key:'userInfo',
				// 					data:userInfo
				// 				})
				// 			}
				// 		})
				// 	}
				// })
		},
		methods:{
			getVolume(){
				//判断登录状态
				let _this = this
				if(_this.isLogin === false ){
					
				}else{ 						
					uni.showToast({
						icon:'success',
						title:'预约成功',
						success:function(){
							_this.result = true
						}
					})
				}

			},
			rule(){
				uni.navigateTo({
					url:'./rule'
				})
			},
			getResult(){
				uni.navigateTo({
					url:'../result'
				})
			},
		}
	}
</script>

<style scoped >
	.header{
		height: 30vh;
		background-image: url(http://img3.imgtn.bdimg.com/it/u=4263187928,1504546367&fm=26&gp=0.jpg);
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
		bottom:10rpx;
		display: flex;
		align-items: center;
		justify-content: center;
			}
	.getResult{
		position: fixed;
		left:0;
		right: 0;
		bottom:10rpx;
		position: fixed;
		display: flex;
		align-items: center;
		justify-content: center;
		
	}
</style>
