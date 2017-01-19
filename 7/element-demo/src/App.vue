<template>
  <div id="app">
    <el-button type="success">成功按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
    <el-button type="info" icon="search">信息按钮</el-button>

    <span class="el-icon-delete"></span>
    <span class="el-icon-loading"></span>

    <el-row>
      <el-col :span="12">
        <div class="my-grid"></div>
      </el-col>
      <el-col :span="12">
        <div class="my-grid"></div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <div class="my-grid">
          <Date></Date>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="my-grid"></div>
      </el-col>
      <el-col :span="8">
        <div class="my-grid"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Date from './components/Date.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Date
  }
}
</script>

<style scoped lang="less">
  @color:red;
  .height(@h) {
    height:@h;
  }
.my-grid {
  border:1px solid @color;
  .height(30px);
}
</style>
