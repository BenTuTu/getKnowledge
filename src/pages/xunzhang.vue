<template>
<div class="body">
    <div class="title">
        
     <img src="..\images\ue.png" @click="showBack" >

      <div>全部</div>
       
      <div>尚未获得</div>
      

    </div>
    <div class="xunzhang">
        升级勋章0/4
    </div>
    <div class="xunzhang1">


        <div >
            <img src="..\images\a2x.png">
            <p>xunzhang1</p>
        </div>
        <div >
            <img src="..\images\a2x.png">
            <p>xunzhang2</p>
        </div>
        <div >
            <img src="..\images\a2x.png">
            <p>xunzhang3</p>
        </div>
        
    </div>
     <div class="xunzhang1">


        <div >
            <img src="..\images\a2x.png">
            <p>xunzhang1</p>
        </div>
        <div >
            <img src="..\images\a2x.png">
            <p>xunzhang2</p>
        </div>
        <div >
            <img src="..\images\a2x.png">
            <p>xunzhang3</p>
        </div>
        
    </div>
     <div class="xunzhang">
        升级勋章0/4
    </div>
    <div class="xunzhang1">


        <div >
            <img src="..\images\a2x.png">
            <p>xunzhang1</p>
        </div>
        <div >
            <img src="..\images\a2x.png">
            <p>xunzhang2</p>
        </div>
        <div >
            <img src="..\images\a2x.png">
            <p>xunzhang3</p>
        </div>
        
    </div>
     <div class="xunzhang1">


        <div >
            <img src="..\images\a2x.png">
            <p>xunzhang1</p>
        </div>
        <div >
            <img src="..\images\a2x.png">
            <p>xunzhang2</p>
        </div>
        <div >
            <img src="..\images\a2x.png">
            <p>xunzhang3</p>
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
.body{
    background-color: white;
}
.xunzhang1{
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}
.xunzhang1 img{

width: 80px;
height: 80px;
}
.title1{
            
    display: flex;
    justify-content: space-between;
}
.title img{
    float: left;
    height: 40px;
}
.title{
    display: flex;
    justify-content: space-between;
    background-color: white;
    align-items: center;
}
.xunzhang{

 text-align:center;
border:1px solid #a1a1a1;
margin-top: 60px;
background:white;
width:100px;
margin: 0 auto;

}
</style>
