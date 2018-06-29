<template>
  <div class="home">
      <el-input
        class="app_searchInput"
        placeholder="请输入内容"
        v-model="serachData"
        clearable>
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
      <el-button class="app_searchButton" round @click="showSearchItem">搜索</el-button>
      <ul v-show="searchList" class="searchList">
        <li @click="gotopage(1)" v-for="(item, index) in articalsTitle" :key="index">{{ item }}</li>
      </ul>
      <el-carousel>
        <el-carousel-item v-for="(item, index) in items" :key="index">
          <img :src="item.src" class="itemImg">
        </el-carousel-item>
      </el-carousel>

      <div class="app_icon">
        <ul>
          <li v-for="(item, index) in iconImgs" :key="index">
            <img :src="item.src" class="app_icon_image" @click="goToLis(item.title)">
            <span>{{ item.title }}</span>
          </li>
        </ul>
      </div>

      <on-line/>
      <everyday-book @toLearn="toLearn"></everyday-book>
       <div class="everydayBook">
        <div class="title">
            <h3>订阅专栏</h3>
            <p class="allthing">查看全部</p>
        </div>

        <div class="rec">
            <div class="recommond" v-for="(item, index) in subscribtionColumn" :key="index">
                <img :src="item.src" >
                <div class="recommond_describe">
                    <h4>
                      {{ item.title }}
                      <p class="money">{{ item.moneny }}</p>
                    </h4>
                    <p>{{ item.describ }}</p>
                    <div class="recommond_describe__timeMoney">
                        <p>{{ item.book }}</p>
                    </div> 
                </div>
            </div>
        </div>
      </div>
  </div>
</template>
<script>
import OnLine from "./online";
import EverydayBook from "./everydayBook";
export default {
  components: {
    OnLine,
    EverydayBook
  },
  data() {
    return {
      ops: {
        vBar: {
          opacity: 0,
          background: "",
          pos: "right"
        },
        hBar: {
          opacity: 0,
          background: "",
          pos: "bottom"
        }
      },
      serachData: "",
      articalsTitle: [
        '时间的朋友', '旅行的意义', '如何学会读书'
      ],
      searchList: false,
      items: [
        {
          title: '111',
          src: require("../images/itemOne.jpg")
        },
        {
          title: '222',
          src: require("../images/itemTwo.jpg")
        },
        {
          title: '33',
          src: require("../images/itemThree.jpg")
        },
        {
          title: '44',
          src: require("../images/itemFour.jpg")
        }
      ],
      iconImgs: [
        {
          src: require('../images/book.png'),
          title: '听书'
        },
        {
          src: require('../images/subscribe.png'),
          title: '订阅'
        },
        {
          src: require('../images/markit.png'),
          title: '商城'
        },
        {
          src: require('../images/textbook.png'),
          title: '电子书'
        },
        {
          src: require('../images/listen.png'),
          title: '随时听'
        }
      ],
      subscribtionColumn: [
        {
          src: require('../images/xzf.jpg'),
          title: '薛兆丰的经济学课',
          describ: '薛兆丰的经济学课',
          book: '新书首发 | 《薛兆丰经济学讲义》',
          moneny: '199得到币/年'
        },
        {
          src: require('../images/wbf.jpg'),
          title: '吴伯凡·认知方法论',
          describ: '一年时间，打开洞察世界的50个维度',
          book: '认知的救赎 | 缺省与默认',
          moneny: '199得到币/年'
        },
        {
          src: require('../images/zk.jpg'),
          title: '卓克·科学思维课',
          describ: '帮你做复杂世界的明白人',
          book: '259 | 心理：被低估的心理学',
          moneny: '199得到币/年'
        }
      ]
    };
  },
  watch: {
    serachData(val, oldVal) {
      if (val == '时间' || val == '机甲' || val == '如何') {
        this.searchList = true;
      }else {
        this.searchList = false;
      }
    }
  },
  methods: {
    toLearn(data) {
      this.$emit('fromJump', data);
    },
    showSearchItem() {
      this.searchList = true;
    },
    goToLis(listenMsc) {
      if (listenMsc == '听书') {
        this.$router.push({
          path: `/listenBook/${listenMsc}`
        });
      }
    },
    gotopage(index) {
        this.$router.push({path:'/accountBook', query: {id:1}});
    }
  }
};
</script>
<style scoped>
.home {
  background-color: rgb(235, 228, 228);
}

.app_searchInput {
  position: absolute;
  width: 6rem;
  left: 1.2rem;
  top: 0.133333rem;
  z-index: 99;
}

.app_searchButton {
  position: absolute;
  left: 7.6rem;
  top: 0.113333rem;
  z-index: 99;
}

.searchList {
  color: blue;
  position: absolute;
  top: 30px;
  left: 46px;
  font-weight: 700;
  border: 1px solid black;
  width: 220px;
  list-style-type: none;
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
  font-size: 0.186667rem;
  opacity: 0.75;
  width: 10rem;
  line-height: 2rem;
  margin: 0;
}

/* .el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
} */
.tapBar {
  /* height: 1.2rem; */
  width: 10rem;
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
  height: 0.5rem;
  display: block;
  margin: 0 auto;
}

.everydayBook {
  background-color: #fff;
}

.title {
  height: 0.8rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.allthing {
  margin-right: 0.633333rem;
}

.rec {
  border-bottom: 1px solid rgb(235, 228, 228);
}

.recommond {
  width: 10rem;
  height: 2.6rem;
  display: flex;
  flex-direction: row;
}

.recommond img {
  height: 2.4rem;
  margin-left: 10px;
}

.recommond_describe {
  margin-left: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.recommond_describe h4 {
  display: flex;
  justify-content: space-between;
  width: 6.6rem;
}

.recommond_describe__timeMoney {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.money {
  color: crimson;
}
</style>
