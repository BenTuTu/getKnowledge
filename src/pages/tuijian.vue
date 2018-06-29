<template>

<body class="body_page">
        <!--顶部开始-->
    <!-- <div id="top">
        <!--频道导航 开始-->
       
<div id="footer">
  
  
    	<div class="tou">
			<div class="youjian" >
				<img src="..\images\ue.png" @click="showBack" >
				
				<img src="..\images\shezhi1.png" @click="showPing" >
				
			</div>
		</div>
  



<div class="sa">
<img src="..\images\abc.png" >
</div>
    <div class="tool">
            <table  border="0" style="width:100%; margin:5px 0px">
                <tr>
                    <td width="50%" align="center">
                        <a  class="btn"  onclick="openGuide()">
                        <img src="..\images\zhuanfa.png" width="32px" align="absmiddle" />发给朋友</a>
                    </td>
                    <td width="50%" align="center">
                        <a  class="btn" onclick="openGuide()">
                        <img src="..\images\qqqq.png" width="32px" align="absmiddle"   />分享到朋友圈</a>
                    </td>
                </tr>
            </table>
        </div>
        <div>
            <ul class="wxlist">
                <a  href="#top">
                	<li><div  class="GoTop"><img src="..\images\shang.png" width="32px" >返回顶部</div></li>
                </a>
            </ul>
        </div>  
</div>
<!--页脚结束-->
</body>
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
};
</script>
<style>

			.tou{
			
				height: 50px;
				background-color:white;
			
			}
			.youjian{
				display: flex;
				/*flex-direction: row;*/
				justify-content:space-between;
			}
			.sa img{
                width: 375px;
                height: 450px;
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
			.wxlist{
                	align-items: center;
                    text-align: center;
            }

</style>
