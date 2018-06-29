<template>
    <div class="body">
		
		<div class="title">
            
                <img src="..\images\ue.png" @click="showBack" >
          
			<div class="zi">我的账号</div>
            <div ></div>
		</div>
		<div class="cunkuan">
			<h1>0.00元</h1>
		</div>
		<div class="sec">
			<p class="chongzhi">充值（人民币）</p>
			<div class="li1">
				<div class="ge">6元</div>
				<div class="ge">68元</div>
				<div class="ge">208元</div>
			</div>
			<div class="li2">
				<div class="ge">388元</div>
				<div class="ge">698元</div>
				<div class="ge">998元</div>
			</div>
			<div class="zhifu">
				<p>支付金额：6元</p>
			</div>
			 <div class="quereng">
				  <el-button plain @click="open7">确认金额</el-button>
			 </div>
		</div>
	<div class="third">
			<p>购物管理</p>
			<div class="third1">
			<div class="ge1">
                <img src="..\images\o2.png">
               <p> 购买记录</p>
                </div>
			<div class="ge1">
                <img src="..\images\sf.png">
                <p>实物订单</p>
                </div>
			<div class="ge1">
                <img src="..\images\tz.png">
                <p>开发票</p>
                
                </div>
			<div class="ge1">
                <img src="..\images\q4.png">
                <p>卡券中心</p>
                
                </div>
			</div>
		</div>
       <div class="jieshi">

           <div>1.因原因，充值仅限制定价格</div>
           <div>2.得到月可用于直接购买App内虚拟道具</div>
           <div>3.得到余额仅限安卓系统消费，无法再其他系统使用</div>
           <div>1。得到余额为虚拟币，充值后的余额不会过期，但无法体现</div>
           <div></div>
       </div>

    </div>
	
</template>
<script>
export default {

  methods: {
      open7() {
        this.$notify({
          title: '选择支付方式',
          message: '微信支付',
		  position: 'top'
        });
	  },
	  showBack() {
		  this.$router.push({path: '/own'})
	  }
	  
}
}
</script>
<style scoped>
.body{
    background-color: white;
    margin: 0 auto;
    }
.zi{
    align-items: center;
     margin: 0 auto;
     font-size: 15px;
     text-align: center;
}

.chongzhi{
    float: left;
    margin-top: 20px;

}
.jiehsi{
    margin-top: 20px;
    display: flex;
flex-flow: row wrap;
align-content:space-around;

}
.title{
				
				border-bottom:1px solid #DDDDDD;
                height:40px;
                align-items: center;
               display: flex;
				/*flex-direction: row;*/
				justify-content:space-between;
                			}
                            .title img{
                                width:30px;
                                height: 30px;
align-items: center;
                                float: left;
                            }
			.cunkuan{
				text-align: center;
			}
			.li1{
				
				height: 30px;
				width: 300px;
				display: flex;
				/*flex-direction: row;*/
				justify-content:space-around;
				margin-top: 20px;
				
			
			}
			.zhifu{
				text-align: center;
			}
			.li2{
				height: 30px;
				width: 300px;
				display: flex;
				/*flex-direction: row;*/
				justify-content:space-around;
				margin-top: 20px;
				
			}
			.quereng{
				text-align:center;
                border:1px solid #a1a1a1;               
                background:red;
                width:200px;
                height: 30px;
                margin: 0 auto;
                font-size: 20px;
                color :white;
			}
			.sec{


				border-bottom:1px solid #DDDDDD;
				height:200px ;
                width:300px;
                align-items: center;
                margin: 0 auto;
                margin-top: 20px;
                
			}
			.ge{
				text-align:center;
                border:1px solid red;               
                background:white;
                width:300px;
                margin:0px 0px 0px 20px
                
                 
			}
			.third1{
				height: 60px;
				width: 300px;
				display: flex;
				/*flex-direction: row;*/
				justify-content:space-between;
				margin-top: 10px;
				
			}
            .third1 img{

                width: 35px;
                height: 35px;
            }
			.ge1{
				text-align:center;
                    
                
			}
           
</style>
