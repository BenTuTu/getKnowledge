<template>
   <div class="body">
     <div class="zhuti">
			<div class="title">
                 <img src="..\images\ue.png" @click="showBack" >
				<h2>小组精选</h2>
                <p>全部小组</p>
				</div>
				<div class="xiaoxi">
					[重大调整]学习小组功能即将下线
				</div>
				<div class="xiaoxi">
					[重大调整]学习小组功能即将下线
				</div>
				<div class="xiaoxi">
					[重大调整]学习小组功能即将下线
				</div>
				<div class="xiaoxi">
					[重大调整]学习小组功能即将下线
				</div>	
				<div class="pingjia">	
					<div class="ge">		
			<div class="miaosu" @click="showBack">
			     <img src="..\images\toutou.png" >
				<p>用户名</p>
			</div>
			<div class="title2">
				<h5>初听徐牛一书有</h5>
				<p>打好了深刻好的啦sd卡就爱上了快递记录卡四级联考就阿里开始觉得来了声明中称，美国总统特朗普和朝鲜最高领导人金正恩就建立新型美朝关系，以及在朝鲜半岛建立长久、稳固的和平机制，开展了全面、深入、坦诚的意见交换。特朗普承诺为朝鲜提供安全保证，而金正恩也重申了他对朝鲜半岛完全无核化坚定不移的承诺。</p>
			</div>
			<div class="end">
				<div class="" >
                    <span>来自</span><span class="red"><a href="index.html">某某组</a></span>
				
				</div>
                <div class="tt">
                     <img src="..\images\dianzan.png" @click="showPing">

                      <img src="..\images\kongbai.png" >
                      <img src="..\images\pinglun.png" >
                </div>
			
			</div>
			
		</div>
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
	  showPing() {
		  this.$router.push({path: '/dianping'})
      },
       showBack() {
		  this.$router.push({path: '/own'})
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
.title{				
			display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: white;

			}
            .tt img{
                  width: 20px;
                height: 20px;;
            }
            .title img{
                width: 40px;
                height: 40px;;

            }
            .xiaoxi{
                margin-top: 1px;
                background-color: white;
                height: 40px;
             

            }
            .pingjia{
                background-color: white;
                height: 200px;
            }
		.miaosu{
            display: flex;
            justify-content: flex-start;
            background-color: white;
            margin-top: 10px;
        }
        .miaosu img{
             width: 40px;
                height: 40px;;
        }
        .end{
            display: flex;
            justify-content: space-between;
            margin-top: 10px;
        }
        .red{
            color: crimson;
        }
</style>
