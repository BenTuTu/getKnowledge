<template>
  <div class="hello">
      <form>
          <input type="text" name="username" v-model="userName"><br>
          <input type="text" name="age" v-model="age"><br>
          <a href="#" @click="addUser">提交</a>
      </form>
  </div>
</template>
<script>
export default {
  name: 'hello',
  data () {
      return {
          userName: '',
          age: ''
      }
  },
  methods: {
      addUser() {
          var name = this.userName;
          var age = this.age;
          this.$http.post('/api/user/addUser', {
              username: name,
              age: age
          }, {}).then(res => {
              console.log(res);
          });
      }
  },
  mounted() {
          this.$http.get('/api/user/selectUser').then(res => {
              console.log(res);
          })
   }
}
</script>
<style>

</style>
