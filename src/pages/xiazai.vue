<template>

  <el-tabs v-model="activeName" @tab-click="handleClick" >
    <el-tab-pane label="未下载" name="first" style="width: 200px;"><img src="..\images\konghe.png"></el-tab-pane>
    <el-tab-pane label="正在下载" name="second" style="width: 200px;"><img src="..\images\konghezi.png"></el-tab-pane>
  
  </el-tabs>

</template>
<script>
export default {
  data() {
      return {
        activeName: 'second'
      };
    },

    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
     

    }
}
</script>
<style scoped>
.tab{
    width: 200px;
}
</style>
