<template>
  <div id="app">
    <home-page></home-page>
  </div>
</template>

<script>
import HomePage from './pages/index'

export default {
  name: "App",
  components: {
    HomePage
  },
  data() {
    return {

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
    showTyy() {
      console.log('wwewwwww')
    }
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
  margin-top: .8rem /* 60/75 */;
}

a {
  text-decoration: none;
  color: rgb(83, 80, 80);
}
</style>
