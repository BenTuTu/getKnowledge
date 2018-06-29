<template>
<div class="body">
    <div class="title">
                 <img src="..\images\ue.png" @click="showBack" >
				<h5>修改个人信息</h5>
               
				</div>
   <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="姓名">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="出身地点">
    <el-select v-model="form.region" placeholder="请选择城市">
      <el-option label="北京" value="shanghai"></el-option>
      <el-option label="上海" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="生日">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
    </el-col>
  </el-form-item>
  <el-form-item label="是否用过此类APP">
    <el-switch v-model="form.delivery"></el-switch>
  </el-form-item>
  <el-form-item label="喜欢什么书">
    <el-checkbox-group v-model="form.type">
      <el-checkbox label="言情" name="type"></el-checkbox>
      <el-checkbox label="励志" name="type"></el-checkbox>
      <el-checkbox label="成功" name="type"></el-checkbox>
      <el-checkbox label="名著" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item label="性别">
    <el-radio-group v-model="form.resource">
      <el-radio label="男"></el-radio>
      <el-radio label="女"></el-radio>
    </el-radio-group>
  </el-form-item>
 
  <el-form-item>
    <el-button type="primary" @click="onSubmit">立即修改</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
</div>
</template>
<script>
export default {
     data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
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
    height: 400px;
    float: left;
}
.title{				
			display: flex;
            justify-content: space-around;
            align-items: center;
            background-color: white;
            width: 295px;

			}
               .title img{
                width: 40px;
                height: 40px;;
float: left;
            }

</style>
