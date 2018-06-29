<template>
  <div id="myOwn" class="wode">
		<div class="tou">
			<div class="youjian" >
				<img src="..\images\youjian1.png" >
				
				<img src="..\images\shezhi1.png" @click="showPing" >
				
			</div>
		</div>
		<div class="yonghu">
			<img src="..\images\2.png" >
			<div class="miaosu">
			
			<li @click="showLo">注册账号
			</li>
		</div>
		<img src="..\images\jiantou2.png">
		</div>
		
  <div class="qqq">
	  <div class="biankuan">
<span>0我关注的人</span>
</div>
<div class="biankuan1">
<span>0关注我的人</span>
</div>
  </div>
		<div class="xiaoge">
			<div class="qq" @click="showTag">
			<img src="..\images\p3.png" >
			<p>我的勋章</p>
			</div>
			<div>
			<img src="..\images\jiantou2.png">
			</div>
		</div>
		<div class="xiaoge">
<div class="qq" @click="showZhang">
			<img src="..\images\pd.png" >
			<p>我的账户</p>
</div>
			<!-- <div class="zi3">
			<p>我的账户</p>
			</div> -->
			<div class="qq1">
			<p class="money">0.00</p>
			<img src="..\images\jiantou2.png">
			</div>
		</div>
		<div class="xiaoge">
			<div class="qq">
			<img src="..\images\youhuijuan.png">
			
			<p>我的优惠券</p>
			</div>
			<div>
			<img src="..\images\jiantou2.png">
			</div>
		</div>
		<div class="xiaoge">
			<div class="qq"  @click="showXue">
			<img src="..\images\xuexi2.png" >
			
			<p>学习小组</p>
			</div>
			<div>
			<img src="..\images\jiantou2.png" >
			</div>
		</div>
		<div class="xiaoge">
			<div class="qq" @click="showYin" >
			<img src="..\images\pc.png">
			
			<p>已下载音频</p>
			</div>
			<div>
		<img src="..\images\jiantou2.png">
			</div>
		</div>
		<div class="xiaoge1">
			<div class="qq">
			<img src="..\images\tuijian.png">
			<div class="xiaoge2" @click="showTui">
			<div class="tuijian">
			<p>推荐【得到】给好友</p>
		
			</div>
			<div class="tuijian2">
				<p style="color: crimson;">送好友得优惠券</p>
			</div>
			</div>
			</div>
			<div>

			<img src="..\images\jiantou2.png">
			</div>
		</div>
		<div class="xiaoge">
			<div class="qq"  @click="showHelp">
			<img src="..\images\bangzhu.png">
			
			<p>帮助中心</p>
			</div>
		<div>
			<img src="..\images\jiantou2.png">
		</div>
		</div>
		</div>
</template>
<script>
export default {
  data () {
	  return {

	  }
  },
  methods: {
	  showTag() {
		  this.$router.push({path: '/xunzhang'})
	  },
	  showZhang(){
		  this.$router.push({path: '/zhanghu'})
	  },
	  showXue(){
this.$router.push({path: '/xuexi'})
	  },
	  showPing() {
		  this.$router.push({path: '/dianping'})
	  },
	  showLo(){
		   this.$router.push({path: '/login'})
	  },
	  showHelp(){
		   this.$router.push({path: '/help'})
	  },
	  showTui(){
		  this.$router.push({path: '/tuijian'})
	  },
	  showYin(){
		   this.$router.push({path: '/xiazai'})
	  }
	
  },
  mounted() {
    // var screWid = document.documentElement.clientWidth;
    // var screHei = document.documentElement.clientHeight;
    // var container = document.getElementById('container');
    // // console.log(screWid, screHei);
    // var mainBody = document.getElementById("myOwn");
    // mainBody.style.height = (screHei - 75) + "px";
    // mainBody.style.width = screWid + 'px';
  },
}
</script>
<style scoped>
ul{
	margin-top: 5px;
}
.biankuan{

	border-right-style: solid;
	border-right-width: 0.2ex; 
	align-items: center;
  height: 28px;
font-size: 18px;
	
}
.biankuan1{

	
	align-items: center;
  height: 28px;
font-size: 18px;
	
}
li{
	align-items: center;
}
.qq img{
 align-items: center;
}
.qqq{
	display: flex;
				/*flex-direction: row;*/
				justify-content:center;
				background-color:white;
				align-items: center;
				margin-top: 10px;
				height: 30px;
				font-size: 18px;
}

.miaosu{
	    display: flex;
		flex-flow: row wrap;
		align-items: center;
		align-content:space-around;
}
			.tou{
			
				height: 50px;
				background-color:white;
			
			}
			.youjian{
				display: flex;
				/*flex-direction: row;*/
				justify-content:space-between;
			}
			
			.wode img{
				align-items: center;
				width: 30px;
				height: 30px;
				
			}
			.youjian img{
				width: 50px;
				height: 50px;
				align-items: center;
			}
			.yonghu img{
				
				width: 60px;
				height: 60px;
				align-items: center;
			}
			.yonghu{
				height: 80px;
			background-color:white;
				display: flex;
				justify-content:space-between;
				margin-top: 10px;
				align-items: center;
			}
			.qq{
				display: flex;
				justify-content:flex-start; 
				align-items: center;
			
			}
		p{
			margin-left: 10px;
		}
			.qq1{
				display: flex;
				justify-content:flex-end; 
				align-items: center;
			}
			.xiaoge{
				height: 40px;
				background-color:white;
				display: flex;
				justify-content:space-between;
				align-items: center;
				margin-top: 10px;
			}
			.xiaoge1{
				height: 40px;
			background-color:white;
				display: flex;
				justify-content:initial;
				margin-top: 10px;
				justify-content:space-between;
			}
		.xiaoge2{
			display: flex;
			flex-direction:column;
			margin-right:45px ;
			background-color:white;
		}
		.zi{
			margin-right:130px ;
			align-items: center;
			
		}
		
		.zi2{
		
			
			align-items: center;
		}
		.zi3{
			margin-right: 80px;
			align-items: center;
			
		}
		.tuijian{
		  font-size: 15px;
			   display: flex;
               flex-direction:column;
               
		}
		.tuijian2{
			font-size: 13px;
			   display: flex;
		}
		.money {
				color: crimson;
			}
</style>
