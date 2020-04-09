<template>
	<view class="result">
		
			<view v-for="(item,index) in obj" :key=item.id>
					<view class="li">
						<view class="content">
							<view >
								<view>成都2000万惠民消费券</view>
								<view>有效期限截止至:{{item.datetime}}</view>
								<view>面值:{{item.value}}</view>
							</view>
							<button class="cu-btn bg-black sm" @tap="use(item.id)" >使用</button>
						</view>
					</view>
				</view>
			
		</view>
</template>

<script>
	export default{
		data(){
			return{
				obj:[
					{
						datetime:"2020-4-20",
						value:"100减20",
						id:"1"
					},
					{
						datetime:"2020-4-20",
						value:"200减50",
						id:"2"
					}
				],
				soucre:''
			}
		},
		methods:{
			use(data){
					//先发请求，根据data的id获取到生成的QRcode，然后在跳转之后的页面展示QRcode
					uni.navigateTo({
						url:"./vouInof"
						})
				}
		}
	}
</script>

<style>
	.content{
		display: block;
		background-color: red;
		margin: 20rpx 20rpx;
		padding: 20rpx 20rpx;
	}
</style>
