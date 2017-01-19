<template>
  <div id="app">
    <el-button @click="get">默认按钮</el-button>


    <div>
      {{myMessage}}
    </div>


    <hr>

    <el-button type="primary">主要按钮</el-button>
    <el-button type="text">文字按钮</el-button>

    <el-radio class="radio" v-model="radio" label="1">备选项</el-radio>
    <el-radio class="radio" v-model="radio" label="2">备选项</el-radio>


    <!-- 日历 -->
    <span class="demonstration">默认</span>
    <el-date-picker
            v-model="value1"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions0">
    </el-date-picker>

    <!-- rate -->
    <el-rate v-model="value2"></el-rate>

    <!-- Pagination -->
    <el-pagination
            layout="prev, pager, next"
            :total="1000">
    </el-pagination>

    <!-- 选项卡 -->
    <el-tabs type="card">
      <el-tab-pane label="用户管理" name="first">
        <el-badge :value="200" :max="99" class="item">
          <el-button size="small">评论</el-button>
        </el-badge>

        <el-badge :value="100" :max="10" class="item">
          <el-button size="small">回复</el-button>
        </el-badge>
      </el-tab-pane>
      <el-tab-pane label="配置管理" name="second">
        <el-switch
                v-model="bSign"
                on-color="#13ce66"
                off-color="#ff4949">
        </el-switch>
      </el-tab-pane>

      <el-tab-pane label="角色管理" name="third">
        <el-table
                :data="tableData"
                style="width: 100%">
          <el-table-column
                  prop="date"
                  label="日期"
                  width="180">
          </el-table-column>
          <el-table-column
                  prop="name"
                  label="姓名"
                  width="180">
          </el-table-column>
          <el-table-column
                  prop="address"
                  label="地址">
          </el-table-column>
        </el-table>
      </el-tab-pane>

      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>


    <!-- button -->
    <myButton @click.native="get"></myButton>


  </div>
</template>

<script>
import myButton from './components/Button.vue'
import axios from 'axios'
export default {
  components: {
    myButton
  },
  name: 'app',
  data () {
    return {
      myMessage: '默认数据',
      msg: 'Welcome to Your Vue.js App',
      radio: '1',
      value1: '',
      pickerOptions0: {
        disabledDate(time) {
          return time.getTime() < Date.now() - 8.64e7;
        }
      },
      value2: null,
      bSign: false,
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  mounted () {
    this.get();
  },
  methods: {
    get () {
      axios.get('https://api.github.com/users/leo493852107')
              .then(function (response) {
                console.log(response);
                this.myMessage = response.data;
              }.bind(this))
              .catch(function (error) {
                console.log(error);
              });

    }
  }
}
</script>

<style>

  .item {
    margin-top: 10px;
    margin-right: 40px;
  }

</style>
