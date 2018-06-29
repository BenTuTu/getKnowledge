<template>
  <div class="online">
      <div class="onlineImg">
          <img src="../images/videoMac.png">
          <p class="listenNum">11222333预约观看</p>
      </div>

      <div class="content">
          <h3>周二晚8点：第66次得到内部例会直播</h3>
          <div>得到App创始人向用户及同事做工作汇报</div>
      </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.online {
    background-color: #fff;
}

.onlineImg {
    margin-top: .133333rem /* 10/75 */;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    height: 1.2rem;
}

.onlineImg img {
    width: 2rem;
}

.listenNum {
    height: 1.2rem;
    line-height: 1.2rem;
}

.content {
    display: flex;
    height: 1.2rem;
    width: 10rem;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    border-bottom: 1px solid rgb(235, 228, 228);
}

/*.content:after {
    content: ' ';
    border: .133333rem  10/75  solid transparent;
    border-left: .133333rem  10/75  solid gray;
    width: 0;
    height: 0;
    position: absolute;
    right: .266667rem  ;
}*/

</style>
