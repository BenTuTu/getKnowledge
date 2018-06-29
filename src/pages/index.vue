<template>
  <div class="block">
    <Scroll id="mainBody" :height="mainHeight" loading-text="">
        <router-view @fromJump="getPageData"></router-view>
    </Scroll>
      
    <!-- 移动端的tabbar切换效果，使用的是router进行单页界面进行切换 -->
    <div :width="tabbarWidth" class="tapBar">
        <div v-for="(item, index) in tabbar" :key="index">
          <router-link :to="item.linkTo">
            <img :src="item.src" :class="whichItem === index ? 'clickClass' : ''" @click="alreadyClick(index)">
            <span>{{item.title}}</span>
          </router-link>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {
  },
  data() {
    return {
      tabbarWidth: 0,
      whichItem: 0,
      serachData: '',
      mainHeight: '',
      tabbar: [
        {
          src: require('../images/discovery.png'),
          linkTo: '/',
          title: '发现'
        },
        {
          src: require('../images/accountBook.png'),
          linkTo: '/accountBook',
          title: '知识账本'
        },
        {
          src: require('../images/alreadyBuy.png'),
          linkTo: '/alreadyBuy',
          title: '已购'
        },
        {
          src: require('../images/own.png'),
          linkTo: '/own',
          title: '我的'
        }
      ],
    }
  },
  beforeMount() {
    // 获取设备的宽高从而可以设计下面tabbar
    var screWid = document.documentElement.clientWidth;
    var screHei = document.documentElement.clientHeight;
    console.log(screWid, screHei);
    var mainBody = document.getElementById("mainBody");
    this.mainHeight = (screHei - 90);
    this.tabbarWidth = screWid;
  },
  methods: {
    alreadyClick(index) {
      this.whichItem = index;
      if (index == 1) {
        console.log('aaaaa');
      }
    },
    getPageData(data) {
      if (data) {
        this.whichItem = 2;
      } 
    },
  }
};
</script>
<style scoped>
.block {
    background-color: rgb(248, 248, 248);
   
}

.app_searchInput {
  position: absolute;
  width: 6rem;
  left: 1.2rem;
  top: .133333rem /* 10/75 */;
  z-index: 99;
}

.app_searchButton {
  position: absolute;
  left: 7.6rem;
  top: .113333rem /* 10/75 */;
  z-index: 99;
}

.app_icon {
    background-color: #fff;
    text-align: center;
}

.app_icon ul {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  /* align-items: center; */
}

.app_icon ul li {
  list-style: none;
}
.app_icon_image {
  display: block;
  width: 1rem;
}

.el-carousel__item .itemImg {
  color: #475669;
  font-size: .186667rem /* 14/75 */;
  opacity: 0.75;
  width: 10rem;
  line-height: 2rem /* 150/75 */;
  margin: 0;
}

/* .el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
} */
.tapBar {
  height: 1.2rem;
  display: flex;
  height: 1rem;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  bottom: 0;
  text-align: center;
  background-color: #fff;
  border-top: 1px solid rgb(235, 228, 228);
}

.tapBar img {
  height: .5rem;
  display: block;
  margin: 0 auto;
}

.clickClass {
  background-color: rgb(41, 172, 224);
}
</style>
