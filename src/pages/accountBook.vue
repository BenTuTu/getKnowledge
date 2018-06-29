<template>
    <div>
        <div class="title">
            <div class="title_readBook" @click="showMaTa('re')">今日学习</div>
            <div class="title_studyMap" @click="showMaTa('ma')">学习曲线图</div>
            <div class="title_studyTable" @click="showMaTa('ta')">今日学习表</div>
        </div>
        
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="今日学习" name="first">
                <h2>{{ currentEsy.title }}</h2>
                <p v-for="(chapter, index) in currentEsy.content" :key="index">
                    {{ chapter }}
                </p>
            </el-tab-pane>
            <el-tab-pane label="学习曲线图" name="second">
                 <ve-line :data="chartData" :settings="chartSettings"></ve-line>
            </el-tab-pane>
            <el-tab-pane label="今日学习表" name="third">
                <Table :loading="loading" ref="table" :row-class-name="rowClassName" :highlight-row="true" :columns="columns1" :data="data1"></Table>
                <Button type="primary" size="large" @click="exportData"><Icon type="ios-download-outline"></Icon>导出学习表格</Button>
            </el-tab-pane>
        </el-tabs>
        <!-- <div v-show="showRe">
            <h2>{{ currentEsy.title }}</h2>
            <p v-for="(chapter, index) in currentEsy.content" :key="index">
                {{ chapter }}
            </p>
        </div>
           
        <div v-if="showMa">
            <ve-line :data="chartData" :settings="chartSettings"></ve-line>
        </div>
        <div v-show="showTa">
            <Table :loading="loading" ref="table" :row-class-name="rowClassName" :highlight-row="true" :columns="columns1" :data="data1"></Table>
            <Button type="primary" size="large" @click="exportData"><Icon type="ios-download-outline"></Icon>导出学习表格</Button>
        </div> -->
    </div>
</template>
<script>
import essay from '../config/articles';
import VeLine from "v-charts/lib/line";
export default {
  data() {
    this.chartSettings = {
      metrics: ["上周已读", "本周已读"],
      demintion: ["日期"]
    };
    return {
      loading: true,
      writings: essay,
      activeName: 'second',
      currentDay: Number(new Date().getDay()),
      currentIdx: this.$route.query.id,
      chartData: {
        columns: ["日期", "上周已读", "本周已读", "电子/总量"],
        rows: [
          { 日期: "周一", 上周已读: "13", 本周已读: "6", "电子/总量": "0.33" },
          { 日期: "周二", 上周已读: "14", 本周已读: 0, "电子/总量": "0.32" },
          { 日期: "周三", 上周已读: "1", 本周已读: "", "电子/总量": "0.36" },
          { 日期: "周四", 上周已读: "7", 本周已读: "", "电子/总量": "0.38" },
          { 日期: "周五", 上周已读: "16", 本周已读: "", "电子/总量": "0.58" },
          { 日期: "周六", 上周已读: "13", 本周已读: "", "电子/总量": "0.78" },
          { 日期: "周日", 上周已读: "10", 本周已读: "", "电子/总量": "0.95" }
        ]
      },
      showRe: true,
      showMa: false,
      showTa: false,
      columns1: [
        {
          title: "类型",
          key: "type"
        },
        {
          title: "标题",
          key: "title"
        },
        {
          title: "时间",
          key: "time",
          sortable: true
        },
        {
          title: "关注",
          key: "focus"
        }
      ],
      data1: [
        {
          type: "电子",
          title: "时间的朋友",
          time: "2018-6-10",
          focus: "YES",
          date: "2016-10-03"
        },
        {
          type: "电子",
          title: "梦里花落知多少",
          time: "2018-2-10",
          focus: "YES",
          date: "2016-10-03"
        },
        {
          type: "文字",
          title: "学会阅读",
          time: "2017-5-10",
          focus: "NO",
          date: "2016-10-03"
        },
        {
          type: "电子",
          title: "懂得销售",
          time: "2012-6-10",
          focus: "NO",
          date: "2016-10-03"
        }
      ]
    };
  },
  computed: {
    currentEsy() {
        if (this.currentIdx) {
            this.$store.commit('add_book');
            var books = this.$store.state.currentTotalBook;
            this.chartData.rows[this.currentDay-1]['本周已读'] = books;

            this.$store.commit('add_table');
            var tables = this.$store.state.currentRead;
            console.log(tables)
            this.data1.push(tables[0]);
            // console.log(this.chartData.rows[this.currentDay-0]['本周已读'])
            return this.writings[this.currentIdx - 1];
        }else {
            return {};
        }
        
    }
  },
  methods: {
    currentItem() {},
    //设置表格每行显示的样式
    rowClassName(row, index) {
      if (index === 1) {
        return "demo-table-info-row";
      } else if (index === 3) {
        return "demo-table-error-row";
      }
      return "";
    },
    handleClick(tab, event) {
      console.log(tab._data.index)
      if (tab._data.index === "1") {
        var books = this.$store.state.currentTotalBook;
        this.chartData.rows[this.currentDay-1]['本周已读'] = books;
      }
      if (tab._data.index === "2") {
        this.data1 = [
        {
          type: "电子",
          title: "时间的朋友",
          time: "2018-6-10",
          focus: "YES",
          date: "2016-10-03"
        },
        {
          type: "电子",
          title: "梦里花落知多少",
          time: "2018-2-10",
          focus: "YES",
          date: "2016-10-03"
        },
        {
          type: "文字",
          title: "学会阅读",
          time: "2017-5-10",
          focus: "NO",
          date: "2016-10-03"
        },
        {
          type: "电子",
          title: "懂得销售",
          time: "2012-6-10",
          focus: "NO",
          date: "2016-10-03"
        }
      ];
        var tables = this.$store.state.currentRead;
        for(var bookMs of tables){
            this.data1.push(bookMs)
        }
      }
    },
    showMaTa(data) {
      if (data === "ma") {
        this.showMa = true;
        this.showTa = false;
        this.showRe = false;
        var books = this.$store.state.currentTotalBook;
        this.chartData.rows[this.currentDay-1]['本周已读'] = books;
      }
      if (data === "ta") {
        this.showMa = false;
        this.showRe = false;
        this.showTa = true;
        this.data1 = [
        {
          type: "电子",
          title: "时间的朋友",
          time: "2018-6-10",
          focus: "YES",
          date: "2016-10-03"
        },
        {
          type: "电子",
          title: "梦里花落知多少",
          time: "2018-2-10",
          focus: "YES",
          date: "2016-10-03"
        },
        {
          type: "文字",
          title: "学会阅读",
          time: "2017-5-10",
          focus: "NO",
          date: "2016-10-03"
        },
        {
          type: "电子",
          title: "懂得销售",
          time: "2012-6-10",
          focus: "NO",
          date: "2016-10-03"
        }
      ];
        var tables = this.$store.state.currentRead;
        for(var bookMs of tables){
            this.data1.push(bookMs)
        }
      }
      if (data === 're') {
          this.showRe = true;
          this.showMa = false;
          this.showTa = false;
      }
    },
    exportData() {
      this.$refs.table.exportCsv({
        filename: "今日学习清单"
      });
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  },
  updated() {
    // onsole.log(this.$refs.mySwiper.swiper.realIndex)
  }
};
</script>
<style scoped>
.title {
  display: flex;
  width: 10rem;
  height: 1.2rem;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.title div {
  height: 1.2rem;
  line-height: 1.2rem;
}

h2 {
    text-align: center;
}

.title_studyMap {
  color: #19d4ae;
}

.title_studyTable {
  color: #2db7f5;
}

.hoverAlready {
  color: yellowgreen;
}

.swiper {
  background-color: #fff;
}

.ivu-table .demo-table-info-row td {
  background-color: #2db7f5;
  color: #fff;
}
.ivu-table .demo-table-error-row td {
  background-color: #ff6600;
  color: #fff;
}
.ivu-table td.demo-table-info-column {
  background-color: #2db7f5;
  color: #fff;
}
.ivu-table .demo-table-info-cell-name {
  background-color: #2db7f5;
  color: #fff;
}
.ivu-table .demo-table-info-cell-age {
  background-color: #ff6600;
  color: #fff;
}
.ivu-table .demo-table-info-cell-address {
  background-color: #187;
  color: #fff;
}
.ivu-table-wrapper {
  width: 410px;
}
button {
  float: right;
}
</style>
